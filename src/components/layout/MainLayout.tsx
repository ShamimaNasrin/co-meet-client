import { Outlet } from "react-router-dom";
import NavBar from "../../pages/homePage/NavBar";
import Footer from "../../pages/homePage/Footer";

const MainLayout = () => {
  return (
    <div>
      {/* main layout */}
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
