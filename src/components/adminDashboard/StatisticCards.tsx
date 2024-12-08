import { FaCalendarAlt, FaHome, FaClock } from "react-icons/fa";

const StatisticCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
      {/* Total Rooms Card */}
      <div className="shadow-sm rounded-lg p-6 bg-white flex items-center space-x-4 transform hover:scale-105 transition-transform duration-300">
        <div className="p-4 bg-green-100 text-green-600 rounded-full">
          <FaHome size={24} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Total Rooms</h3>
          <p className="text-3xl font-bold text-green-600">30</p>
        </div>
      </div>

      {/* Total Bookings Card */}
      <div className="shadow-sm rounded-lg p-6 bg-white flex items-center space-x-4 transform hover:scale-105 transition-transform duration-300">
        <div className="p-4 bg-red-100 text-red-600 rounded-full">
          <FaCalendarAlt size={24} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700">
            Total Bookings
          </h3>
          <p className="text-3xl font-bold text-red-600">9</p>
        </div>
      </div>

      {/* Total Slots Card */}
      <div className="shadow-sm rounded-lg p-6 bg-white flex items-center space-x-4 transform hover:scale-105 transition-transform duration-300">
        <div className="p-4 bg-blue-100 text-blue-600 rounded-full">
          <FaClock size={24} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Total Slots</h3>
          <p className="text-3xl font-bold text-blue-600">50</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticCards;
