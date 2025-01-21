import NoteDetail from "./NoteDetail";
import NoteHeader from "./NoteHeader";
import NotesListContainer from "./NotesListContainer";
import NoteBinContainer from "./NoteBinContainer";
import MainContainer from "../layout/MainContainer";

export default function NavMain() {
  return (
    <main className="main-container">
      <NoteHeader />
      <MainContainer>
        <NotesListContainer />
        <NoteDetail />
        <NoteBinContainer />
      </MainContainer>
    </main>
  );
}
