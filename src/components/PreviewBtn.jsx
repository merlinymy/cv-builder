export function PreviewBtn({ previewVisible, handlePreview }) {
  return (
    <div>
      <button
        className="preview mt-3 mb-3 pl-4 pt-2 pr-4 pb-2 bg-[#191919] transition duration-300 ease-in-out hover:bg-[#4b4b4b]"
        onClick={handlePreview}
      >
        {previewVisible ? "Hide" : "Show"} Preview
      </button>
    </div>
  );
}
