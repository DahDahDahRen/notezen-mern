import { create } from "zustand";
import { getNotes } from "../service/notesService";

const useStore = create((set) => ({
  notes: [],
  currentUser: {},
  getNotes: async () => {
    const { results } = await getNotes();
    set({ notes: [...results] });
  },
}));

export default useStore;
