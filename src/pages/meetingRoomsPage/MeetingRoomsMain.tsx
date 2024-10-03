import { useEffect, useState } from "react";
import useTitle from "../../customHooks/useTitle";
import useDebounce from "../../customHooks/useDebounce";
import NoDataFound from "../../components/NoDataFound";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useFetchFilteredItemsQuery } from "../../redux/features/room/roomApi";
import { TRoom } from "../../types";
import RoomCard from "../../components/cards/RoomCard";

// Capacity range mapping
const capacityOptions: { [key: number]: [number, number] } = {
  5: [5, 9],
  10: [10, 19],
  20: [20, 49],
  50: [50, 100],
};

// Price range mapping
const priceOptions: { [key: number]: [number, number] } = {
  500: [500, 1999],
  2000: [2000, 4999],
  5000: [5000, 10000],
};

const MeetingRoomsMain = () => {
  const [priceRange, setPriceRange] = useState({
    minPrice: 0,
    maxPrice: 100000,
  });

  const [capacityRange, setCapacityRange] = useState({
    minCapacity: 0,
    maxCapacity: 10000,
  });

  const [sortByPrice, setSortByPrice] = useState("");
  const [searchByName, setSearchByName] = useState("");
  const debounceValue = useDebounce(searchByName);

  // console.log("byPriceRange", priceRange);
  // console.log("capacityRange", capacityRange);

  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading } = useFetchFilteredItemsQuery({
    search: debounceValue,
    sortBy: sortByPrice,
    minPrice: priceRange.minPrice,
    maxPrice: priceRange.maxPrice,
    minCapacity: capacityRange.minCapacity,
    maxCapacity: capacityRange.maxCapacity,
  });

  //   console.log("room data", data);

  // Calculate pagination data
  const totalItems = data?.data?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedData = data?.data?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCapacityRange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(e.target.value);
    const range = capacityOptions[value];

    if (range) {
      setCapacityRange({
        minCapacity: range[0],
        maxCapacity: range[1],
      });
    } else {
      setCapacityRange({
        minCapacity: 0,
        maxCapacity: 10000,
      });
    }
  };

  const handlePriceRange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(e.target.value);
    const range = priceOptions[value];

    if (range) {
      setPriceRange({
        minPrice: range[0],
        maxPrice: range[1],
      });
    } else {
      setPriceRange({
        minPrice: 0,
        maxPrice: 100000,
      });
    }
  };

  // clear all filter
  const handleFilterClear = () => {
    window.location.reload();
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  //scrolltop
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [debounceValue, currentPage]);

  useTitle("Rooms");

  return (
    <div className="min-h-[70vh] xl:py-12 lg:py-10 py-7 xl:px-16 lg:px-16 md:px-10 px-7 bg-zinc-100 ">
      <h2 className="font-bold text-4xl text-violet-600 text-center mb-8">
        Meeting Rooms
      </h2>

      <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col justify-between">
        {/* filter section */}
        <div className="xl:w-[25%] lg:w-[25%] md:w-[35%] w-full ">
          <div className="p-7">
            {/* Capacity range filter */}
            <h4 className="font-bold text-xl mt-2">By capacity range</h4>

            <div className="relative inline-block w-full max-w-sm my-4">
              <select
                value={
                  capacityRange ? capacityRange.minCapacity.toString() : ""
                }
                onChange={handleCapacityRange}
                className="block appearance-none w-full bg-zinc-100 border-b border-gray-400 text-gray-700 p-1 pr-8 leading-tight focus:outline-none "
              >
                <option value="" disabled>
                  select capacity
                </option>
                <option value="5">5 or more people</option>
                <option value="10">10 or more people</option>
                <option value="20">20 or more people</option>
                <option value="50">50 or more people</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.516 7.548a.997.997 0 011.461 0L10 10.572l3.023-3.024a.997.997 0 011.461 0 .997.997 0 010 1.461l-3.75 3.75a.997.997 0 01-1.461 0l-3.75-3.75a.997.997 0 010-1.461z" />
                </svg>
              </div>
            </div>

            {/* price range filter */}
            <h4 className="font-bold text-xl ">By price range</h4>
            <div className="relative inline-block w-full max-w-sm my-4">
              <select
                value={priceRange ? priceRange.minPrice.toString() : ""}
                onChange={handlePriceRange}
                className="block appearance-none w-full bg-zinc-100 border-b border-gray-400 text-gray-700 p-1 pr-8 leading-tight focus:outline-none "
              >
                <option value="" disabled>
                  select price
                </option>
                <option value="500">500 or more</option>
                <option value="2000">2000 or more</option>
                <option value="5000">5000 or more</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.516 7.548a.997.997 0 011.461 0L10 10.572l3.023-3.024a.997.997 0 011.461 0 .997.997 0 010 1.461l-3.75 3.75a.997.997 0 01-1.461 0l-3.75-3.75a.997.997 0 010-1.461z" />
                </svg>
              </div>
            </div>

            {/* sort price select */}
            <h4 className="font-bold text-xl ">Sort by price </h4>
            <div className="relative inline-block w-full max-w-sm my-4">
              <select
                value={sortByPrice}
                onChange={(e) => setSortByPrice(e.target.value)}
                className="block appearance-none w-full bg-zinc-100 border-b border-gray-400 text-gray-700 p-1 pr-8 leading-tight focus:outline-none "
              >
                <option value="" disabled>
                  Sort by price
                </option>
                <option value="asc">Price, low to high</option>
                <option value="desc">Price, high to low</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.516 7.548a.997.997 0 011.461 0L10 10.572l3.023-3.024a.997.997 0 011.461 0 .997.997 0 010 1.461l-3.75 3.75a.997.997 0 01-1.461 0l-3.75-3.75a.997.997 0 010-1.461z" />
                </svg>
              </div>
            </div>

            {/* search by name or keywords */}
            <h4 className="font-bold text-xl my-2">Search Room</h4>
            <div>
              <input
                onChange={(e) => setSearchByName(e.target.value)}
                value={searchByName}
                type="text"
                placeholder="Search by name"
                className="w-full p-1 pr-8 bg-zinc-100 border-b border-gray-400 focus:outline-none"
              />
            </div>
            {/* Clear Filters */}
            <div className="w-full flex justify-center items-center mx-auto my-5">
              <button
                onClick={handleFilterClear}
                className="bg-violet-600 text-white mx-auto text-sm px-3 py-2 transition-all duration-500 hover:bg-violet-700 "
              >
                Clear filter
              </button>
            </div>
          </div>
        </div>
        {/* room card section */}
        <div className="container mx-auto py-4 xl:px-4 lg:px-4 xl:w-[75%] lg:w-[75%] md:w-[65%] w-full">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <div
              className="
    grid gap-4 
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-2 
    xl:grid-cols-3
  mx-auto "
            >
              {paginatedData && paginatedData.length ? (
                paginatedData?.map((item: TRoom) => (
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

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-4 mt-8">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  className={`py-2 px-4 rounded-md ${
                    currentPage === i + 1
                      ? "bg-violet-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MeetingRoomsMain;
