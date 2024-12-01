import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userReducer from "./userSlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import wishListReducer from "./wishlistSlice";
import authSlice from "./authSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    UserData: userReducer,
    products: productReducer,
    cart: cartReducer,
    wishList: wishListReducer,
    auth: authSlice,
  },
});
