export function AddNewBtn({ addNewCard, children }) {
  return (
    <button
      className="flex items-center justify-center mt-4 mb-4 pl-4 pt-2 pr-4 pb-2"
      onClick={addNewCard}
    >
      {children}
    </button>
  );
}
