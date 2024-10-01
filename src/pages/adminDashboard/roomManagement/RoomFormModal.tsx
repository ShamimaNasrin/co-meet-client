/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { TRoom } from "../../../types";

interface RoomFormProps {
  setCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: (room: any) => void;
  isUpdating: boolean;
  room?: any;
}

const RoomFormModal: React.FC<RoomFormProps> = ({
  setCloseModal,
  onSubmit,
  isUpdating,
  room,
}) => {
  const [formData, setFormData] = useState<TRoom>(
    room || {
      name: "",
      roomNo: "",
      floorNo: "",
      capacity: 0,
      pricePerSlot: 0,
    }
  );

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Ensure capacity is a non-fractional number
    if (name === "capacity" && !Number.isInteger(Number(value))) {
      setErrorMessage("capacity must be a whole number");
      return;
    }

    setFormData({
      ...formData,
      [name]:
        name === "pricePerSlot" || name === "capacity" ? Number(value) : value,
    });
    setErrorMessage("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(formData);
    setCloseModal(false);
  };

  //   console.log("formData", formData);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-7 w-[500px] max-h-[75vh] overflow-y-auto rounded-none relative">
        <button
          onClick={() => setCloseModal(false)}
          className="absolute right-2 top-2 text-white bg-violet-600 hover:bg-gray-700 px-2 py-1"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold text-black text-center mb-6">
          {isUpdating ? "Update Product" : "Add Product"}
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Room Name"
            className="w-full p-3 mb-4 border border-gray-300 rounded-none"
            required
          />

          <input
            type="text"
            name="roomNo"
            value={formData.roomNo}
            onChange={handleChange}
            placeholder="Room No"
            className="w-full p-3 mb-4 border border-gray-300 rounded-none"
            required
          />

          <input
            type="number"
            name="floorNo"
            value={formData.floorNo}
            onChange={handleChange}
            placeholder="Floor No"
            className="w-full p-3 mb-4 border border-gray-300 rounded-none"
            required
          />
          <input
            type="number"
            name="capacity"
            value={formData.capacity || ""}
            onChange={handleChange}
            placeholder="Capacity"
            className="w-full p-3 mb-4 border border-gray-300 rounded-none"
            required
            step="1"
            min="0"
          />
          <input
            type="number"
            name="pricePerSlot"
            value={formData.pricePerSlot}
            onChange={handleChange}
            placeholder="Price Per Slot"
            className="w-full p-3 mb-4 border border-gray-300 rounded-none"
            required
            min="0"
          />

          {errorMessage && (
            <p className="text-red-500 text-center mb-4">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="w-full py-3 bg-violet-600 text-white rounded-none hover:bg-gray-700 transition"
            disabled={
              !formData.name ||
              !formData.roomNo ||
              !formData.floorNo ||
              !formData.capacity ||
              !formData.pricePerSlot ||
              errorMessage !== ""
            }
          >
            {isUpdating ? "Update Room" : "Add Room"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RoomFormModal;
