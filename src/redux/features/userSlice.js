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

const BASE_URL = "https://employee-management-api-eqaw.onrender.com";

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

export const getLoggedInUser = createAsyncThunk(
  "getLoginUserInfo",
  async () => {
    const response = await axios.get(``);
  }
);

export const saveAttendance = createAsyncThunk(
  "saveAttendance",
  async (attendanceData) => {
    const response = await axios.post(
      `${BASE_URL}/attendance/markPresent`,
      attendanceData
    );
    return response.data;
  }
);

export const getAttendanceLog = createAsyncThunk(
  "getAttendance",
  async (email) => {
    const response = await axios.post(`${BASE_URL}/attendance/getAttendance`, {
      email,
    });
    return response.data;
  }
);

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
    saveAttendanceLog: (state, action) => {
      state.attendanceRecord = action.payload;
      console.log(state.attendanceRecord);
      console.log(action.payload);
    },
  },
});

export const { registerPage, setImageURL, markPresent, saveAttendanceLog } =
  userSlice.actions;

export default userSlice.reducer;
