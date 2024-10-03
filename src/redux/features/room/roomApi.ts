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

    // Query to fetch all rooms with optional query params
    getAllRooms: builder.query({
      query: (queryParams) => {
        const queryStr = queryParams
          ? new URLSearchParams(queryParams).toString()
          : "";

        const constructedUrl = queryStr ? `/rooms?${queryStr}` : "/rooms";

        return {
          url: constructedUrl,
          method: "GET",
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
} = roomApi;
