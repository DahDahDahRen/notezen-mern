import { House, ChevronRight, Archive } from "lucide-react";

export default function NoteFolder() {
  return (
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
  );
}
