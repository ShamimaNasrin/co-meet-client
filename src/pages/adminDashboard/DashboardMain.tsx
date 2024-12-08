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
import StatisticCards from "../../components/adminDashboard/StatisticCards";
import BookingBarChart from "../../components/adminDashboard/BookingBarChart";
import BookingPieChart from "../../components/adminDashboard/BookingPieChart";

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
    <div className="min-h-screen xl:py-10 lg:py-8 py-6 xl:px-12 lg:px-12 md:px-8 px-6 mx-auto bg-zinc-50">
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6"
      >
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col justify-between items-center text-center p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ${section.bgColor}`}
          >
            <div className="mb-4">{section.icon}</div>
            <h2 className="text-xl font-bold text-gray-700">{section.title}</h2>
            <p className="text-gray-600 mb-4">{section.description}</p>
            <a
              href={section.link}
              className="inline-block px-4 py-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              Manage
            </a>
          </div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 gap-6 ">
        <BookingPieChart />
        <BookingBarChart />
      </div>

      <StatisticCards />
    </div>
  );
};

export default DashboardMain;
