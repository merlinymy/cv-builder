export function Textarea({ data, name, setState }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <textarea
      className="border-1 border-amber-50 rounded-[5px] h-[6rem] p-[0.5rem]"
      name={name}
      id={name}
      value={data[name]}
      onChange={handleChange}
    ></textarea>
  );
}
