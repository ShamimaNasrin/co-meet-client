import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEdit } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import { TRoom } from "../../../types";
import useTitle from "../../../customHooks/useTitle";
import LoadingSpinner from "../../../components/LoadingSpinner";
import NoDataFound from "../../../components/NoDataFound";
import RoomFormModal from "./RoomFormModal";
import ConfirmationModal from "./ConfirmationModal";
import {
  useCreateARoomMutation,
  useDeleteSingleRoomMutation,
  useGetAllRoomsQuery,
  useUpdateARoomMutation,
} from "../../../redux/features/room/roomApi";

const headings = [
  "Room Name",
  "Room No",
  "Floor No",
  "Capacity",
  "Price",
  "Actions",
];

const RoomManagement = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<TRoom | null>(null);

  const { data, isLoading } = useGetAllRoomsQuery({});
  const [createARoom] = useCreateARoomMutation();
  const [deleteSingleRoom] = useDeleteSingleRoomMutation();
  const [updateARoom] = useUpdateARoomMutation();

  // console.log("data:", data?.data?.result);

  const handleAddRoom = async (newRoom: TRoom) => {
    // console.log("Room added:", newRoom);

    try {
      await createARoom(newRoom).unwrap();
      toast.success("Room added successfully!");

      // if (res?.success) {
      //   // console.log("add res:", res?.message);
      // }
    } catch (err) {
      console.error(err);
      toast.error("Failed to Add room");
    }

    setShowAddModal(false);
  };

  const handleUpdateRoom = async (updatedRoom: TRoom) => {
    // console.log("Room updated:", updatedRoom);
    const roomId = updatedRoom._id;
    try {
      const res = await updateARoom({
        roomId,
        updatedRoomData: updatedRoom,
      }).unwrap();
      if (res?.success) {
        console.log("update res:", res?.message);
        toast.success("Room updated successfully!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to update Room");
    }
    setShowUpdateModal(false);
  };

  const handleDeleteRoom = async (id: string) => {
    // console.log("Room deleted:", id);
    try {
      const res = await deleteSingleRoom(id).unwrap();
      if (res?.success) {
        console.log("delete res:", res?.message);
        toast.success("Room deleted successfully!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to Delete Room");
    }
    setShowDeleteModal(false);
  };

  //scrolltop
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useTitle("Room Management");

  return (
    <div className="min-h-[70vh] xl:py-12 lg:py-10 py-7 xl:px-16 lg:px-16 md:px-10 px-7 bg-zinc-100">
      <h1 className="text-3xl font-bold mb-8 text-violet-600">
        Room Management
      </h1>
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-violet-600 text-white px-4 py-2 rounded-none hover:bg-violet-700 transition"
        >
          Add Room
        </button>
      </div>
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
              data?.data?.map((item: TRoom) => (
                <tr key={item?._id}>
                  <td className="border-b border-gray-800 px-2 py-4">
                    {item?.name}
                  </td>
                  <td className="border-b border-gray-800 px-2 py-4">
                    {item?.roomNo}
                  </td>
                  <td className="border-b border-gray-800 px-2 py-4">
                    {item?.floorNo}
                  </td>
                  <td className="border-b border-gray-800 px-2 py-4">
                    {item?.capacity}
                  </td>
                  <td className="border-b border-gray-800 px-2 py-4">
                    Tk.{item?.pricePerSlot}
                  </td>
                  <td className="border-b border-gray-800 px-2 py-4">
                    <button
                      onClick={() => {
                        setSelectedItem(item);
                        setShowUpdateModal(true);
                      }}
                      className="mr-2 text-lg"
                    >
                      <AiOutlineEdit />
                    </button>
                    <button
                      onClick={() => {
                        // setSelectedItem(room);
                        setShowDeleteModal(true);
                      }}
                      className="text-lg text-red-600"
                    >
                      <FiTrash2 />
                    </button>

                    <ConfirmationModal
                      isOpen={showDeleteModal}
                      onClose={() => setShowDeleteModal(false)}
                      onConfirm={() => handleDeleteRoom(item?._id)}
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

      {showAddModal && (
        <RoomFormModal
          setCloseModal={setShowAddModal}
          onSubmit={handleAddRoom}
          isUpdating={false}
        />
      )}

      {showUpdateModal && selectedItem && (
        <RoomFormModal
          setCloseModal={setShowUpdateModal}
          onSubmit={handleUpdateRoom}
          isUpdating={true}
          room={selectedItem}
        />
      )}
    </div>
  );
};

export default RoomManagement;
