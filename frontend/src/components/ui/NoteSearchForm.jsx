import { Settings, Search } from "lucide-react";
import { useState } from "react";

export default function NoteSearchForm() {
  const [searchInput, setSearchInput] = useState(
    "Search by title, content, or tags..."
  );

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="header-input-controller">
      <form className="search-form-controller">
        <Search size={16} />

        <input
          type="text"
          className="search-input"
          value={searchInput}
          onChange={handleSearchInput}
        />
      </form>

      <div className="setting-container">
        <button className="btn-setting">
          <Settings />
        </button>
      </div>
    </div>
  );
}
