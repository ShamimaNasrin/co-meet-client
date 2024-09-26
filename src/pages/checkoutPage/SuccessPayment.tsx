import { useNavigate } from "react-router-dom";
import { FaRegCheckCircle } from "react-icons/fa";
const SuccessPayment: React.FC = () => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-green-500 mb-4">
          Order Placed!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Thank you for your purchase. Your order was successfully placed, and
          we will process it shortly.
        </p>
        <FaRegCheckCircle className="w-full mx-auto text-center text-green-500 text-7xl" />
        <button
          onClick={handleContinueShopping}
          className=" transition-colors mt-4 px-4 py-2 font-medium w-[200px] text-white bg-black  hover:bg-gray-700"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default SuccessPayment;
