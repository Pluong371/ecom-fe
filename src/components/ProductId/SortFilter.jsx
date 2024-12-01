const SortFilter = ({ sortOrder, handleSortChange }) => (
  <div>
    <select
      className="p-2 border rounded-lg px-3"
      value={sortOrder}
      onChange={handleSortChange}
    >
      <option value="sort-by">Sort by</option>
      <option value="low-high">Low to High</option>
      <option value="high-to-low">High to Low</option>
    </select>
  </div>
);

export default SortFilter;
