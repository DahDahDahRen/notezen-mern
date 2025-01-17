import { useState } from "react";
import {
  House,
  ChevronRight,
  Archive,
  Tags,
  Search,
  Settings,
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
                  <div className="note-item-card">
                    <h3>React Basics</h3>

                    <div className="note-tags-container">
                      <span>Tags</span>

                      <ul className="note-tags-list">
                        <li className="note-tag-item">React</li>
                        <li className="note-tag-item">Mern</li>
                      </ul>
                    </div>

                    <div className="note-date-container">
                      <span>Date</span>
                      <span>25 January 2025</span>
                    </div>
                  </div>
                </li>

                <li className="note-item">
                  <div className="note-item-card">
                    <h3>React Basics</h3>

                    <div className="note-tags-container">
                      <span>Tags</span>

                      <ul className="note-tags-list">
                        <li className="note-tag-item">React</li>
                        <li className="note-tag-item">Mern</li>
                      </ul>
                    </div>

                    <div className="note-date-container">
                      <span>Date</span>
                      <span>25 January 2025</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="note-display-container">
              <header className="note-header">
                <h2>React Basics</h2>
              </header>
            </div>

            <div className="note-bin-container">
              <div className="bin-item">
                <span>Deleted Note</span>
              </div>
              <div className="bin-item">
                <span>Deleted Note</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
