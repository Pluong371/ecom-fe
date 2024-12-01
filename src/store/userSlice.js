import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LOGIN } from "../api/end-points";





const initialState = {
  email: localStorage.getItem("email") || "",
  remember: localStorage.getItem("remember") === "true" || false,
  // address: [],
  password: "",
  firstName: "",
  lastName: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { email, password, firstName, lastName } = action.payload;

      state.email = email;
      
      state.password = password;
      state.firstName = firstName;
      state.lastName = lastName;
    },
    clearUser: (state) => {
      state.email = "";
      state.remember = false;
      state.password = "";
      state.firstName = "";
      state.lastName = "";
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
