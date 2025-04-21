export function Textarea({ data, name, handleData, stateId }) {
  return (
    <textarea
      className="border-1 border-amber-50 rounded-[5px] min-h-[6rem] p-[0.5rem] flex-1"
      name={name}
      id={name}
      stateid={stateId}
      value={data}
      onChange={handleData}
    ></textarea>
  );
}
