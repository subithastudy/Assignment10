const SortOptions = ({ sortOption, setSortOption }) => {
  return (
    <select
      value={sortOption}
      onChange={(e) => setSortOption(e.target.value)}
      className="filter"
    >
      {/* Categories to get displayed in Sort Option */}
      <option value="">Sort By</option>
      <option value="low-high">Price: Low to High</option>
      <option value="high-low">Price: High to Low</option>
      <option value="rating">Rating</option>
    </select>
  );
};

export default SortOptions;