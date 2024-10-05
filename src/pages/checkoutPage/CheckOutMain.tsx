import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";

const CheckOutMain: React.FC = () => {
  const currentUser = useAppSelector(useCurrentUser);
  const bookingData = useAppSelector((state: RootState) => state.booking);
  const navigate = useNavigate();

  // console.log("bookingData:", bookingData);

  const [selectedPayment, setSelectedPayment] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handlePaymentSelect = (paymentMethod: string) => {
    setSelectedPayment(paymentMethod);
  };

  const handleBookingConfirm = () => {
    if (!selectedPayment) {
      toast.error("Please select a payment method");
      return;
    }
    if (selectedPayment === "cash") {
      setIsModalOpen(true);
      console.log("Cash on Delivery order placed.");
    } else if (selectedPayment === "stripe") {
      setSelectedPayment("");
      toast.error("Stripe payment is coming soon!", {
        duration: 4000,
        position: "top-center",
      });
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedPayment("");
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex justify-center py-10 px-4">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-2xl p-10 transform transition-transform duration-300 hover:shadow-3xl">
        {/* Booking Summary */}
        <h2 className="text-3xl font-bold text-violet-600 mb-7 text-center tracking-wide">
          Booking Summary
        </h2>
        <div className="mb-8 border-b pb-6">
          {bookingData?.slots?.length > 0 ? (
            <p className="my-2 text-md">
              <strong className="text-gray-700">Room:</strong>{" "}
              {bookingData?.slots[0]?.room?.name}
            </p>
          ) : (
            <p className="my-2 text-md">
              <strong className="text-gray-700">Room:</strong> N/A
            </p>
          )}

          <p className="my-2 text-md">
            <strong className="text-gray-700">Date:</strong> {bookingData?.date}
          </p>
          {bookingData?.selectedTimes?.length > 0 ? (
            bookingData?.selectedTimes?.map((t, i) => (
              <p className="my-2 text-md" key={i}>
                <strong className="text-gray-700">Time:</strong> {t}
              </p>
            ))
          ) : (
            <p className="my-2 text-md">
              <strong className="text-gray-700">Time:</strong> N/A
            </p>
          )}

          <p className="my-2 text-md">
            <strong className="text-gray-700">Cost:</strong> $
            {bookingData?.totalCost}
          </p>
        </div>

        {/* User Details */}
        <h3 className="text-xl font-semibold text-gray-600 mb-6">
          Your Information
        </h3>
        <div className="mb-8 border-b pb-6">
          <p className="text-md">
            <strong className="text-gray-700">Name:</strong> {currentUser?.name}
          </p>
          <p className="text-md">
            <strong className="text-gray-700">Email:</strong>{" "}
            {currentUser?.email}
          </p>
        </div>

        {/* Payment Selection */}
        <h3 className="text-xl font-semibold text-gray-600 mb-6">
          Payment Method
        </h3>
        <div className="flex gap-6 mb-10">
          <button
            className={`${
              selectedPayment === "stripe"
                ? "bg-gradient-to-r from-purple-500 to-violet-600 text-white"
                : "bg-gray-200 text-gray-700"
            } px-5 py-3 w-[160px] rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out`}
            onClick={() => handlePaymentSelect("stripe")}
          >
            Pay with Stripe
          </button>
          <button
            className={`${
              selectedPayment === "cash"
                ? "bg-gradient-to-r from-purple-500 to-violet-600 text-white"
                : "bg-gray-200 text-gray-700"
            } px-5 py-3 w-[160px] rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out`}
            onClick={() => handlePaymentSelect("cash")}
          >
            Pay with Cash
          </button>
        </div>

        {/* Confirm Booking Button */}
        <button
          className="bg-gradient-to-r from-purple-500 to-violet-600 text-white font-semibold py-3 rounded-lg w-full hover:bg-violet-600 hover:scale-105 shadow-lg transition-transform duration-300"
          onClick={handleBookingConfirm}
        >
          Confirm Booking
        </button>
      </div>

      {/* Confirmation Modal */}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className="p-8 bg-white rounded-3xl shadow-2xl transform transition-transform ">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Booking Confirmed
            </h2>
            <p className="mb-2 text-md text-gray-700">
              Thank you, {currentUser?.name}! Your booking is placed.
            </p>
            <div className="mb-8">
              {bookingData?.slots?.length > 0 ? (
                <p className="my-2 text-md text-gray-700">
                  <strong>Room:</strong> {bookingData?.slots[0]?.room?.name}
                </p>
              ) : (
                <p className="my-2 text-md text-gray-700">
                  <strong>Room:</strong> N/A
                </p>
              )}

              <p className="my-2 text-md text-gray-700">
                <strong>Date:</strong> {bookingData?.date}
              </p>
              {bookingData?.selectedTimes?.length > 0 ? (
                bookingData?.selectedTimes?.map((t, i) => (
                  <p className="my-2 text-md text-gray-700" key={i}>
                    <strong>Time:</strong> {t}
                  </p>
                ))
              ) : (
                <p className="my-2 text-md text-gray-700">
                  <strong>Time:</strong> N/A
                </p>
              )}

              <p className="my-2 text-md text-gray-700">
                <strong>Cost:</strong> ${bookingData?.totalCost}
              </p>
            </div>
            <button
              className="bg-violet-500 text-white py-3 rounded-md w-full hover:bg-violet-600 shadow-lg transition-all duration-200"
              onClick={handleModalClose}
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default CheckOutMain;
