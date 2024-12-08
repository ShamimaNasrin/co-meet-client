import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import {
  MdOutlineDashboardCustomize,
  MdOutlineContactSupport,
} from "react-icons/md";
import { RiCustomerServiceFill } from "react-icons/ri";
import { BsShieldLock } from "react-icons/bs";
import SectionHeading from "../../components/SectionHeading";

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
    <div className="py-10 max-w-7xl mx-auto px-8 md:px-0">
      <SectionHeading
        icon={MdOutlineContactSupport}
        title="Why Choose Us?"
        subtitle="We ensure a premium experience for our customers through a wide array of
        benefits."
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
  );
};

const ServiceCard = ({ id, title, description }: StepCardProps) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, translateY: 0 }}
      initial={{ opacity: 0, translateY: 20 }}
      transition={{ duration: 0.8 }}
      className="text-center bg-white p-6 shadow-sm flex flex-col justify-evenly items-center rounded-lg"
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
      <p className="text-sm text-gray-700 ">{description}</p>
    </motion.div>
  );
};

export default WhyChooseUs;
