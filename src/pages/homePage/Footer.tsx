import { Link } from "react-router-dom";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { SiYoutube } from "react-icons/si";
import { PiInstagramLogo } from "react-icons/pi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const links = [
  { name: "FAQ", path: "/faqs" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

const Footer = () => {
  return (
    <div className="w-full bottom-0 left-0 z-50 bg-zinc-200 xl:px-16 lg:px-16 md:px-10 px-7 xl:py-10 lg:py-10 md:py-7 py-5 font-sans">
      <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col justify-between items-start py-3 ">
        <div className="xl:mt-1 lg:mt-1 md:mt-1 mt-3 xl:w-1/3 lg:w-1/3 md:w-2/5 ">
          <h1 className="text-lg font-semibold text-gray-800">CoMeet</h1>
          <p className="text-base font-normal text-gray-600">
            Your seamless space for every meeting moment.
          </p>
        </div>
        <div className="xl:mt-1 lg:mt-1 md:mt-1 mt-3 ">
          <h1 className="text-lg font-semibold text-gray-800">Quick Links</h1>

          {links.map((link) => (
            <p
              key={link.name}
              className="text-base font-normal text-gray-600 hover:text-gray-800"
            >
              <Link to={link.path}>{link.name}</Link>
            </p>
          ))}
        </div>
        <div className="xl:mt-1 lg:mt-1 md:mt-1 mt-3 ">
          <h1 className="text-lg font-semibold text-gray-800">Contact Us</h1>

          <p className="text-base font-normal text-gray-600 hover:text-gray-800 flex items-center">
            <IoIosMail className="mr-1 text-[18px]" />
            info@comeet.com
          </p>
          <p className="text-base font-normal text-gray-600 hover:text-gray-800 flex items-center">
            <FaPhone className="mr-1" />
            +880 18352629
          </p>
          <p className="text-base font-normal text-gray-600 hover:text-gray-800 flex items-center">
            <FaMapMarkerAlt className="mr-1" />
            Dhanmondi, Dhaka
          </p>
        </div>
      </div>
      <div className="m-auto w-full text-center flex justify-center items-center mt-10">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoFacebookSquare className="text-gray-700 text-2xl" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3"
        >
          <RiTwitterXFill className="text-gray-700 text-xl" />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3"
        >
          <SiYoutube className="text-gray-700 text-2xl" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3"
        >
          <PiInstagramLogo className="text-gray-700 text-2xl" />
        </a>
      </div>
      <hr className="border-t border-gray-700 my-6 " />
      <p className="text-base font-semibold text-gray-500">
        &copy; 2024, CoMeet{" "}
      </p>
    </div>
  );
};

export default Footer;
