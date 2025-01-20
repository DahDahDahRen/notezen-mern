import { Clock1 } from "lucide-react";

export default function NoteDetailedEdited() {
  return (
    <div className="note-detail-edited">
      <div className="note-detail-icon">
        <Clock1 size={16} />
        <span className="note-label">Last Edited</span>
      </div>

      <div>
        <span className="note-label">20 January 2025</span>
      </div>
    </div>
  );
}
