import { Link } from "react-router-dom";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { SiYoutube } from "react-icons/si";
import { PiInstagramLogo } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="w-full bottom-0 left-0 z-50 bg-black xl:px-16 lg:px-16 md:px-10 px-7 xl:py-10 lg:py-10 md:py-7 py-5">
      <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col justify-between items-start py-3 ">
        <div className="xl:mt-1 lg:mt-1 md:mt-1 mt-3 xl:w-1/3 lg:w-1/3 md:w-2/5 ">
          <h1 className="text-lg font-semibold text-white">KeyClicks</h1>
          <p className="text-base font-normal text-gray-300">
            Keebsforall Marketplace is an online marketplace dedicated to
            mechanical keyboard enthusiasts.
          </p>
        </div>
        <div className="xl:mt-1 lg:mt-1 md:mt-1 mt-3 ">
          <h1 className="text-lg font-semibold text-white">Quick Links</h1>

          <p className="text-base font-normal text-gray-300">
            <Link to="/about">About us</Link>
          </p>
          <p className="text-base font-normal text-gray-300">
            <Link to="/contact">Contact us</Link>
          </p>
          <p className="text-base font-normal text-gray-300">
            <Link to="/faqs">FAQ</Link>
          </p>
        </div>
        <div className="xl:mt-1 lg:mt-1 md:mt-1 mt-3 ">
          <h1 className="text-lg font-semibold text-white mb-2">Join Us</h1>

          <p className="text-base font-normal text-gray-300  mb-1">
            Subscribe to our newsletter!
          </p>
          <div className="flex bg-white p-2">
            <input
              type="email"
              className=" bg-white px-2 py-1 focus:outline-none"
              placeholder="Email.."
            />
            <button className="text-white bg-black py-2 px-4">
              Subscribe!
            </button>
          </div>
        </div>
      </div>
      <div className="m-auto w-full text-center flex justify-center items-center mt-10">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoFacebookSquare className="text-white text-2xl" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3"
        >
          <RiTwitterXFill className="text-white text-xl" />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3"
        >
          <SiYoutube className="text-white text-2xl" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3"
        >
          <PiInstagramLogo className="text-white text-2xl" />
        </a>
      </div>
      <hr className="border-t border-gray-700 my-6 " />
      <p className="text-base font-semibold text-gray-500">
        &copy; 2024, KeyClicks{" "}
      </p>
    </div>
  );
};

export default Footer;
