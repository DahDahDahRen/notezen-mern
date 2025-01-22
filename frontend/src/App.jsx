import NavNote from "./components/ui/NavNote";
import NavMain from "./components/ui/NavMain";
import AppContainer from "./components/layout/AppContainer";
import useStore from "./store/store";
import { useEffect } from "react";

function App() {
  const getNotes = useStore((state) => state.getNotes);
  const notes = useStore((state) => state.notes);

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <AppContainer>
        <NavNote />
        <NavMain />
      </AppContainer>
    </>
  );
}

export default App;
