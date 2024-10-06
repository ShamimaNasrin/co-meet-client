import AnimatedBTN from "../../components/buttons/AnimatedBTN";
import RoomCard from "../../components/cards/RoomCard";
import LoadingSpinner from "../../components/LoadingSpinner";
import NoDataFound from "../../components/NoDataFound";
import { useGetAllRoomsQuery } from "../../redux/features/room/roomApi";
import { TRoom } from "../../types";

const FeaturedRoom = () => {
  const { data, isLoading } = useGetAllRoomsQuery({});
  const lastSixItems = data?.data?.slice(-6);
  return (
    <>
      <div className="py-7 xl:px-16 lg:px-16 md:px-10 px-7 bg-zinc-200 ">
        <h2 className="font-bold text-4xl text-indigo-600 mb-4">
          Featured Rooms
        </h2>

        <div className="container mx-auto pb-4 xl:px-4 lg:px-4 ">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <div
              className="
      grid gap-4 
      grid-cols-1
      sm:grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-4 
      xl:grid-cols-4
    mx-auto "
            >
              {data?.data?.length ? (
                lastSixItems.map((item: TRoom) => (
                  <RoomCard
                    key={item._id}
                    _id={item._id}
                    name={item?.name}
                    capacity={item?.capacity}
                    pricePerSlot={item?.pricePerSlot}
                    images={item?.images}
                  />
                ))
              ) : (
                <NoDataFound />
              )}
            </div>
          )}
        </div>
        <div className="flex justify-center items-center mt-4 mb-0">
          <AnimatedBTN str="Book now" path="/rooms" />
        </div>
      </div>
    </>
  );
};

export default FeaturedRoom;
