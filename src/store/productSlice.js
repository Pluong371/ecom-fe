import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Danh sách sản phẩm
  cart: [], // Danh sách sản phẩm trong giỏ hàng
  selectedProductId: null, // ID sản phẩm được chọn
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addQuantity: (state, action) => {
      const { id, price, name, image } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity += 1;
        console.log("Current item quantity:", item.quantity);
      } else {
        const newItem = {
          id,
          price,
          name,
          image,
          quantity: 1,
        };
        state.items.push(newItem);
        console.log("Added new item to cart:", newItem);
      }
    },
    increaseQuantity: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload.id);
      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload.id);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
    setProducts: (state, action) => {
      state.items = action.payload; // Gán danh sách sản phẩm vào state.items
    },
    setProductId: (state, action) => {
      state.selectedProductId = action.payload; // Lưu ID sản phẩm được chọn
    },

    // Thêm sản phẩm vào giỏ hàng
    addToCart: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload.id);
      if (product) {
        const cartItem = state.cart.find(
          (item) =>
            item.id === product.id && item.color === action.payload.color
        );
        if (cartItem) {
          // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng
          cartItem.quantity += action.payload.quantity;
        } else {
          // Nếu sản phẩm chưa có trong giỏ, thêm mới với các thuộc tính cần thiết
          state.cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            color: action.payload.color, // Màu sản phẩm
            image: action.payload.image, // Ảnh tương ứng với màu đã chọn
            quantity: action.payload.quantity,
          });
        }
      }
    },
  },
});

export const {
  addQuantity,
  increaseQuantity,
  decreaseQuantity,
  setProducts,
  setProductId,
  addToCart,
} = productSlice.actions;

export default productSlice.reducer;
