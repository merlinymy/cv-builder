export function Savebutton({ saveChanges, saveMessageVisible }) {
  return (
    <div className="flex items-center">
      <button
        onClick={saveChanges}
        className=" mt-3 pl-4 pt-2 pr-4 pb-2 text-[#000000] bg-[#c5c5c5] transition duration-300 ease-in-out hover:text-[white] hover:bg-[#151515]"
      >
        Save Changes
      </button>
      {saveMessageVisible && (
        <span className=" top-0 bg-green-200 text-green-800 px-2 py-1 rounded text-sm animate-slide-out">
          ✅ Saved!
        </span>
      )}
    </div>
  );
}
