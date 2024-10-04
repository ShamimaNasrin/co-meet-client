/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { TRoom } from "../../../types";
import { useGetAllRoomsQuery } from "../../../redux/features/room/roomApi";

interface SlotFormProps {
  setCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: (slot: any) => void;
  isUpdating: boolean;
  slot?: any;
}

const SlotFormModal: React.FC<SlotFormProps> = ({
  setCloseModal,
  onSubmit,
  isUpdating,
  slot,
}) => {
  const [formData, setFormData] = useState(
    slot || {
      room: "",
      date: "",
      startTime: "",
      endTime: "",
    }
  );
  const [errorMessage, setErrorMessage] = useState("");
  const { data: roomData } = useGetAllRoomsQuery({});

  //   const [formData, setFormData] = useState(() => ({
  //     room: slot?.room?._id || "",
  //     date: slot?.date || "",
  //     startTime: slot?.startTime || "",
  //     endTime: slot?.endTime || "",
  //   }));

  useEffect(() => {
    if (slot && roomData?.data) {
      setFormData((prev: any) => ({
        ...prev,
        room: slot?.room?._id,
      }));
    }
  }, [slot, roomData]);

  //   console.log("Slot from update modal:", slot);

  const handleRoomNoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setErrorMessage("");
    // console.log("room:", typeof e.target.value);
    // const room = Number(e.target.value);
    const room = e.target.value;

    setFormData((prev: any) => ({ ...prev, room }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage("");
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrorMessage("");

    const startTimeDate = new Date(`1970-01-01T${formData.startTime}:00`);
    const endTimeDate = new Date(`1970-01-01T${formData.endTime}:00`);

    if (startTimeDate >= endTimeDate) {
      setErrorMessage("Start time must be earlier than end time.");
      return; // Exit the function if validation fails
    }

    onSubmit(formData);
    setCloseModal(false);
  };

  //   console.log("formData", formData);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-7 w-[550px] max-h-[85vh] overflow-y-auto rounded-none relative">
        <button
          onClick={() => setCloseModal(false)}
          className="absolute right-2 top-2 text-white bg-violet-600 hover:bg-gray-700 px-2 py-1"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold text-black text-center mb-6">
          {isUpdating ? "Update Slot" : "Add Slot"}
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Room No */}
          <label className="block mb-4">
            <span className="block text-gray-800 font-medium mb-2">
              Room No
            </span>
            <select
              name="room"
              value={formData.room}
              key={formData.room}
              onChange={handleRoomNoChange}
              className="w-full border border-gray-400 rounded-lg p-3 shadow-sm "
              required
            >
              <option value={0} disabled>
                Select Room No
              </option>
              {roomData?.data?.map((room: TRoom) => (
                <option key={room?._id} value={room?._id}>
                  {room?.roomNo}
                </option>
              ))}
            </select>
          </label>

          {/* Date */}
          <label className="block mb-4">
            <span className="block text-gray-800 font-medium mb-2">Date</span>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded-lg p-3 shadow-sm"
              required
            />
          </label>

          {/* start time */}
          <label className="block mb-4">
            <span className="block text-gray-800 font-medium mb-2">
              Start Time
            </span>
            <input
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded-lg p-3 shadow-sm"
              required
            />
          </label>

          {/* end time */}
          <label className="block mb-4">
            <span className="block text-gray-800 font-medium mb-2">
              End Time
            </span>
            <input
              type="time"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded-lg p-3 shadow-sm"
              required
            />
          </label>

          {errorMessage && (
            <p className="text-red-500 text-center mb-4">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="w-full py-3 bg-violet-500 text-white rounded-lg shadow-sm hover:violet-900 transition"
            disabled={
              !formData.room ||
              !formData.date ||
              !formData.startTime ||
              !formData.endTime ||
              errorMessage !== ""
            }
          >
            {isUpdating ? "Update Slot" : "Add Slot"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SlotFormModal;
