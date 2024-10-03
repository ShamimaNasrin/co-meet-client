import { useEffect, useState } from "react";
import useTitle from "../../customHooks/useTitle";
import { useParams } from "react-router-dom";
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
    <div className="bg-zinc-100 xl:py-12 lg:py-10 py-7 xl:px-20 lg:px-20 md:px-10 px-7 mx-auto">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col justify-center ">
          <div className="xl:w-[45%] lg:w-[45%] md:w-[45%] w-full flex justify-center items-center p-4 md:p-0">
            <div className="h-64 md:h-80 rounded-md bg-gray-100 mb-4 flex items-center justify-center">
              {data?.data?.images[currentImage] ? (
                <img
                  src={data?.data?.images[currentImage]}
                  alt={`Gallery Image ${currentImage + 1}`}
                  className="h-full w-full object-cover rounded-md"
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
                    className={`focus:outline-none w-full rounded-md h-24 md:h-32 bg-gray-100 flex items-center justify-center ${
                      currentImage === i
                        ? "ring-2 ring-blue-300 ring-inset"
                        : ""
                    }`}
                  >
                    <img
                      src={imageSrc}
                      alt={`Thumbnail ${i + 1}`}
                      className="h-full w-full object-cover rounded-md"
                      loading="lazy"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="xl:w-[55%] lg:w-[55%] md:w-[55%] w-full px-5">
            <h2 className="text-2xl font-bold mb-2">{data?.data?.name}</h2>

            <p className="text-[13px] text-gray-600 mb-2 ">
              Discount calculated at checkout.
            </p>

            <p className="text-xl font-bold mb-2">
              TK.{data?.data?.pricePerSlot}
              <span className="text-sm ml-1 font-normal">(Per Slot)</span>
            </p>

            <p className="text-gray-700 mb-4">
              A versatile and contemporary space ideal for brainstorming
              sessions, strategic discussions, or client pitches. With
              state-of-the-art amenities and a sleek, professional atmosphere,
              this room ensures a focused and comfortable environment for
              effective collaboration and decision-making.
            </p>
            <p className="text-gray-700 mb-2">Room No: {data?.data?.roomNo}</p>
            <p className="text-gray-700 mb-2">
              Floor No: {data?.data?.floorNo}
            </p>
            <p className="text-gray-700 mb-2">
              Capacity: {data?.data?.capacity} people
            </p>

            <div className="mt-3 mb-5">
              <h3 className="text-gray-900 font-bold text-lg">
                Available Amenities
              </h3>
              <div className="grid my-2 grid-cols-2 lg:grid-cols-3 gap-3">
                {data?.data?.amenities?.length > 0 ? (
                  data?.data?.amenities?.map((feature: string, i: number) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="text-green-500 text-xl">
                        <FaCheckCircle className="text-green-500" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))
                ) : (
                  <p>No amenities available.</p>
                )}
              </div>
            </div>

            <button className="bg-violet-600 text-white mx-auto text-sm px-3 py-2 transition-all duration-500 hover:bg-violet-800">
              Book Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomDetails;
