const SearchBar = ({ search, onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      value={search}
      onChange={handleChange}
      placeholder="Search Pokemon..."
    />
  );
};

export default SearchBar;
