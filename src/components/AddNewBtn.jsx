export function AddNewBtn({ addNewCard, children }) {
  return (
    <button
      className="flex items-center justify-center mt-2 pl-4 pt-2 pr-4 pb-2"
      onClick={addNewCard}
    >
      {children}
    </button>
  );
}
