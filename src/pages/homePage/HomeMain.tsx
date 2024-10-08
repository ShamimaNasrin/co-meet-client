import { useEffect } from "react";
import AdvertiseService from "./AdvertiseService";
import HeroSection from "./HeroSection";
import Reviews from "./Reviews";
import useTitle from "../../customHooks/useTitle";
import HowItWorks from "./HowItWorks";
import WhyChooseUs from "./WhyChooseUs";
import FeaturedRoom from "./FeaturedRoom";
const HomeMain = () => {
  //scrolltop
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useTitle("Co Meet");
  return (
    <div className="bg-zinc-50">
      <HeroSection />
      <AdvertiseService />
      <FeaturedRoom />
      <HowItWorks />
      <Reviews />
      <WhyChooseUs />
    </div>
  );
};

export default HomeMain;
