import { useEffect } from "react";
import {
  FaDoorOpen,
  FaCalendarAlt,
  FaClipboardList,
  FaUsers,
} from "react-icons/fa";
// import toast from "react-hot-toast";
import { motion } from "framer-motion";

import useTitle from "../../customHooks/useTitle";

const sections = [
  {
    title: "Room Management",
    icon: <FaDoorOpen className="text-4xl text-indigo-500" />,
    description: "Manage and update rooms, availability, and details.",
    bgColor: "bg-indigo-100",
    link: "/admin/room-management",
  },
  {
    title: "Slots Management",
    icon: <FaCalendarAlt className="text-4xl text-green-500" />,
    description: "Control slot timings and availability for rooms.",
    bgColor: "bg-green-100",
    link: "/admin/slot-management",
  },
  {
    title: "Booking Management",
    icon: <FaClipboardList className="text-4xl text-yellow-500" />,
    description: "Monitor and manage room bookings and schedules.",
    bgColor: "bg-yellow-100",
    link: "/admin/booking-management",
  },
  {
    title: "User Management",
    icon: <FaUsers className="text-4xl text-red-500" />,
    description: "Manage users, roles, and permissions in the system.",
    bgColor: "bg-red-100",
    link: "/admin/user-management",
  },
];

const DashboardMain: React.FC = () => {
  //scrolltop
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useTitle("Dashboard");

  return (
    <div className="min-h-screen xl:py-12 lg:py-10 py-7 xl:px-16 lg:px-16 md:px-10 px-7 bg-zinc-100">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl font-bold text-center mb-8 text-violet-600"
      >
        Admin Dashboard
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, translateY: 0 }}
        initial={{ opacity: 0, translateY: 20 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col justify-between items-center text-center p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ${section.bgColor}`}
          >
            <div className="mb-4">{section.icon}</div>
            <h2 className="text-xl font-bold text-gray-700">{section.title}</h2>
            <p className="text-gray-600 mb-4">{section.description}</p>
            <a
              href={section.link}
              className="inline-block px-4 py-2 rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              Manage
            </a>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default DashboardMain;
