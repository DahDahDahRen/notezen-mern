import { useState } from "react";
import NoteItemCard from "./components/ui/NoteItemCard";
import NoteDetail from "./components/ui/NoteDetail";
import {
  House,
  ChevronRight,
  Archive,
  Tags,
  Search,
  Settings,
  Trash2,
} from "lucide-react";
import NotezenLogo from "./components/ui/NotezenLogo";

function App() {
  const [searchInput, setSearchInput] = useState(
    "Search by title, content, or tags..."
  );

  return (
    <>
      <div className="app-layout">
        <nav className="nav-container">
          <div className="nav-logo-container">
            <NotezenLogo />
          </div>

          <div className="folder-container">
            <div className="folder-notes">
              <div className="folder-notes-content">
                <House size={16} />{" "}
                <span className="folder-name">All Notes</span>
              </div>

              <ChevronRight size={16} />
            </div>

            <div className="folder-notes">
              <div className="folder-notes-content">
                <Archive size={16} />
                <span className="folder-name">Archived Notes</span>
              </div>
            </div>
          </div>

          <div className="tags-container">
            <p className="tag-title">Tags</p>

            <ul className="tags-list">
              <li className="tag-item">
                <div className="tag-item-content">
                  <Tags size={16} />
                  <span className="tag-item-content-text">React</span>
                </div>
              </li>

              <li className="tag-item">
                <div className="tag-item-content">
                  <Tags size={16} />
                  <span className="tag-item-content-text">Web Development</span>
                </div>
              </li>

              <li className="tag-item">
                <div className="tag-item-content">
                  <Tags size={16} />
                  <span className="tag-item-content-text">Design System</span>
                </div>
              </li>

              <li className="tag-item">
                <div className="tag-item-content">
                  <Tags size={16} />
                  <span className="tag-item-content-text">
                    Frontend Development
                  </span>
                </div>
              </li>

              <li className="tag-item">
                <div className="tag-item-content">
                  <Tags size={16} />
                  <span className="tag-item-content-text">
                    Fullstack Development
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        <main className="main-container">
          <header className="header-container">
            <h1 className="heading-one">All Notes</h1>

            <div className="header-input-controller">
              <form className="search-form-controller">
                <Search size={16} />

                <input
                  type="text"
                  className="search-input"
                  value={searchInput}
                />
              </form>

              <div className="setting-container">
                <button className="btn-setting">
                  <Settings />
                </button>
              </div>
            </div>
          </header>

          <div className="main-content">
            <div className="notes-container">
              <div className="note-input-container">
                <button className="btn-create">Create Note</button>
              </div>

              <ul className="note-list">
                <li className="note-item">
                  <NoteItemCard />
                </li>

                <li className="note-item">
                  <NoteItemCard />
                </li>
              </ul>
            </div>

            <NoteDetail />

            <div className="note-bin-container">
              <div className="bin-item">
                <span className="bin-item-link">
                  <Archive size={16} />
                  Archived Note
                </span>
              </div>

              <div className="bin-item">
                <span className="bin-item-link">
                  <Trash2 size={16} />
                  Deleted Note
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
