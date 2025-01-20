import NoteTag from "./NoteTag";

export default function NoteItemCard({ NoteTitle = "Note Item" }) {
  return (
    <div className="note-item-card">
      <h3 className="note-item-title">{NoteTitle}</h3>

      <div className="note-main-container">
        <div className="note-tags-container">
          <ul className="note-tags-list">
            <li className="note-tag-item">
              <NoteTag text="React" />
            </li>
            <li className="note-tag-item">
              <NoteTag text="HTML" />
            </li>
          </ul>
        </div>

        <div className="note-date-container">
          <span className="note-item-date">25 January 2025</span>
        </div>
      </div>
    </div>
  );
}
