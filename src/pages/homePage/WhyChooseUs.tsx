import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { RiCustomerServiceFill } from "react-icons/ri";
import { BsShieldLock } from "react-icons/bs";

interface StepCardProps {
  id: number;
  title: string;
  description: string;
}

const services = [
  {
    id: 1,
    title: "Seamless Booking Experience",
    description:
      "Enjoy a hassle-free booking process with real-time availability updates and instant room reservations.",
  },
  {
    id: 2,
    title: "Secure Transactions",
    description:
      "Book with confidence as all transactions are protected, ensuring a safe and secure payment experience.",
  },
  {
    id: 3,
    title: "Customizable Room Options",
    description:
      "Choose from a variety of room layouts and amenities to tailor the space to your specific meeting needs.",
  },
  {
    id: 4,
    title: "24/7 Customer Support",
    description:
      "Our support team is available 24/7 to assist you with any booking-related inquiries.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="py-10 xl:px-16 lg:px-16 md:px-10 px-7 bg-gradient-to-b from-white to-zinc-200 ">
      <h2 className="font-bold text-4xl text-indigo-600">Why Choose Us?</h2>
      <p className="mb-4 text-gray-700">
        We ensure a premium experience for our customers through a wide array of
        benefits.
      </p>

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
  );
};

const ServiceCard = ({ id, title, description }: StepCardProps) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, translateY: 0 }}
      initial={{ opacity: 0, translateY: 20 }}
      transition={{ duration: 0.8 }}
      className="w-full h-[190px] bg-white p-5 shadow-lg flex flex-col justify-evenly items-center rounded-lg"
    >
      {id === 1 ? (
        <FaCheckCircle className="text-indigo-600 text-3xl" />
      ) : id === 2 ? (
        <BsShieldLock className="text-indigo-600 text-3xl" />
      ) : id === 3 ? (
        <MdOutlineDashboardCustomize className="text-indigo-600 text-3xl" />
      ) : (
        <RiCustomerServiceFill className="text-indigo-600 text-3xl" />
      )}

      <p className="text-lg font-semibold my-2">{title}</p>
      <p className="text-sm  text-center text-gray-700 ">{description}</p>
    </motion.div>
  );
};

export default WhyChooseUs;
