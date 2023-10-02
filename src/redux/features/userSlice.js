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
    setImageURL: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const { registerPage, setImageURL } = userSlice.actions;

export default userSlice.reducer;
