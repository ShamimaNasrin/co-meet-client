import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", bookings: 30, revenue: 120 },
  { month: "Feb", bookings: 45, revenue: 180 },
  { month: "Mar", bookings: 40, revenue: 160 },
  { month: "Apr", bookings: 35, revenue: 140 },
  { month: "May", bookings: 50, revenue: 200 },
  { month: "Jun", bookings: 60, revenue: 240 },
];

const BookingBarChart = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold text-center text-emerald-500 mb-4">
        Monthly Bookings & Revenue
      </h2>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="bookings" fill="#8884d8" name="Bookings" />
          <Bar dataKey="revenue" fill="#82ca9d" name="Revenue ($)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BookingBarChart;
