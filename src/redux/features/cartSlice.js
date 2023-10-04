import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://employee-management-api-eqaw.onrender.com";

export const getProducts = createAsyncThunk("getProducts", async () => {
  const response = await axios.get(
    "https://64e0caef50713530432cafa1.mockapi.io/api/products"
  );
  return response.data;
});

export const saveProductsofCart = createAsyncThunk(
  "saveProducts",
  async (carts, email) => {
    const response = await axios.post(`${BASE_URL}/cart/save`, {
      carts,
      email,
    });
    return response.data;
  }
);

export const getCartArrayfromDatabase = createAsyncThunk(
  "getCartfromDatabase",
  async (email) => {
    const response = await axios.post(`${BASE_URL}/cart/get`, email);
    return response.data;
  }
);

const initialState = {
  carts: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed',
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.carts[itemIndex].qty += action.payload.qty;
      } else state.carts = [...state.carts, action.payload];
    },
    removeFromCart: (state, action) => {
      state.carts = state.carts.filter((item) => item.id !== action.payload.id);
    },
    saveCart: (state, action) => {
      state.carts = action.payload;
    },
    emptyCart: (state, action) => {
      state.carts = [];
    },
    incrementQty: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      state.carts[itemIndex].qty += 1;
    },
    decrementQty: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.carts[itemIndex].qty > 1) {
        state.carts[itemIndex].qty -= 1;
      }
    },
  },
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

export const {
  addToCart,
  removeFromCart,
  saveCart,
  emptyCart,
  incrementQty,
  decrementQty,
} = cartSlice.actions;

export default cartSlice.reducer;
