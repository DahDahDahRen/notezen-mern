import { Archive, Trash2 } from "lucide-react";

export default function NoteBinContainer() {
  return (
    <div className="note-bin-container">
      <div className="bin-item">
        <span className="bin-item-link">
          <Archive size={16} />
          Archived Note
        </span>
      </div>

      <div className="bin-item">
        <span className="bin-item-link">
          <Trash2 size={16} />
          Deleted Note
        </span>
      </div>
    </div>
  );
}
