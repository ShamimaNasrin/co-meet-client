import { MdSupportAgent } from "react-icons/md";
import { GoClockFill } from "react-icons/go";
import { FaCalendarCheck } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { motion } from "framer-motion";
import { RiServiceLine } from "react-icons/ri";
import SectionHeading from "../../components/SectionHeading";

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
      {/* <div className="py-10 xl:px-16 lg:px-16 md:px-10 px-7 bg-gradient-to-b from-zinc-50 to-zinc-200 "> */}
      <div className="py-10 max-w-7xl mx-auto px-8 md:px-0">
        <SectionHeading
          icon={RiServiceLine}
          title="Our Services"
          subtitle="Even more reasons to stay with us"
        />

        <div className="grid gap-8 grid-cols-1  md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
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
    </>
  );
};

const ServiceCard = ({ id, title, description }: TProp) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, translateY: 0 }}
      initial={{ opacity: 0, translateY: 20 }}
      transition={{ duration: 1 }}
      className=" text-center bg-white p-6 shadow-sm flex flex-col justify-evenly items-center rounded-lg"
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
