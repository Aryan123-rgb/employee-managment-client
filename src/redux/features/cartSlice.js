import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("getProducts", async () => {
  const response = await axios.get(
    "https://64e0caef50713530432cafa1.mockapi.io/api/products"
  );
  return response.data;
});

const initialState = {
  carts: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed',
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default cartSlice.reducer;
