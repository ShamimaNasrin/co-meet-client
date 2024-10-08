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
      invalidatesTags: ["slot"],
    }),

    // Query to fetch all rooms
    fetchAllSlots: builder.query({
      query: () => ({
        url: "/slots",
        method: "GET",
      }),
      providesTags: ["slot"],
    }),

    // Query to fetch available slots
    fetchAvailableSlots: builder.query({
      query: () => ({
        url: "/slots/availability",
        method: "GET",
      }),
      providesTags: ["slot"],
    }),

    // fetchAvailableSlots: builder.query({
    //   query: (filterParams) => {
    //     const params = new URLSearchParams();
    //     if (filterParams?.roomId) params.append("roomId", filterParams.roomId);
    //     if (filterParams?.date) params.append("date", filterParams.date);

    //     return {
    //       url: `/slots/availability?${params.toString()}`,
    //       method: "GET",
    //       params: params,
    //     };
    //   },
    //   providesTags: ["slot"],
    // }),

    // Mutation for deleting a slot by ID
    deleteSingleSlot: builder.mutation({
      query: (slotId) => ({
        url: `/slots/${slotId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["slot"],
    }),

    // Mutation to modify slot details
    modifyASlot: builder.mutation({
      query: ({ slotId, updatedSlot }) => ({
        url: `/slots/${slotId}`,
        method: "PATCH",
        body: updatedSlot,
      }),
      invalidatesTags: ["slot"],
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
