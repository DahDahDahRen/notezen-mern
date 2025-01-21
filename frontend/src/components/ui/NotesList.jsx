import NoteItemCard from "./NoteItemCard";

export default function NotesList() {
  return (
    <ul className="note-list">
      <li className="note-item">
        <NoteItemCard />
      </li>

      <li className="note-item">
        <NoteItemCard />
      </li>
    </ul>
  );
}
