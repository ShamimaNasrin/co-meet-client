// import { Link } from "react-router-dom";
import CardButton from "../buttons/CardButton";

type TRoomProps = {
  _id: string;
  name: string;
  capacity: number;
  pricePerSlot: number;
  images: string[];
};

const RoomCard = ({
  _id,
  name,
  capacity,
  pricePerSlot,
  images,
}: TRoomProps) => {
  return (
    <div className=" bg-white rounded-md shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300 ">
      <div className="overflow-hidden">
        <img
          src={images[0]}
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </div>

      <div className="p-4 ">
        <h2 className="font-bold text-lg mb-2">
          {name?.length > 50 ? name?.slice(0, 50) + "..." : name}
        </h2>
        <p className="text-sm text-gray-500 mb-1">Capacity: {capacity}</p>

        <div className="flex items-center mb-3">
          <p className=" font-semibold text-gray-800">TK.{pricePerSlot}</p>
        </div>

        {/* <Link to={`/user/roomDetails/${_id}`}> */}
        <CardButton str="See Details" path={`/user/roomDetails/${_id}`} />
        {/* </Link> */}
      </div>
    </div>
  );
};

export default RoomCard;
