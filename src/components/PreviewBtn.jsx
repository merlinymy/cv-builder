export function PreviewBtn({ isPreview, handlePreview }) {
  return (
    <div>
      <button className="preview" onClick={handlePreview}>
        {isPreview ? "Hide" : "Show"} Preview
      </button>
    </div>
  );
}
