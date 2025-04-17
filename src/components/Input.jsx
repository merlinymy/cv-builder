export function Input({ type, name, data, setData }) {
  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <input
      type={type}
      id={name}
      name={name}
      value={data[name]}
      onChange={handleChange}
      className="border rounded h-[2rem] p-[0.5rem]"
    />
  );
}
