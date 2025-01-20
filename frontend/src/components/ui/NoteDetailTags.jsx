import { Tag } from "lucide-react";
import NoteTag from "./NoteTag";

export default function NoteDetailTags() {
  return (
    <div className="note-detail-tags">
      <div className="note-detail-icon">
        <div className="note-detail-icon">
          <Tag size={16} />
          <span className="note-label">Tags</span>
        </div>
      </div>

      <div>
        <NoteTag text="React" />
        <NoteTag text="Nodejs" />
        <NoteTag text="Express" />
      </div>
    </div>
  );
}
