export function PreviewBtn({ previewVisible, handlePreview }) {
  return (
    <div>
      <button className="preview" onClick={handlePreview}>
        {previewVisible ? "Hide" : "Show"} Preview
      </button>
    </div>
  );
}
