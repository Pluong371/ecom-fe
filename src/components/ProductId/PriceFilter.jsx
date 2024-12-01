const PriceFilter = ({ selectedPrice, handlePriceChange }) => (
  <div>
    <h1 className="text-xl font-bold mt-10 mb-5">PRICE</h1>
    <select
      className="p-2 border rounded-lg w-full px-3"
      value={selectedPrice}
      onChange={handlePriceChange}
    >
      <option value="all">All Price</option>
      <option value="0-99.99">0.00 - 99.99</option>
      <option value="100-199.99">100.00 - 199.99</option>
      <option value="200-299.99">200.00 - 299.99</option>
      <option value="300-399.99">300.00 - 399.99</option>
      <option value="400+">400.00+</option>
    </select>
  </div>
);

export default PriceFilter;
