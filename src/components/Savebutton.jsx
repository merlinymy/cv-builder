export function Savebutton({ saveChanges, saveMessageVisible }) {
  return (
    <div className="flex items-center">
      <button
        onClick={saveChanges}
        className=" save-btn mt-3 pl-4 pt-2 pr-4 pb-2"
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
