import { Tag, Clock1, Delete } from "lucide-react";
import NoteTag from "./NoteTag";
import NoteDetailTags from "./NoteDetailTags";
import NoteDetailedEdited from "./NoteDetailEdited";
import NoteDetailContent from "./NoteDetailContent";

export default function NoteDetail() {
  return (
    <div className="note-display-container">
      <header className="note-header">
        <NoteDetailContent />
        <NoteDetailTags />
        <NoteDetailedEdited />
      </header>

      <div className="note-control-panel">
        <div className="note-control-content">
          <button className="btn-save">Save Note</button>
        </div>
      </div>
    </div>
  );
}
