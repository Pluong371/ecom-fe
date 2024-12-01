import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Bước 1: Tạo async thunk để gọi API
export const fetchShopping = createAsyncThunk(
  "shippings/fetchShopping",
  async ({ limit = 10, page = 1 }) => { // Giá trị mặc định
    const response = await axios.get(
     `http://192.168.1.64:8080/api/v1/shippings?limit=${limit}&page=${page}`
    ); // Gọi API
    return response.data; // Trả về dữ liệu từ API
  }
);

// export const fetchProductById = createAsyncThunk(
//   "newArrivals/fetchProductById",
//   async (id) => {
//     const response = await axios.get(
//       `http://192.168.1.64:8080/api/v1/product/${id}`
//     ); // Gọi API để lấy sản phẩm theo ID
//     console.log(response.data);
//     return response.data; // Trả về dữ liệu sản phẩm từ API
//   }
// );

// Trạng thái ban đầu của slice
const initialState = {
  item: [], // Danh sách sản phẩm
  productDetail: null, // Chi tiết sản phẩm được chọn
  loading: "idle",
  error: null,
  
};

// Tạo slice với các reducers và extraReducers
const shopSlice = createSlice({
  name: "shops",
  initialState,
  reducers: {
    // Các reducer như trước
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
  },
  extraReducers: (builder) => {
    // Xử lý các trạng thái của async thunk fetchNewArrivals
    builder
      .addCase(fetchShopping.pending, (state) => {
        state.loading = "pending"; // Cập nhật trạng thái khi đang tải
      })
      .addCase(fetchShopping.fulfilled, (state, action) => {
        state.loading = "succeeded"; // Cập nhật trạng thái thành công
        state.items = action.payload; // Cập nhật danh sách sản phẩm
      })
      .addCase(fetchShopping.rejected, (state, action) => {
        state.loading = "failed"; // Cập nhật trạng thái lỗi
        state.error = action.error.message; // Lưu lỗi
      });
    // .addCase(fetchProductById.pending, (state) => {
    //   state.loading = "pending";
    // })
    // .addCase(fetchProductById.fulfilled, (state, action) => {
    //   state.loading = "succeeded";
    //   state.productDetail = action.payload; // Lưu chi tiết sản phẩm vào state
    // })
    // .addCase(fetchProductById.rejected, (state, action) => {
    //   state.loading = "failed";
    //   state.error = action.error.message;
    // });
  },
});

export const {} = shopSlice.actions;

export default shopSlice.reducer;
