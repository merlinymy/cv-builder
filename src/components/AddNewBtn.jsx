export function AddNewBtn({ addNewCard, children }) {
  return (
    <button
      className="flex items-center justify-center mt-2"
      onClick={addNewCard}
    >
      {children}
    </button>
  );
}
