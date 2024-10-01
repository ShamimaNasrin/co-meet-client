import BookingManagement from "../pages/adminDashboard/bookingManagement/BookingManagement";
import DashboardMain from "../pages/adminDashboard/DashboardMain";
import RoomManagement from "../pages/adminDashboard/roomManagement/RoomManagement";
import SlotsManagement from "../pages/adminDashboard/slotsManagement/SlotsManagement";
import UserManagement from "../pages/adminDashboard/userManagement/UserManagement";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <DashboardMain />,
  },
  {
    name: "Room Management",
    path: "roomManagement",
    element: <RoomManagement />,
  },
  {
    name: "Slot Management",
    path: "slotManagement",
    element: <SlotsManagement />,
  },
  {
    name: "Booking Management",
    path: "bookingManagement",
    element: <BookingManagement />,
  },
  {
    name: "User Management",
    path: "userManagement",
    element: <UserManagement />,
  },
];
