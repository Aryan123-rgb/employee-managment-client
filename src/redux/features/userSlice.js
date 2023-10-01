import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  password: "",
  image: "",
  attendanceRecord: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerPage: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { registerPage } = userSlice.actions;

export default userSlice.reducer;
