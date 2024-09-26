import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TCart = {
  _id: string;
  name: string;
  img_url: string;
  stock_quantity: number;
  price: number;
  quantity?: number;
};

type TCartState = {
  items: TCart[];
  totalPrice: number;
  // totalItemSelectQuantity: number;
};

const initialState: TCartState = {
  items: [],
  totalPrice: 0,
  // totalItemSelectQuantity: 0,
};

// cart management functions
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

// export const {} = cartSlice.actions;

export default cartSlice.reducer;
