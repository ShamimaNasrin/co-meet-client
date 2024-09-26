import { useEffect } from "react";
import useTitle from "../../customHooks/useTitle";
import useDebounce from "../../customHooks/useDebounce";
import NoDataFound from "../../components/NoDataFound";
import LoadingSpinner from "../../components/LoadingSpinner";

const MeetingRoomsMain = () => {
  //   const debounceValue = useDebounce(searchByNameOrBrand);
  //scrolltop
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useTitle("Rooms");
  return (
    <div className="min-h-[70vh] xl:py-12 lg:py-10 py-7 xl:px-16 lg:px-16 md:px-10 px-7 bg-zinc-100 ">
      <h2 className="font-bold text-4xl mb-4">Meeting Rooms</h2>

      <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col justify-between">
        {/* filter section */}
        <div className="xl:w-[25%] lg:w-[25%] md:w-[35%] w-full "></div>
        {/* product card section */}
        {/* <div className="container mx-auto py-4 xl:px-4 lg:px-4 xl:w-[75%] lg:w-[75%] md:w-[65%] w-full">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <div
              className="
    grid gap-4 
    grid-cols-1
    sm:grid-cols-1
    md:grid-cols-2
    lg:grid-cols-2 
    xl:grid-cols-3
  mx-auto "
            >
              {data?.data?.length ? (
                data?.data?.map((prod: TProduct) => (
                  <ProductCard
                    key={prod._id}
                    _id={prod._id}
                    img_url={prod?.img_url}
                    name={prod?.name}
                    brand={prod?.brand}
                    stock_quantity={prod?.stock_quantity}
                    price={prod?.price}
                    rating={prod?.rating}
                  />
                ))
              ) : (
                <NoDataFound />
              )}
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default MeetingRoomsMain;
