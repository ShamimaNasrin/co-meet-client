import { motion } from "framer-motion";
import { GoClockFill } from "react-icons/go";
import { FaCalendarAlt, FaCheckCircle } from "react-icons/fa";
import { IconType } from "react-icons";

const steps = [
  {
    icon: FaCalendarAlt,
    title: "Select a Room",
    description:
      "Explore our diverse range of rooms, designed to accommodate your unique meeting needs, whether it's a cozy discussion or a large-scale event.",
    delay: 0,
  },
  {
    icon: GoClockFill,
    title: "Choose Date & Time",
    description:
      "Pick a date and time that fits your schedule from our intuitive calendar. Our flexible time slots ensure you find the perfect moment for your meeting.",
    delay: 0.2,
  },
  {
    icon: FaCheckCircle,
    title: "Confirm Booking",
    description:
      "Verify all the details, and with a single click, lock in your reservation for a seamless and efficient booking experience.",
    delay: 0.4,
  },
];

interface StepCardProps {
  icon: IconType;
  title: string;
  description: string;
  delay: number;
}

const HowItWorks = () => {
  return (
    <div className="py-10 xl:px-16 lg:px-16 md:px-10 px-7">
      <h2 className="font-bold text-4xl text-indigo-600">How It Works</h2>
      <p className="mb-4 text-gray-700">Book a room in 3 simple step</p>

      <div className="relative">
        {/* Timeline Connector */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full z-0"></div>

        <div className="container mx-auto px-4">
          <div
            className="
          grid gap-4 
          grid-cols-1
          sm:grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-3
        "
          >
            {steps.map((step, index) => (
              <StepCard
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                delay={step.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const StepCard: React.FC<StepCardProps> = ({
  icon: Icon,
  title,
  description,
  delay,
}) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg text-left relative  shadow-md"
      whileInView={{ opacity: 1, translateY: 0 }}
      initial={{ opacity: 0, translateY: 20 }}
      transition={{ duration: 0.8, delay }}
    >
      <div className="flex items-center justify-center  w-16 h-16 mb-4 mx-auto">
        <Icon size={32} className="text-indigo-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
        {title}
      </h3>
      <p className="text-gray-600 text-center">{description}</p>
    </motion.div>
  );
};

export default HowItWorks;
