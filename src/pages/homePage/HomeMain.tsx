import { useEffect } from "react";
import AdvertiseService from "./AdvertiseService";
import HeroSection from "./HeroSection";
import Reviews from "./Reviews";
import useTitle from "../../customHooks/useTitle";
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
      <Reviews />
    </div>
  );
};

export default HomeMain;
