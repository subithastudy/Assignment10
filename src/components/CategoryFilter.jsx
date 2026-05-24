const CategoryFilter = ({ category, setCategory }) => {
  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="filter"
    >
      {/* Display the categories to get filtered out */}
      <option value="All">All Categories</option>
      <option value="Electronics">Electronics</option>
      <option value="Fashion">Fashion</option>
      <option value="Accessories">Accessories</option>
    </select>
  );
};

export default CategoryFilter;