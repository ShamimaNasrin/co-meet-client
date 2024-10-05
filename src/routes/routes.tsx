import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/about/About";
import ContactMain from "../pages/contact/ContactMain";
import HomeMain from "../pages/homePage/HomeMain";
import CheckOutMain from "../pages/checkoutPage/CheckOutMain";
import DashboardMain from "../pages/adminDashboard/DashboardMain";
import NotFound from "../pages/notFound/NotFound";
import FaqsMain from "../pages/faqs/FaqsMain";
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
import BookingsMain from "../pages/bookings/BookingsMain";
import ProtectedRoute from "./ProtectedRoute";

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
        element: (
          <ProtectedRoute requiredRole="admin">
            <DashboardMain />
          </ProtectedRoute>
        ),
      },
      {
        path: "admin/slot-management",
        element: (
          <ProtectedRoute requiredRole="admin">
            <SlotsManagement />
          </ProtectedRoute>
        ),
      },
      {
        path: "admin/room-management",
        element: (
          <ProtectedRoute requiredRole="admin">
            <RoomManagement />
          </ProtectedRoute>
        ),
      },
      {
        path: "admin/booking-management",
        element: (
          <ProtectedRoute requiredRole="admin">
            <BookingManagement />
          </ProtectedRoute>
        ),
      },
      {
        path: "admin/user-management",
        element: (
          <ProtectedRoute requiredRole="admin">
            <UserManagement />
          </ProtectedRoute>
        ),
      },

      // user routes
      {
        path: "user/roomDetails/:id",
        element: (
          <ProtectedRoute requiredRole="user">
            <RoomDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "user/bookings/:roomId",
        element: (
          <ProtectedRoute requiredRole="user">
            <BookingsMain />
          </ProtectedRoute>
        ),
      },
      {
        path: "user/myBookings",
        element: (
          <ProtectedRoute requiredRole="user">
            <MyBookingsMain />
          </ProtectedRoute>
        ),
      },
      {
        path: "user/checkout",
        element: (
          <ProtectedRoute requiredRole="user">
            <CheckOutMain />
          </ProtectedRoute>
        ),
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
