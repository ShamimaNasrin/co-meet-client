import { Outlet } from "react-router-dom";
import NavBar from "../../pages/homePage/NavBar";
import Footer from "../../pages/homePage/Footer";
import Container from "./Container";

const MainLayout = () => {
  return (
    <div>
      {/* main layout */}
      <NavBar />
      <Container className="min-h-screen bg-zinc-50">
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default MainLayout;
