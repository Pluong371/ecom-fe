import { createSlice, } from "@reduxjs/toolkit";






const initialState = {
  user: [],
  error: null,
  loading: false,
  isLogin: false,
 
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    login: (state, action) => {
      localStorage.setItem("token", action.payload);
      state.isLogin = true;
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state.isLogin = false;
    },
  },

});

export const { clearError, login,logout } = authSlice.actions;

export default authSlice.reducer;
