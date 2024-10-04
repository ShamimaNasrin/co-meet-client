import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEdit } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import { TSlot, TSlotManage } from "../../../types";
import useTitle from "../../../customHooks/useTitle";
import LoadingSpinner from "../../../components/LoadingSpinner";
import NoDataFound from "../../../components/NoDataFound";
import ConfirmationModal from "../roomManagement/ConfirmationModal";
import {
  useAddNewSlotMutation,
  useFetchAllSlotsQuery,
  useModifyASlotMutation,
  useDeleteSingleSlotMutation,
} from "../../../redux/features/slot/slotApi";
import SlotFormModal from "./SlotFormModal";

const headings = [
  "Room Name",
  "Room No",
  "Date",
  "Start Time",
  "End Time",
  "Delete status",
  "Actions",
];

const SlotsManagement = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const { data, isLoading } = useFetchAllSlotsQuery({});
  const [addNewSlot] = useAddNewSlotMutation();
  const [deleteSingleSlot] = useDeleteSingleSlotMutation();
  const [modifyASlot] = useModifyASlotMutation();

  // console.log("data:", data);
  // console.log("selectedItem:", selectedItem);

  const handleAddSlot = async (newSlot: TSlot) => {
    // console.log("Slot added:", newSlot);

    try {
      const res = await addNewSlot(newSlot).unwrap();

      if (res?.success) {
        // console.log("add res:", res?.message);
        toast.success("Slot added successfully!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to Add Slot");
    }

    setShowAddModal(false);
  };

  const handleUpdateSlot = async (updatedSlot: TSlot) => {
    // console.log("Slot updated:", updatedSlot);
    const slotId = updatedSlot._id;
    try {
      const res = await modifyASlot({
        slotId,
        updatedSlot,
      }).unwrap();
      if (res?.success) {
        console.log("update res:", res?.message);
        toast.success("Slot updated successfully!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to update Slot");
    }
    setShowUpdateModal(false);
  };

  const handleDeleteRoom = async (id: string) => {
    // console.log("Slot deleted:", id);
    try {
      const res = await deleteSingleSlot(id).unwrap();
      if (res?.success) {
        console.log("delete res:", res?.message);
        toast.success("Slot deleted successfully!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to Delete Slot");
    }
    setShowDeleteModal(false);
  };

  //scrolltop
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useTitle("Slot Management");
  return (
    <div className="min-h-[70vh] xl:py-12 lg:py-10 py-7 xl:px-16 lg:px-16 md:px-10 px-7 bg-zinc-100">
      <h1 className="text-3xl font-bold mb-8 text-violet-600">
        Slot Management
      </h1>
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-violet-600 text-white px-4 py-2 rounded-none hover:bg-violet-700 transition"
        >
          Add Slot
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
              data?.data?.map((item: TSlotManage) => (
                <tr key={item?._id}>
                  <td className="border-b border-gray-800 px-2 py-4">
                    {item?.room?.name}
                  </td>
                  <td className="border-b border-gray-800 px-2 py-4">
                    {item?.room?.roomNo}
                  </td>
                  <td className="border-b border-gray-800 px-2 py-4">
                    {item?.date}
                  </td>
                  <td className="border-b border-gray-800 px-2 py-4">
                    {item?.startTime}
                  </td>
                  <td className="border-b border-gray-800 px-2 py-4">
                    {item?.endTime}
                  </td>
                  <td className="border-b border-gray-800 px-2 py-4">
                    {item?.isDeleted ? "Yes" : "No"}
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
        <SlotFormModal
          setCloseModal={setShowAddModal}
          onSubmit={handleAddSlot}
          isUpdating={false}
        />
      )}

      {showUpdateModal && selectedItem && (
        <SlotFormModal
          setCloseModal={setShowUpdateModal}
          onSubmit={handleUpdateSlot}
          isUpdating={true}
          slot={selectedItem}
        />
      )}
    </div>
  );
};

export default SlotsManagement;
