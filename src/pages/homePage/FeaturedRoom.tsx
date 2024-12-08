import AnimatedBTN from "../../components/buttons/AnimatedBTN";
import RoomCard from "../../components/cards/RoomCard";
import LoadingSpinner from "../../components/LoadingSpinner";
import NoDataFound from "../../components/NoDataFound";
import SectionHeading from "../../components/SectionHeading";
import { useGetAllRoomsQuery } from "../../redux/features/room/roomApi";
import { MdMeetingRoom } from "react-icons/md";
import { TRoom } from "../../types";

const FeaturedRoom = () => {
  const { data, isLoading } = useGetAllRoomsQuery({});
  const lastSixItems = data?.data?.slice(-8);
  return (
    <>
      <div className="py-10 max-w-7xl mx-auto px-8 md:px-0">
        <SectionHeading
          icon={MdMeetingRoom}
          title="Featured Rooms"
          subtitle="Discover flexible and modern meeting spaces, perfectly suited for productive collaborations and events"
        />

        <div className="mx-auto pb-4">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <div
              className="
      grid gap-5 
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
