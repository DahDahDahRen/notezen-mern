import NavLogoContainer from "./NavLogoContainer";
import NoteFolder from "./NoteFolder";
import NoteTagsList from "./NoteTagsList";

export default function NavNote() {
  return (
    <nav className="nav-container">
      <NavLogoContainer />
      <NoteFolder />
      <NoteTagsList />
    </nav>
  );
}
