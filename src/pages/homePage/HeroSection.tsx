import bannerimg from "../../assets/images/bannerbg.jpg";
import BlackButton from "../../components/buttons/BlackButton";
const HeroSection = () => {
  return (
    <div
      className="bg-zinc-50 xl:h-[90vh] lg:h-[90vh] md:h-[60vh] sm:h-[50vh] h-[50vh] bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${bannerimg})`,
      }}
    >
      <div className=" absolute inset-0 text-center flex flex-col justify-center items-center text-black px-10">
        <h1 className="text-5xl font-bold">Varmilo VA87M Sakura</h1>
        <p className="mt-4 text-xl mb-10">
          Halloween sale (Oct27-Oct31)!! Grab your favourite one on 50%
          discount!!
        </p>

        <BlackButton str="Shop now" path="/products" />
      </div>
    </div>
  );
};

export default HeroSection;
