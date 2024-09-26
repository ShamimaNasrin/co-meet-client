import { useEffect } from "react";
import useTitle from "../../customHooks/useTitle";

const MyBookingsMain = () => {
  //scrolltop
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useTitle("My Bookings");
  return <div>My Bookings</div>;
};

export default MyBookingsMain;
