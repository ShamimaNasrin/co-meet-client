import { baseApi } from "../../api/baseApi";

const slotApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new slot
    addNewSlot: builder.mutation({
      query: (newSlot) => ({
        url: "/slots",
        method: "POST",
        body: newSlot,
      }),
      invalidatesTags: ["slots"],
    }),

    // Query to fetch all rooms
    fetchAllSlots: builder.query({
      query: () => ({
        url: "/slots",
        method: "GET",
      }),
      providesTags: ["slots"],
    }),

    // Query to fetch available slots
    fetchAvailableSlots: builder.query({
      query: () => ({
        url: "/slots/availability",
        method: "GET",
      }),
      providesTags: ["slots"],
    }),

    // Mutation for deleting a slot by ID
    deleteSingleSlot: builder.mutation({
      query: (slotId) => ({
        url: `/slots/${slotId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["slots"],
    }),

    // Mutation to modify slot details
    modifyASlot: builder.mutation({
      query: ({ slotId, updatedSlot }) => ({
        url: `/slots/${slotId}`,
        method: "PATCH",
        body: updatedSlot,
      }),
      invalidatesTags: ["slots"],
    }),
  }),
});

export const {
  useAddNewSlotMutation,
  useFetchAllSlotsQuery,
  useFetchAvailableSlotsQuery,
  useDeleteSingleSlotMutation,
  useModifyASlotMutation,
} = slotApi;
