export function Textarea({ data, name, handleData, stateId }) {
  return (
    <textarea
      className="border-1 border-amber-50 rounded-[5px] h-[6rem] p-[0.5rem]"
      name={name}
      id={name}
      stateid={stateId}
      value={data[name]}
      onChange={handleData}
    ></textarea>
  );
}
