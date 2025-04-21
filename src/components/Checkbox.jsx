export function Checkbox({ name, handleData, stateId }) {
  return (
    <input
      type="checkbox"
      id={name + stateId}
      name={name}
      onChange={handleData}
      stateid={stateId}
      className="mt-1"
    />
  );
}
