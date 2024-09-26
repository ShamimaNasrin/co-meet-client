import errorImg from "../../assets/images/error.png";

import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="relative h-screen">
      <img className="w-[50%] m-auto" src={errorImg} alt="error" />
      <Link to="/home">
        <button
          // className="font-medium px-5 py-3 absolute z-10 border bg-gray-900 backdrop-filter backdrop-blur-md bg-opacity-10"
          className="font-medium px-5 py-3 absolute z-10 rounded border-none bg-black text-white hover:bg-gray-700"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
