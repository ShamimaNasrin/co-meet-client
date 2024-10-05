import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TSlotManage } from "../../../types";

type TBook = {
  // user: TBookUser | null;
  date: string | null;
  selectedTimes: string[];
  slots: TSlotManage[];
  totalCost: number;
};

const initialState: TBook = {
  // user: null,
  date: null,
  selectedTimes: [],
  slots: [],
  totalCost: 0,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    resetBooking: (state) => {
      // state.user = null;
      state.date = null;
      state.selectedTimes = [];
      state.slots = [];
      state.totalCost = 0;
    },
    bookingDatat: (state, action: PayloadAction<TBook>) => {
      const { date, selectedTimes, slots, totalCost } = action.payload;
      // state.user = user;
      state.date = date;
      state.selectedTimes = selectedTimes;
      state.slots = slots;
      state.totalCost = totalCost;
    },
  },
});

export const { resetBooking, bookingDatat } = bookingSlice.actions;
export default bookingSlice.reducer;
