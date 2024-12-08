import bannerimg from "../../assets/images/bannerbg.webp";
import AnimatedBTN from "../../components/buttons/AnimatedBTN";

const HeroSection = () => {
  return (
    // <div
    //   className="bg-zinc-50 xl:h-[90vh] lg:h-[90vh] md:h-[60vh] sm:h-[50vh] h-[50vh] bg-cover bg-center relative"
    //   style={{
    //     backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${bannerimg})`,
    //   }}
    // >
    <div className=" mx-auto max-w-7xl text-center px-8 md:px-0 pt-8">
      <h1 className="lg:max-w-3xl mx-auto text-center font-bold text-4xl md:text-5xl text-gray-900 mb-5 leading-[50px]">
        Book Your Ideal Meeting Room with Ease
      </h1>
      <p className="max-w-lg mx-auto text-center md:text-lg font-normal leading-7 text-gray-600 mb-6">
        Efficient, hassle-free room booking for all your meeting needs
      </p>
      <AnimatedBTN str="Book now" path="/rooms" />
      <div className="mt-12 flex justify">
        <img src={bannerimg} alt="hero image" className="rounded-t-3xl" />
      </div>
    </div>
  );
};

export default HeroSection;
