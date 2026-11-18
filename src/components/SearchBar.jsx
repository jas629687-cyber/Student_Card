
function SearchBar({ search, setSearch }) {
  return (
    <div className="search-box">
      <span>🔍</span>

      <input
        type="text"
        placeholder="Search student name or ID..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search && (
        <button onClick={() => setSearch("")}>
          ✖
        </button>
      )}
    </div>
  );
}

export default SearchBar;
