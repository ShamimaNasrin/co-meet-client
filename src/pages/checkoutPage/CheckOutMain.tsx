import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import { useAppDispatch } from "../../redux/hooks";

const CheckOutMain: React.FC = () => {
  const navigate = useNavigate();
  // const dispatch = useAppDispatch();

  const [paymentMethod, setPaymentMethod] = useState<string>("");

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  const handlePlaceOrder = () => {
    if (paymentMethod === "cod") {
      handleSuccess();
      console.log("Cash on Delivery order placed.");
    } else if (paymentMethod === "stripe") {
      toast("Stripe payment is coming soon!", {
        duration: 4000,
        position: "top-center",
      });
    }
  };

  const handleSuccess = () => {
    navigate("/success");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const userName = form.username.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const city = form.city.value;
    const address = form.address.value;

    // console.log(userName, email, phone, city, address);

    if (
      userName?.length < 1 ||
      email?.length < 1 ||
      phone?.length < 1 ||
      city?.length < 1 ||
      address?.length < 1
    ) {
      toast.error("Please fill in all required fields.", {
        duration: 4000,
        position: "top-center",
      });
      return;
    } else if (paymentMethod?.length < 1) {
      toast.error("Select payment option", {
        duration: 4000,
        position: "top-center",
      });
      return;
    } else {
      handlePlaceOrder();
    }

    form.reset();
  };

  return (
    <div className="bg-zinc-100 xl:py-12 lg:py-10 py-7 xl:px-20 lg:px-20 md:px-10 px-7 mx-auto w-full min-h-[70vh]">
      <div className="mx-auto max-w-2xl bg-zinc-100 ">
        <h2 className="text-3xl font-bold mb-4">Checkout</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="username"
            >
              Name
            </label>
            <input
              id="username"
              name="username"
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="city">
              City
            </label>
            <input
              id="city"
              name="city"
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="address">
              Delivery Address
            </label>
            <textarea
              id="address"
              name="address"
              placeholder="House number and street name"
              className="w-full p-2 border border-gray-300 rounded-md"
              // value={userDetails.address}
              // onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
            <div>
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={handlePaymentChange}
                  className="form-radio h-4 w-4 text-black"
                />
                <span className="ml-2">Cash on Delivery</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="stripe"
                  checked={paymentMethod === "stripe"}
                  onChange={handlePaymentChange}
                  className="form-radio h-4 w-4 text-black"
                />
                <span className="ml-2">Stripe</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            // onClick={handlePlaceOrder}
            className="mt-4 px-4 py-2 font-medium w-[200px] text-white bg-black  hover:bg-gray-700"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckOutMain;
