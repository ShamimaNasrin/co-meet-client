/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import useTitle from "../../customHooks/useTitle";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { TSlotManage } from "../../types";
import { useFetchAvailableSlotsQuery } from "../../redux/features/slot/slotApi";
import { bookingDatat } from "../../redux/features/bookings/bookSlice";
import LoadingSpinner from "../../components/LoadingSpinner";

const BookingsMain: React.FC = () => {
  const { roomId } = useParams<{ roomId: string }>();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);
  const [availableSlots, setAvailableSlots] = useState<TSlotManage[]>([]);
  const [selectedSlots, setSelectedSlots] = useState<TSlotManage[]>([]);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(useCurrentUser);

  //   console.log("roomId:", roomId);
  const [totalCost, setTotalCost] = useState<number>(0);

  const { data: availSlots, isLoading } = useFetchAvailableSlotsQuery({});
  //   console.log("selectedTimes:", selectedTimes);
  //   console.log("selectedSlots:", selectedSlots);

  useEffect(() => {
    // Filter slots by roomId and selectedDate
    if (selectedDate && availSlots?.data?.length) {
      const filtered = availSlots?.data?.filter(
        (slot: any) => slot?.room?._id === roomId && slot?.date === selectedDate
      );
      setAvailableSlots(filtered);
    }
  }, [roomId, availSlots, selectedDate]);

  useEffect(() => {
    if (selectedSlots?.length) {
      const pricePerSlot = selectedSlots[0]?.room?.pricePerSlot;
      const total = pricePerSlot * selectedSlots.length;
      setTotalCost(total);
    } else {
      setTotalCost(0);
    }
  }, [selectedSlots]);

  const handleProceedToCheckout = () => {
    if (selectedSlots?.length && selectedTimes?.length) {
      const bookingInfo = {
        date: selectedDate,
        selectedTimes,
        slots: selectedSlots,
        totalCost,
      };
      console.log(bookingInfo);
      dispatch(bookingDatat(bookingInfo));
      navigate("/user/checkout");
    }
  };

  const handleDateSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  // Toggle function to handle both time and slot object selection
  const handleTimeSlotToggle = (slot: TSlotManage) => {
    const timeString = `${slot.startTime} - ${slot.endTime}`;

    // Handle selectedTimes (time strings)
    setSelectedTimes((prev) =>
      prev.includes(timeString)
        ? prev.filter((t) => t !== timeString)
        : [...prev, timeString]
    );

    // Handle selectedSlots (slot objects)
    setSelectedSlots((prev) =>
      prev.some(
        (s) => s.startTime === slot.startTime && s.endTime === slot.endTime
      )
        ? prev.filter(
            (s) => s.startTime !== slot.startTime || s.endTime !== slot.endTime
          )
        : [...prev, slot]
    );
  };

  //scrolltop
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useTitle("Bookings");
  return (
    <div className="max-w-3xl mx-auto p-6 border border-gray-200 rounded-lg my-8 shadow-md">
      <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">
        Book Your Slot
      </h2>

      {/* User Details */}
      <div className="p-4 mb-8  border-gray-200 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-700 flex items-center mb-4">
          User Details
        </h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={currentUser?.name}
              disabled
              className="w-full px-4 py-2 border rounded-lg bg-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={currentUser?.email}
              disabled
              className="w-full px-4 py-2 border rounded-lg bg-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              value={currentUser?.phone}
              disabled
              className="w-full px-4 py-2 border rounded-lg bg-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              value={currentUser?.address}
              disabled
              className="w-full px-4 py-2 border rounded-lg bg-gray-100"
            />
          </div>
        </form>
      </div>

      {/* Date and Time Slot Selection */}
      <div className="p-4  border-gray-200 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-700 flex items-center mb-4">
          Select Date
        </h3>

        <input
          type="date"
          name="date"
          onChange={handleDateSelect}
          className="w-full border border-gray-400 rounded-lg p-3 shadow-sm"
          required
        />

        {selectedDate && (
          <>
            <h3 className="text-lg font-semibold text-gray-700 flex items-center mt-6 mb-4">
              Available Time Slots
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {isLoading ? (
                <LoadingSpinner />
              ) : (
                <>
                  {availableSlots?.length > 0 ? (
                    availableSlots.map((slot, index) => {
                      const timeString = `${slot.startTime} - ${slot.endTime}`;
                      return (
                        <button
                          key={index}
                          onClick={() => handleTimeSlotToggle(slot)}
                          className={`py-2 px-4 border rounded-lg cursor-pointer ${
                            selectedTimes.includes(timeString)
                              ? "bg-violet-500 text-white"
                              : "bg-white text-gray-700 border-gray-300"
                          }`}
                        >
                          {timeString}
                        </button>
                      );
                    })
                  ) : (
                    <p className="text-center text-red-500">
                      No available slots for the selected date.
                    </p>
                  )}
                </>
              )}
            </div>

            {selectedTimes.length > 0 && (
              <div className="mt-6 flex justify-center">
                <button
                  onClick={handleProceedToCheckout}
                  className="bg-green-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-600 transition"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BookingsMain;
