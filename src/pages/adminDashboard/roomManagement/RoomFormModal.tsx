/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { TRoom } from "../../../types";
import toast from "react-hot-toast";

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
      roomNo: 0,
      floorNo: 0,
      capacity: 0,
      pricePerSlot: 0,
      amenities: [],
      images: [],
    }
  );

  const [errorMessage, setErrorMessage] = useState("");

  const handleFloorNoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setErrorMessage("");
    // console.log("floor:", typeof e.target.value);
    const floorNo = Number(e.target.value);

    setFormData((prev) => ({ ...prev, floorNo, roomNo: 0 }));
  };

  const addAmenity = () => {
    setErrorMessage("");
    if (formData.amenities.length >= 3) {
      return toast("You can only add 3 Amenities at a time");
    } else {
      setFormData((formData) => ({
        ...formData,
        amenities: [...formData.amenities, ""],
      }));
    }
  };

  const handleAmenityChange = (index: number, value: string) => {
    setErrorMessage("");
    setFormData((formData) => {
      const updatedAmenities = formData.amenities.map((amenity, i) =>
        i === index ? value : amenity
      );
      return { ...formData, amenities: updatedAmenities };
    });
  };

  const addImage = () => {
    // console.log("Adding image", formData.images);
    setErrorMessage("");
    if (formData.images.length >= 3) {
      return toast("You can only add 3 images at a time");
    } else {
      setFormData((formData) => ({
        ...formData,
        images: [...formData.images, ""],
      }));
    }
  };

  // const handleImageChange = (index: number, value: string) => {
  //   console.log("update image", formData.images);
  //   setErrorMessage("");
  //   setFormData((formData) => {
  //     const updatedImages = formData.images.map((image, i) =>
  //       i === index ? value : image
  //     );
  //     return { ...formData, images: updatedImages };
  //   });
  // };

  const handleImageChange = (index: number, value: string) => {
    setErrorMessage("");
    // console.log("update image", formData.images);

    setFormData((formData) => {
      const updatedImages = formData.images.map((image, i) =>
        i === index ? value : image
      );
      return { ...formData, images: updatedImages };
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numericFields = ["roomNo", "floorNo", "capacity", "pricePerSlot"];

    // Ensure capacity is a non-fractional number
    if (name === "capacity" && !Number.isInteger(Number(value))) {
      setErrorMessage("Capacity must be a whole number");
      return;
    }

    // Convert numeric fields to numbers, else retain the original value
    setFormData({
      ...formData,
      [name]: numericFields.includes(name) ? Number(value) : value,
    });

    setErrorMessage("");
  };

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch (err: any) {
      console.error(err);
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate all image URLs
    const hasInvalidUrl = formData.images.some((image) => !isValidUrl(image));

    if (hasInvalidUrl) {
      return setErrorMessage("Image URL must be a valid URL");
    }

    // If all URLs are valid, proceed with form submission
    setErrorMessage("");
    onSubmit(formData);
    setCloseModal(false);
  };

  // console.log("formData", formData);

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
          {isUpdating ? "Update Room" : "Add Room"}
        </h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            <span className="block text-gray-800 font-medium mb-2">
              Room Name
            </span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Room Name"
              className="w-full p-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </label>

          {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-4"> */}
          <label className="block mb-4">
            <span className="block text-gray-800 font-medium mb-2">
              Floor No.
            </span>
            <select
              name="floorNo"
              value={formData.floorNo}
              onChange={handleFloorNoChange}
              className="w-full border border-gray-400 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            >
              <option value={0} disabled>
                Select floor
              </option>
              {Array.from({ length: 5 }, (_, i) => i + 1).map((floor) => (
                <option key={floor} value={floor}>
                  {floor}
                </option>
              ))}
            </select>
          </label>

          <label className="block mb-4">
            <span className="block text-gray-800 font-medium mb-2">
              Room No.
            </span>
            <input
              type="text"
              name="roomNo"
              value={formData.roomNo}
              onChange={handleChange}
              placeholder="Room No"
              className="w-full p-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </label>
          {/* </div> */}

          {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-4"> */}
          <label className="block mb-4">
            <span className="block text-gray-800 font-medium mb-2">
              Capacity
            </span>
            <input
              type="number"
              name="capacity"
              value={formData.capacity || ""}
              onChange={handleChange}
              placeholder="Capacity"
              min={1}
              className="w-full p-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </label>

          <label className="block mb-4">
            <span className="block text-gray-800 font-medium mb-2">
              Price Per Slot
            </span>
            <input
              type="number"
              name="pricePerSlot"
              value={formData.pricePerSlot || ""}
              onChange={handleChange}
              placeholder="Price Per Slot"
              min={0}
              className="w-full p-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </label>

          <div className="mb-4">
            <span className="block text-gray-800 font-medium mb-2">
              Amenities
            </span>

            {formData.amenities?.map((amenity, i) => (
              <div key={i} className="w-full flex items-center mb-2">
                <input
                  type="text"
                  value={amenity}
                  onChange={(e) => handleAmenityChange(i, e.target.value)}
                  placeholder="Enter amenity name"
                  className="w-full border border-gray-400 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addAmenity}
              className="w-full bg-gray-100 py-1 px-2 rounded border border-gray-300 hover:bg-gray-200"
              // disabled={formData.amenities?.length === 3}
            >
              Add
            </button>
          </div>

          <div className="mb-4">
            <span className="block text-gray-800 font-medium mb-2">
              Image URL
            </span>

            {formData.images?.map((image, i) => (
              <div key={i} className="w-full flex items-center mb-2">
                <input
                  type="text"
                  value={image}
                  onChange={(e) => handleImageChange(i, e.target.value)}
                  placeholder="Enter image url"
                  className="w-full border border-gray-400 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addImage}
              className="w-full bg-gray-100 py-1 px-2 rounded border border-gray-300 hover:bg-gray-200"
              // disabled={formData.amenities?.length === 3}
            >
              Add Image URL
            </button>
          </div>

          {errorMessage && (
            <p className="text-red-500 text-center mb-4">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600 transition"
            disabled={
              !formData.name ||
              !formData.roomNo ||
              !formData.floorNo ||
              !formData.capacity ||
              !formData.pricePerSlot ||
              !formData.amenities ||
              !formData.images ||
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
