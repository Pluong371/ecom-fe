import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categories: [], // Danh sách sản phẩm
  productDetail: null, // Chi tiết sản phẩm được chọn
  loading: "idle",
  error: null,
};

export const fetchCategories = createAsyncThunk(
  "Categories/fetchCategories",
  async ({ limit = 10, page = 1 }) => {
    const response = await axios.get(
      `http://192.168.1.64:8080/api/v1/categories?limit=${limit}&page=${page}`
    ); // Gọi API
    return response.data; // Trả về dữ liệu từ API
  }
);
const CategorieSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Xử lý các trạng thái của async thunk fetchNewArrivals
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = "pending"; // Cập nhật trạng thái khi đang tải
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = "succeeded"; // Cập nhật trạng thái thành công
        state.categories = action.payload; // Cập nhật danh sách sản phẩm
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = "failed"; // Cập nhật trạng thái lỗi
        state.error = action.error.message; // Lưu lỗi
      });
  },
});
export const {} = CategorieSlice.actions;

export default CategorieSlice.reducer;
