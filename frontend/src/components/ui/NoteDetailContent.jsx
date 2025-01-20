import { Delete } from "lucide-react";

export default function NoteDetailContent() {
  return (
    <div className="note-detail-content">
      <h2 className="heading-two">Note Item</h2>
      <button className="btn-delete">
        <Delete size={24} />
      </button>
    </div>
  );
}
