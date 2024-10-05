import { baseApi } from "../../api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new booking
    addNewBooking: builder.mutation({
      query: (bookingData) => ({
        url: "/bookings",
        method: "POST",
        body: bookingData,
      }),
      invalidatesTags: ["booking"],
    }),

    // Query to fetch all bookings
    fetchAllBookings: builder.query({
      query: () => ({
        url: "/bookings",
        method: "GET",
      }),
      providesTags: ["booking"],
    }),

    // Query to fetch amy bookings
    fetchMyBookings: builder.query({
      query: () => ({
        url: "/bookings/my-bookings",
        method: "GET",
      }),
      providesTags: ["booking"],
    }),

    // Mutation to remove bookings
    removeBooking: builder.mutation({
      query: (bookingId) => ({
        url: `/bookings/${bookingId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["booking"],
    }),

    // Mutation to approve bookings
    modifyBooking: builder.mutation({
      query: ({ bookingId, updatedInfo }) => ({
        url: `/bookings/${bookingId}`,
        method: "PATCH",
        body: updatedInfo,
      }),
      invalidatesTags: ["booking"],
    }),
  }),
});

export const {
  useAddNewBookingMutation,
  useFetchAllBookingsQuery,
  useFetchMyBookingsQuery,
  useRemoveBookingMutation,
  useModifyBookingMutation,
} = bookingApi;
export default bookingApi;
