import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/about/About";
import ContactMain from "../pages/contact/ContactMain";
import HomeMain from "../pages/homePage/HomeMain";
import CheckOutMain from "../pages/checkoutPage/CheckOutMain";
import DashboardMain from "../pages/adminDashboard/DashboardMain";
import NotFound from "../pages/notFound/NotFound";
import FaqsMain from "../pages/faqs/FaqsMain";
import SuccessPayment from "../pages/checkoutPage/SuccessPayment";
import RoomDetails from "../pages/roomDetails/RoomDetails";
import MeetingRoomsMain from "../pages/meetingRoomsPage/MeetingRoomsMain";
import SignUpMain from "../pages/signUp/SignUpMain";
import LoginMain from "../pages/login/LoginMain";
import MyBookingsMain from "../pages/myBookings/MyBookingsMain";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeMain />,
      },
      {
        path: "home",
        element: <HomeMain />,
      },

      {
        path: "login",
        element: <LoginMain />,
      },
      {
        path: "signup",
        element: <SignUpMain />,
      },

      {
        path: "rooms",
        element: <MeetingRoomsMain />,
      },
      {
        path: "roomDetails/:id",
        element: <RoomDetails />,
      },
      {
        path: "checkout",
        element: <CheckOutMain />,
      },
      {
        path: "success",
        element: <SuccessPayment />,
      },
      {
        path: "myBookings",
        element: <MyBookingsMain />,
      },
      {
        path: "dashboard",
        element: <DashboardMain />,
      },

      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <ContactMain />,
      },
      {
        path: "faqs",
        element: <FaqsMain />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
