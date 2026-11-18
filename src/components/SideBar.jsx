
import { Search } from "lucide-react";

function SearchBar({ search, setSearch }) {
  return (
    <div className="search-box">
      <Search size={20} />

      <input
        type="text"
        placeholder="Search by student name or ID..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
