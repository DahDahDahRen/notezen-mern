export default function CreateNoteModal() {
  return (
    <>
      <form className="create-note-form">
        <h2 className="form-heading">Create New Note</h2>

        <div className="form-section">
          <label className="input-label" htmlFor="title">
            Title
          </label>
          <input type="text" id="title" name="title" className="input-text" />
        </div>

        <div className="form-section">
          <label className="input-label" htmlFor="tags">
            Tags
          </label>
          <input type="text" id="tags" name="tags" className="input-text" />
        </div>
      </form>
    </>
  );
}
