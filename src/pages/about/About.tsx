import { useEffect } from "react";
import redblackkey from "../../assets/images/redblackkey.jpg";
import useTitle from "../../customHooks/useTitle";
const About = () => {
  //scrolltop
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useTitle("About");
  return (
    <div className=" relative min-h-screen xl:py-12 xl:px-16 lg:py-12 lg:px-16 md:p-8 sm:p-5 p-5 flex">
      {/* Blurred Background */}
      <div className="absolute inset-0 bg-contact-bg bg-cover bg-center filter blur-xs"></div>

      <div className="z-10 w-full flex lg:flex-row md:flex-row sm:flex-col flex-col  items-center xl:justify-between lg:justify-between md:justify-between">
        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 p-5 flex justify-center items-center">
          <img className="w-[90%]" src={redblackkey} alt="" />
        </div>
        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 p-5">
          <h2 className="text-3xl font-bold text-black text-center">
            About KeyClicks
          </h2>
          <hr className="border-t-2 border-black mt-6 mb-2" />
          <p className="mb-4 lg:text-lg text-base text-gray-800">
            KeyClicks is dedicated to delivering premium mechanical keyboards,
            DIY kits, components, and accessories to enthusiasts and hobbyists.
          </p>
          <p className="mb-4 lg:text-lg text-base text-gray-800">
            Founded in 2021, our mission is to bring top-notch electronics and
            cutting-edge DIY products to the Bangladeshi market.
          </p>
          <p className="mb-4 lg:text-lg text-base text-gray-800">
            At KeyClicks, we curate a selection of the finest mechanical
            keyboards and related products from globally recognized brands. We
            partner with industry leaders known for their innovation and
            excellence in mechanical keyboard design, ensuring that our
            offerings set the benchmark for quality and performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
