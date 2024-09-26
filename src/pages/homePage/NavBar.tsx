import { useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import { PiShoppingCartSimple } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";
import "./styles/navbar.css";
// import { useAppSelector } from "../../redux/hooks";
// import { RootState } from "../../redux/store";

const NavBar = () => {
  const links = [
    { name: "Home", path: "/home" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Dashboard", path: "/dashboard" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className=" shadow-md w-full sticky top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-black py-4 xl:px-16 lg:px-16 md:px-10 px-7">
        <Link to="/" className="normal-case">
          <div
            className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
   text-white"
          >
            {/* <span className="text-3xl text-indigo-600 mr-1 pt-2">.</span> */}
            KeyClicks
          </div>
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <RiCloseLargeFill className="text-white" />
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-base md:my-0 my-7 text-white hover:text-gray-400 duration-500"
            >
              <NavLink to={link.path}>{link.name}</NavLink>
            </li>
          ))}

          <div className="relative">
            <Link to="/cart">
              <PiShoppingCartSimple className="text-white text-xl xl:ml-7 lg:ml-7 md:ml-7" />
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
