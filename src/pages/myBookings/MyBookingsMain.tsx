/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import useTitle from "../../customHooks/useTitle";
import LoadingSpinner from "../../components/LoadingSpinner";
import NoDataFound from "../../components/NoDataFound";
import { useFetchMyBookingsQuery } from "../../redux/features/bookings/bookigApi";
import { TSlot } from "../../types";

const headings = ["Room Name", "Date", "Time", "Cost", "Status"];

const MyBookingsMain = () => {
  const { data, isLoading } = useFetchMyBookingsQuery({});

  // console.log("my bookings:", data);

  //scrolltop
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useTitle("My Bookings");
  return (
    <div className="min-h-[70vh] xl:py-12 lg:py-10 py-7 xl:px-16 lg:px-16 md:px-10 px-7 bg-zinc-100">
      <h1 className="text-3xl font-bold mb-8 text-center text-violet-600">
        My Bookings
      </h1>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <table className="mx-auto xl:w-[80%] lg:w-[80%] md:w-[70%] w-full text-left table-auto border-collapse">
          <thead>
            <tr>
              {headings.map((h, i) => (
                <th key={i} className="border-b border-gray-700 px-2 py-4">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.data?.length ? (
              data?.data?.map((item: any) => (
                <tr key={item?._id}>
                  <td className="border-b border-gray-800 px-2 py-4">
                    {item?.room?.name}
                  </td>
                  <td className="border-b border-gray-800 px-2 py-4">
                    {item?.date}
                  </td>
                  <td className="border-b border-gray-800 px-2 py-4">
                    {item?.slots?.map((slot: TSlot) => (
                      <span className="my-2 text-md" key={slot?._id}>
                        {slot.startTime} - {slot.endTime}
                      </span>
                    ))}
                  </td>
                  <td className="border-b border-gray-800 px-2 py-4">
                    {item?.totalAmount}
                  </td>
                  <td className="border-b border-gray-800 px-2 py-4">
                    {item?.isConfirmed}
                  </td>
                </tr>
              ))
            ) : (
              <NoDataFound />
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyBookingsMain;
