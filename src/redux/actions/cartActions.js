import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../type/productType";

export const getCart = createAsyncThunk("cart/getCart", async (_, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  try {
    const res = await fetch(`${API_URL}/carts`);
    const data = await res.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
