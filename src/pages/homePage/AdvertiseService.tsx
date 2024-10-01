import { MdSupportAgent } from "react-icons/md";
import { GoClockFill } from "react-icons/go";
import { FaCalendarCheck } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { motion } from "framer-motion";

type TProp = {
  id: number;
  title: string;
  description: string;
};

const services: TProp[] = [
  {
    id: 1,
    title: "Real-Time Availability",
    description:
      "Check room availability in real-time and secure your booking instantly.",
  },
  {
    id: 2,
    title: "Instant Booking Confirmation",
    description:
      "Receive immediate confirmation once your meeting room is booked.",
  },
  {
    id: 3,
    title: "Flexible Scheduling",
    description:
      "Easily adjust your booking times with flexible scheduling options that suit your needs.",
  },
  {
    id: 4,
    title: "24/7 Support",
    description:
      "Our support team is available 24/7 to assist you with any booking-related inquiries.",
  },
];

const AdvertiseService = () => {
  return (
    <>
      <div className="py-10 xl:px-16 lg:px-16 md:px-10 px-7 bg-gradient-to-b from-white to-zinc-200 ">
        <h2 className="font-bold text-4xl text-indigo-600">Our Services</h2>
        <p className="mb-4 text-gray-700">Even more reasons to stay with us</p>

        <div className="container mx-auto px-4">
          <div
            className="
          grid gap-4 
          grid-cols-1
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          xl:grid-cols-4
        "
          >
            {services.map((service, i) => (
              <ServiceCard
                key={i}
                id={service.id}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const ServiceCard = ({ id, title, description }: TProp) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, translateY: 0 }}
      initial={{ opacity: 0, translateY: 20 }}
      transition={{ duration: 1 }}
      className="w-full text-center bg-white p-5 shadow-lg flex flex-col justify-evenly items-center rounded-lg"
    >
      <div className="bg-[#EEE6F4] rounded-full p-3">
        {id === 1 ? (
          <GoClockFill className="text-indigo-600 text-3xl" />
        ) : id === 2 ? (
          <FaCalendarCheck className="text-indigo-600 text-3xl" />
        ) : id === 3 ? (
          <SlCalender className="text-indigo-600 text-3xl" />
        ) : (
          <MdSupportAgent className="text-indigo-600 text-3xl" />
        )}
      </div>
      <p className="text-lg font-semibold my-2">{title}</p>
      <p className="text-sm text-gray-700 ">{description}</p>
    </motion.div>
  );
};

export default AdvertiseService;
