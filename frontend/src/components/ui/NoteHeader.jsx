import NoteSearchForm from "./NoteSearchForm";

export default function NoteHeader() {
  return (
    <header className="header-container">
      <h1 className="heading-one">All Notes</h1>

      <NoteSearchForm />
    </header>
  );
}
