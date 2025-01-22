import { createPortal } from "react-dom";
import { useState } from "react";
import Modal from "./Modal";
import CreateNoteModal from "./CreateNoteModal";

export default function NoteCreate() {
  const [modal, setModal] = useState(false);

  return (
    <div className="note-input-container">
      {/* Trigger Modal */}
      <button className="btn-create" onClick={() => setModal(true)}>
        Create Note
      </button>

      {/* Open modal */}
      {modal &&
        createPortal(
          <Modal setModal={setModal}>
            <CreateNoteModal />
          </Modal>,
          document.querySelector(".modal")
        )}
    </div>
  );
}
