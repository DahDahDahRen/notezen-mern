import { House, ChevronRight, Archive } from "lucide-react";

function App() {
  return (
    <>
      <div className="app-layout">
        <nav className="nav-container">
          <div className="nav-logo-container">
            <span className="nav-logo">Notezen</span>
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
                <Archive size={16} />{" "}
                <span className="folder-name">Archived Notes</span>
              </div>
            </div>
          </div>

          <div className="tags-container">
            <p className="tag-title">Tags</p>

            <ul className="tags-list">
              <li className="tags-item">
                <div>
                  <span className="tag-count">2</span>
                  React
                </div>
              </li>
            </ul>
          </div>
        </nav>

        <main className="main-container">
          <header className="header-container">
            <h1>All Notes</h1>

            <div>
              <form>
                <input type="text" value="Search Notes" />
              </form>

              <div className="avatar-container">
                <span className="avatar-img"></span>
              </div>
            </div>
          </header>

          <div className="main-content">
            <div>
              <div className="input-container">
                <button>Create Note</button>
              </div>

              <ul className="note-list">
                <li className="note-item">
                  <div className="note-item-card">
                    <h3>React Basics</h3>

                    <div className="tags-container">
                      <span>Tags</span>

                      <ul className="note-tags-list">
                        <li className="note-tag-item">React</li>
                        <li className="note-tag-item">Mern</li>
                      </ul>
                    </div>

                    <div className="date-container">
                      <span>Date</span>
                      <span>25 January 2025</span>
                    </div>
                  </div>
                </li>

                <li className="note-item">
                  <div className="note-item-card">
                    <h3>Express Server</h3>

                    <div className="tags-container">
                      <span>Tags</span>

                      <ul className="note-tags-list">
                        <li className="note-tag-item">Node</li>
                        <li className="note-tag-item">JavaScript</li>
                      </ul>
                    </div>

                    <div className="date-container">
                      <span>Date</span>
                      <span>25 January 2025</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="note-container">
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
