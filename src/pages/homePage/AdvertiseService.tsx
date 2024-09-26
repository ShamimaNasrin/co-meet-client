import { MdSupportAgent, MdLocalShipping } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiLock2Line } from "react-icons/ri";

type TProp = {
  title: string;
  description: string;
};

const services: TProp[] = [
  {
    title: "Top-notch Support",
    description: "Our Teams does its best to answer every question within 24h.",
  },
  {
    title: "Cash on Delivery",
    description: "We provide cash on delivery to all over Bangladesh",
  },
  {
    title: "Fast Shipping",
    description: "All orders for in-stock items ship by the next business day!",
  },
  {
    title: "Secure Payment",
    description:
      "All payments are securely processed to ensure customer safety.",
  },
];

const AdvertiseService = () => {
  return (
    <>
      <div className="py-10 xl:px-16 lg:px-16 md:px-10 px-7 bg-gradient-to-b from-white to-zinc-200 ">
        <h2 className="font-bold text-4xl mb-4">Why Us?</h2>

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

const ServiceCard = ({ title, description }: TProp) => {
  return (
    <div className="w-full h-[170px] bg-white p-5 shadow-lg flex flex-col justify-evenly items-center rounded-lg">
      {title === "Top-notch Support" ? (
        <MdSupportAgent className="text-purple-500 text-3xl" />
      ) : title === "Cash on Delivery" ? (
        <GiTakeMyMoney className="text-blue-600 text-3xl" />
      ) : title === "Fast Shipping" ? (
        <MdLocalShipping className="text-green-500 text-3xl" />
      ) : (
        <RiLock2Line className="text-yellow-400 text-3xl" />
      )}
      <p className="text-lg font-bold">{title}</p>
      <p className="text-base font-normal text-center text-gray-700">
        {description}
      </p>
    </div>
  );
};

export default AdvertiseService;
