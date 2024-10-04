import { TRoom } from "../../../types";
import { baseApi } from "../../api/baseApi";

const roomApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new room
    createARoom: builder.mutation<TRoom, TRoom>({
      query: (newRoom) => ({
        url: `/rooms`,
        method: "POST",
        body: newRoom,
      }),
      invalidatesTags: ["rooms"],
    }),

    // Query to fetch all rooms
    getAllRooms: builder.query({
      query: () => ({
        url: "/rooms",
        method: "GET",
      }),
      providesTags: ["rooms"],
    }),

    // Query to fetch all rooms with filters
    fetchFilteredItems: builder.query({
      query: (filterParams) => {
        const searchParams = new URLSearchParams();
        if (filterParams?.search)
          searchParams.append("search", filterParams.search);
        if (filterParams?.minPrice)
          searchParams.append("minPrice", filterParams.minPrice);
        if (filterParams?.maxPrice)
          searchParams.append("maxPrice", filterParams.maxPrice);
        if (filterParams?.minCapacity)
          searchParams.append("minCapacity", filterParams.minCapacity);
        if (filterParams?.maxCapacity)
          searchParams.append("maxCapacity", filterParams.maxCapacity);
        if (filterParams?.sortBy)
          searchParams.append("sortBy", filterParams.sortBy);

        return {
          url: "/rooms",
          method: "GET",
          params: searchParams,
        };
      },
      providesTags: ["rooms"],
    }),

    // Query to fetch details of a single room by ID
    getSingleRoom: builder.query({
      query: (roomId: string) => ({
        url: `/rooms/${roomId}`,
        method: "GET",
      }),
      providesTags: ["rooms"],
    }),

    // Mutation for deleting a room by ID
    deleteSingleRoom: builder.mutation({
      query: (roomId) => ({
        url: `/rooms/${roomId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["rooms"],
    }),

    // Mutation to update room details
    updateARoom: builder.mutation({
      query: ({ roomId, updatedRoomData }) => ({
        url: `rooms/${roomId}`,
        method: "PATCH",
        body: updatedRoomData,
      }),
      invalidatesTags: ["rooms"],
    }),
  }),
});

export const {
  useCreateARoomMutation,
  useGetAllRoomsQuery,
  useGetSingleRoomQuery,
  useDeleteSingleRoomMutation,
  useUpdateARoomMutation,
  useFetchFilteredItemsQuery,
} = roomApi;
