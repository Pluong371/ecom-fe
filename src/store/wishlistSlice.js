import { createSlice } from "@reduxjs/toolkit";

const initialWishListState = [];

export const wishListSlice = createSlice({
  name: "wishList",
  initialState: initialWishListState,
  reducers: {
    addItem: (state, action) => {
      const { id, price, name, image } = action.payload;
      const itemExists = state.some((item) => item.id === id);
      if (!itemExists) {
        const newItem = {
          id,
          price,
          name,
          image,
          quantity: 1,
        };
        state.push(newItem);
        console.log(newItem);
      }
      console.log(itemExists);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.find((item) => item.id === id);
      if (item) {
        item.quantity = Math.max(1, quantity);
      }
    },

    removeItem: (state, action) => {
      const { id } = action.payload;
      
      return state.filter((item) => item.id !== id);
      
    
    },

    clearWishList: () => {
      return [];
    },
  },
});

export const { addItem, updateQuantity, removeItem, clearWishList } =
  wishListSlice.actions;

export default wishListSlice.reducer;
