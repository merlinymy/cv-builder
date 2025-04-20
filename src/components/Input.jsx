export function Input({
  type,
  name,
  data,
  handleData,
  stateId,
  placeHolder,
  handleKeyDown,
}) {
  return (
    <input
      type={type}
      id={name}
      stateid={stateId}
      name={name}
      placeholder={placeHolder}
      value={name ? data[name] : data}
      onKeyDown={handleKeyDown}
      onChange={handleData}
      className="border rounded h-[2rem] p-[0.5rem] placeholder-opacity-0	"
    />
  );
}
