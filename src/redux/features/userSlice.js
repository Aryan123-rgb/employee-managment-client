import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  name: "",
  email: "",
  password: "",
  image: "",
  isAdmin: false,
  attendanceRecord: [],
};

const BASE_URL = "http://localhost:8000";

export const registerUser = createAsyncThunk(
  "registerUser",
  async (userData) => {
    const response = await axios.post(`${BASE_URL}/user/signup`, userData);
    return response.data;
  }
);

export const loginUser = createAsyncThunk("loginUser", async (userData) => {
  const response = await axios.post(`${BASE_URL}/user/login`, userData);
  return response.data;
});

export const getLoggedInUser = createAsyncThunk("getLoginUserInfo",async() => {
  const response = await axios.get(``)
})

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerPage: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isAdmin = action.payload.isAdmin;
    },
    setImageURL: (state, action) => {
      state.image = action.payload;
    },
    markPresent: (state, action) => {
      const now = new Date();
      state.attendanceRecord = [
        ...state.attendanceRecord,
        {
          date: now.toLocaleDateString(),
          time: now.toLocaleTimeString(),
        },
      ];
    },
  },
});

export const { registerPage, setImageURL, markPresent } = userSlice.actions;

export default userSlice.reducer;
