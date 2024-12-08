import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// const COLORS = ["#82ca9d", "#8884d8", "#ffc658", "#d0ed57"];
const COLORS = ["#22d3ee", "#4ade80", "#c084fc", "#facc15"];

const data = [
  { name: "Booked Rooms", value: 120 },
  { name: "Available Rooms", value: 80 },
  { name: "Pending Bookings", value: 90 },
  { name: "Canceled Bookings", value: 59 },
];

const BookingPieChart = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Tooltip />
          <Legend />
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BookingPieChart;
