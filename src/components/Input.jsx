export function Input({ type, name, data, handleData, stateId }) {
  return (
    <input
      type={type}
      id={name}
      stateid={stateId}
      name={name}
      value={data[name]}
      onChange={handleData}
      className="border rounded h-[2rem] p-[0.5rem]"
    />
  );
}
