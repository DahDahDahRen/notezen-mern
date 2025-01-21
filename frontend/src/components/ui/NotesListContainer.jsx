import NotesList from "./NotesList";
import NoteCreate from "./NoteCreate";

export default function NotesListContainer() {
  return (
    <div className="notes-container">
      <NoteCreate />
      <NotesList />
    </div>
  );
}
