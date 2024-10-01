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
import PrivacyPolicy from "../pages/privacyPolicy/PrivacyPolicy";
import TermsOfService from "../pages/termsOfService/TermsOfService";
import RoomManagement from "../pages/adminDashboard/roomManagement/RoomManagement";
import SlotsManagement from "../pages/adminDashboard/slotsManagement/SlotsManagement";
import BookingManagement from "../pages/adminDashboard/bookingManagement/BookingManagement";
import UserManagement from "../pages/adminDashboard/userManagement/UserManagement";

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

      // admin routes
      {
        path: "admin/dashboard",
        element: <DashboardMain />,
      },
      {
        path: "admin/room-management",
        element: <RoomManagement />,
      },
      {
        path: "admin/slot-management",
        element: <SlotsManagement />,
      },
      {
        path: "admin/booking-management",
        element: <BookingManagement />,
      },
      {
        path: "admin/user-management",
        element: <UserManagement />,
      },
      // user routes
      {
        path: "user/roomDetails/:id",
        element: <RoomDetails />,
      },
      {
        path: "user/myBookings",
        element: <MyBookingsMain />,
      },
      {
        path: "user/checkout",
        element: <CheckOutMain />,
      },
      {
        path: "user/success",
        element: <SuccessPayment />,
      },

      // common routes
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
        path: "privacy",
        element: <PrivacyPolicy />,
      },
      {
        path: "terms",
        element: <TermsOfService />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
