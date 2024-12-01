const CategoryFilter = ({
  categories,
  selectedCategory,
  handleCategoryChange,
}) => (
  <div>
    <h1 className="text-xl font-bold mt-10 mb-5">CATEGORIES</h1>
    <select
      className="p-2 border rounded-lg w-full px-3"
      value={selectedCategory}
      onChange={handleCategoryChange}
    >
      {categories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
  </div>
);

export default CategoryFilter;
