/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import useTitle from "../../../customHooks/useTitle";
import NoDataFound from "../../../components/NoDataFound";
import LoadingSpinner from "../../../components/LoadingSpinner";
import {
  useFetchAllBookingsQuery,
  useModifyBookingMutation,
  useRemoveBookingMutation,
} from "../../../redux/features/bookings/bookigApi";
import { TSlot } from "../../../types";
import { FiTrash2 } from "react-icons/fi";
import ConfirmationModal from "../roomManagement/ConfirmationModal";
import toast from "react-hot-toast";

const headings = [
  "Room Name",
  "User Name",
  "Date",
  "Time",
  "Cost",
  "Status(User)",
  "Status(Admin)",
  "Actions",
];
const BookingManagement = () => {
  const { data, isLoading } = useFetchAllBookingsQuery({});
  const [removeBooking] = useRemoveBookingMutation();
  const [modifyBooking] = useModifyBookingMutation();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // console.log(data);

  const handleDeleteBooking = async (bookingId: string) => {
    // console.log("booking deleted:", bookingId);
    try {
      const res = await removeBooking(bookingId).unwrap();
      if (res?.success) {
        console.log("delete res:", res?.message);
        toast.success("booking deleted successfully!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to Delete booking");
    }
    setShowDeleteModal(false);
  };

  const handleApproveStatus = async (bookingId: string, status: string) => {
    // console.log(bookingId, status);
    try {
      await modifyBooking({
        bookingId,
        updatedInfo: { isApproved: status },
      }).unwrap();
      toast.success("Booking updated successfully!");
    } catch (err) {
      toast.error("Failed to update booking");
      console.error("Error updating booking", err);
    }
  };

  //scrolltop
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useTitle("Booking management");

  return (
    <div className="min-h-[70vh] xl:py-12 lg:py-10 py-7 xl:px-16 lg:px-16 md:px-10 px-7 bg-zinc-100">
      <h1 className="text-3xl font-bold mb-8 text-violet-600">
        Booking management
      </h1>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <table className="mx-auto xl:w-[80%] lg:w-[80%] md:w-[70%] w-full text-left table-auto border-collapse">
          <thead>
            <tr>
              {headings.map((h, i) => (
                <th key={i} className="border-b border-gray-700 px-2 py-4">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.data?.length ? (
              data?.data?.map((item: any) => (
                <tr key={item?._id}>
                  <td className="border-b border-gray-800 px-2 py-4">
                    {item?.room?.name}
                  </td>
                  <td className="border-b border-gray-800 px-2 py-4">
                    {item?.user?.name}
                  </td>
                  <td className="border-b border-gray-800 px-2 py-4">
                    {item?.date}
                  </td>
                  <td className="border-b border-gray-800 px-2 py-4">
                    {item?.slots?.map((slot: TSlot) => (
                      <span className="my-2 text-md" key={slot?._id}>
                        {slot.startTime} - {slot.endTime}
                      </span>
                    ))}
                  </td>
                  <td className="border-b border-gray-800 px-2 py-4">
                    {item?.totalAmount}
                  </td>
                  <td className="border-b border-gray-800 px-2 py-4">
                    {item?.isConfirmed}
                  </td>
                  <td className="border-b border-gray-800 px-2 py-4">
                    {item.isApproved === "pending" ? (
                      <>
                        <button
                          onClick={() =>
                            handleApproveStatus(item._id, "Approved")
                          }
                          className={
                            "py-1 px-3 rounded bg-green-500 text-white"
                          }
                        >
                          Approve
                        </button>

                        <button
                          onClick={() =>
                            handleApproveStatus(item._id, "Rejected")
                          }
                          className={"py-1 px-3 rounded bg-red-500 text-white"}
                          // disabled={item.isApproved !== "pending"}
                        >
                          Reject
                        </button>
                      </>
                    ) : (
                      item?.isApproved
                    )}
                  </td>

                  <td className="border-b border-gray-800 px-2 py-4">
                    <button
                      onClick={() => {
                        setShowDeleteModal(true);
                      }}
                      className="text-lg text-red-600"
                    >
                      <FiTrash2 />
                    </button>

                    <ConfirmationModal
                      isOpen={showDeleteModal}
                      onClose={() => setShowDeleteModal(false)}
                      onConfirm={() => handleDeleteBooking(item?._id)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <NoDataFound />
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BookingManagement;
