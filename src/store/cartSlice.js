import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  total: 0,
  shippingPrice: 0,
  couponCode: "",
  discount: 0,
  address: {},
  date: "",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addQuantity: (state, action) => {
      const { id, price, name, image, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity += 1;
        console.log("Currđá state:", item.quantity);
      } else {
        const newItem = {
          id,
          price,
          name,
          image,
          quantity: 1,
        };
        state.items.push(newItem);
        console.log("Current cart state:", newItem);
      }
    },

    toggleStatusTab(state) {
      if (state.statusTab === false) {
        state.statusTab = true;
      } else {
        state.statusTab = false;
      }
    },

    removeItem: (state, action) => {
      const { id } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity = Math.max(1, quantity);
      }
    },
    updateCart: (state, action) => {
      const { items,date, total, shippingPrice, couponCode, discount, address } =
        action.payload;
      if (items) state.items = items;
      if (total) state.total = total;
      if (date) state.date = date;
      if (shippingPrice) state.shippingPrice = shippingPrice;
      if (address) state.address = address;
      if (couponCode) state.couponCode = couponCode;
      if (discount) state.discount = discount;
      console.log("Current cart state:", state);
      console.log(state.address);
    },
  },
});

export const {
  addQuantity,
  updateQuantity,
  removeItem,
  updateCart,
  toggleStatusTab,
} = cartSlice.actions;

export default cartSlice.reducer;
