import { createSlice } from "@reduxjs/toolkit";
import { getCart } from "../actions/cartActions";

const cartSlice = createSlice({
  name: "cart",
  initialState: { carts: [], error: null, isLoading: false },
  extraReducers: {
    [getCart.pending]: (state, action) => {
      state.isLoading = true;
      state.error = false;
    },
    [getCart.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.carts = action.payload;
    },
    [getCart.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export default cartSlice.reducer;
