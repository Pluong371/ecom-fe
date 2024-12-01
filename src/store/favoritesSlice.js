import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [], // Danh sách sản phẩm

  loading: "idle",
  error: null,
};

export const fetchFavorites = createAsyncThunk(
  "favorites/fetchFavorites",
  async () => {
    const response = await axios.get(
      "http://192.168.1.64:8080/api/v1/favorites"
    ); // Gọi API
    return response.data; // Trả về dữ liệu từ API
  }
);

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.loading = "pending"; // Cập nhật trạng thái khi đang tải
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.loading = "succeeded"; // Cập nhật trạng thái thành công
        state.items = action.payload; // Cập nhật danh sách sản phẩm
      })
      .addCase(fetchFavorites.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
  },
});
export const {} = favoritesSlice.actions;

export default favoritesSlice.reducer;
