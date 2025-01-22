import { CircleX } from "lucide-react";

export default function Modal({ children, setModal }) {
  return (
    <>
      <div className="modal-container">
        <div className="modal-control-panel">
          <button className="btn-modal" onClick={() => setModal(false)}>
            <CircleX />
          </button>
        </div>
        {children}
      </div>
    </>
  );
}
