import { Tags } from "lucide-react";

export default function NoteTagsList() {
  return (
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
            <span className="tag-item-content-text">Frontend Development</span>
          </div>
        </li>

        <li className="tag-item">
          <div className="tag-item-content">
            <Tags size={16} />
            <span className="tag-item-content-text">Fullstack Development</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
