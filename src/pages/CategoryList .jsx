import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/CategorieSlice"; // Đường dẫn đến CategorieSlice của bạn

const CategoryList = () => {
  const dispatch = useDispatch();

  // Lấy state từ Redux store
  const { categories, loading, error } = useSelector(
    (state) => state.categories
  );

  console.log(5, categories);

  // Gọi API khi component mount
  useEffect(() => {
    dispatch(fetchCategories({ limit: 10, page: 1 })); // Gọi API để lấy danh mục
  }, [dispatch]);

  // Kiểm tra trạng thái tải
  if (loading === "pending") {
    return <div>Đang tải danh mục...</div>;
  }

  if (loading === "failed") {
    return <div>Đã xảy ra lỗi: {error}</div>;
  }

  return (
    <div>
      <h1>Danh sách danh mục</h1>
      {/* Hiển thị danh sách các danh mục nếu có */}
      <ul>
        {categories.length > 0 ? (
          categories.map((category) => (
            <li key={category.id}>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </li>
          ))
        ) : (
          <p>Không có danh mục nào được tìm thấy.</p>
        )}
      </ul>
    </div>
  );
};

export default CategoryList;
