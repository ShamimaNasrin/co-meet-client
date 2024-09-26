import bannerimg from "../../assets/images/bannerbg.webp";
import AnimatedBTN from "../../components/buttons/AnimatedBTN";

const HeroSection = () => {
  return (
    <div
      className="bg-zinc-50 xl:h-[90vh] lg:h-[90vh] md:h-[60vh] sm:h-[50vh] h-[50vh] bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${bannerimg})`,
      }}
    >
      <div className=" absolute inset-0 text-center flex flex-col justify-center items-center text-black px-10">
        <h1 className="text-5xl font-bold">
          Book Your Ideal Meeting Room with Ease
        </h1>
        <p className="mt-4 text-xl mb-10">
          Efficient, hassle-free room booking for all your meeting needs
        </p>

        <AnimatedBTN str="Book now" path="/rooms" />
      </div>
    </div>
  );
};

export default HeroSection;
