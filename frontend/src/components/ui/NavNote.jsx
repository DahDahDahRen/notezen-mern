import NotezenLogo from "./NotezenLogo";
import { House, ChevronRight, Archive, Tags } from "lucide-react";

export default function NavNote() {
  return (
    <nav className="nav-container">
      <div className="nav-logo-container">
        <NotezenLogo />
      </div>

      <div className="folder-container">
        <div className="folder-notes">
          <div className="folder-notes-content">
            <House size={16} /> <span className="folder-name">All Notes</span>
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
  );
}
