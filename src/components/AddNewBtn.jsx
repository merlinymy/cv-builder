export function AddNewBtn({ addNewCard, children }) {
  return (
    <button
      className="flex items-center justify-center mt-2"
      onClick={addNewCard}
    >
      {children}
      <p className="mb-0.5">Add New</p>
    </button>
  );
}
