import { useEffect, useState } from "react";
import useTitle from "../../customHooks/useTitle";
import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useGetSingleRoomQuery } from "../../redux/features/room/roomApi";
import { FaCheckCircle } from "react-icons/fa";

const RoomDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleRoomQuery(id as string);
  const [currentImage, setCurrentImage] = useState(0);

  // console.log("Room Details:", data);

  //scrolltop
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useTitle("Room details");

  return (
    <div className="bg-zinc-50 xl:py-12 lg:py-10 py-7 xl:px-12 lg:px-12 md:px-8 px-6 mx-auto">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="flex flex-col lg:flex-row -mx-4 relative rounded-xl md:p-6 md:gap-x-4 lg:gap-x-6">
          {/* Image Section */}
          <div className="lg:flex-1 p-4 md:p-0">
            <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
              {data?.data?.images[currentImage] ? (
                <img
                  src={data?.data?.images[currentImage]}
                  alt={`Gallery Image ${currentImage + 1}`}
                  className="h-full w-full object-cover rounded-lg"
                />
              ) : (
                <span className="text-4xl text-gray-400">
                  No Image Available
                </span>
              )}
            </div>

            <div className="flex -mx-2 mb-4">
              {data?.data?.images?.map((imageSrc: string, i: number) => (
                <div key={i} className="flex-1 px-2">
                  <button
                    onClick={() => setCurrentImage(i)}
                    className={`focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center ${
                      currentImage === i
                        ? "ring-2 ring-blue-300 ring-inset"
                        : ""
                    }`}
                  >
                    <img
                      src={imageSrc}
                      alt={`Thumbnail ${i + 1}`}
                      className="h-full w-full object-cover rounded-lg"
                      loading="lazy"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="lg:flex-1 p-4 md:p-0">
            {/* Book Now Button for Large Devices */}
            <div className="hidden lg:block absolute top-8 right-4 z-10">
              <Link to={`/user/bookings/${data?.data?._id}`}>
                <button className="bg-violet-600 text-white px-5 py-2 rounded-md transition hover:bg-violet-800">
                  Book Now
                </button>
              </Link>
            </div>
            <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
              {data?.data?.name}
            </h2>

            <div className="flex flex-col space-y-4 my-4">
              {/* Price and Discount Section */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3">
                  <span className="font-bold text-indigo-600 text-2xl">
                    TK. {data?.data?.pricePerSlot}
                  </span>
                  <span className="ml-2 text-gray-500">/ Slot</span>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-lg text-green-600 font-medium">
                    Get 20% off
                  </span>
                  <span className="text-sm text-gray-500">
                    All taxes included
                  </span>
                </div>
              </div>

              {/* Discount and Regular Price Section */}
              <div className="flex items-center space-x-6">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 line-through">
                    Regular Price: TK.{" "}
                    {(data?.data?.pricePerSlot * 1.2).toFixed(2)}
                  </span>
                  <span className="text-lg text-indigo-600 font-bold">
                    Discount Price: TK. {data?.data?.pricePerSlot}
                  </span>
                </div>
              </div>
            </div>

            <div className="my-4">
              <p className="text-gray-800 font-semibold text-xl mb-4">
                Room Details
              </p>
              <p className="text-gray-500">
                A versatile and contemporary space ideal for brainstorming
                sessions, strategic discussions, or client pitches. With
                state-of-the-art amenities and a sleek, professional atmosphere,
                this room ensures a focused and comfortable environment for
                effective collaboration and decision-making.
              </p>

              <div className="mt-2 flex flex-col sm:flex-row sm:space-x-8 space-y-2 sm:space-y-0">
                {[
                  { label: "Floor No", value: data?.data?.floorNo },
                  { label: "Room No", value: data?.data?.roomNo },
                  {
                    label: "Capacity",
                    value: `${data?.data?.capacity} People`,
                  },
                ].map((detail, index) => (
                  <div key={index} className="flex-1">
                    <p className="text-gray-600 bg-zinc-100 inline-block p-2 rounded-lg">
                      <strong>{detail?.label}:</strong> {detail?.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-2">
              <p className="text-gray-800 font-semibold text-xl">
                Available Amenities
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
                {data?.data?.amenities?.length > 0 ? (
                  data?.data?.amenities?.map((feature: string, i: number) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="text-green-500 text-xl">
                        <FaCheckCircle className="text-green-500" />
                      </div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))
                ) : (
                  <p>No amenities available.</p>
                )}
              </div>
            </div>
          </div>

          {/* Book Now Button for Small Devices */}
          <div className="lg:hidden mt-6 flex items-center justify-center">
            <Link to={`/user/bookings/${data?.data?._id}`}>
              <button className="bg-violet-600 text-white px-5 py-2 rounded-md transition hover:bg-violet-800">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomDetails;
