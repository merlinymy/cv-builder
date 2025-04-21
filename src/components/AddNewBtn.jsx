export function AddNewBtn({ addNewCard, children }) {
  return (
    <button
      className="flex items-center justify-center mt-4 mb-4 pl-4 pt-2 pr-4 pb-2  transition duration-300 ease-in-out hover:bg-[#4b4b4b]"
      onClick={addNewCard}
    >
      {children}
    </button>
  );
}
