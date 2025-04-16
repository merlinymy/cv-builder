export function GeneralInfo({
  generalInfoFields,
  generalInfoState,
  setGeneralInfoState,
  children,
}) {
  return (
    <div>
      <p className="text-2xl">General Info</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {generalInfoFields.map(({ name, label, type }) => (
          <div
            key={name}
            className={`flex flex-col ${type === "textfield" ? "md:col-span-2" : ""}`}
          >
            <label htmlFor={name}>{label}</label>
            {type === "textfield" ? (
              <textarea
                name={name}
                id={name}
                value={generalInfoState[name]}
                onChange={setGeneralInfoState}
                className="border-1 border-amber-50 rounded-[5px] h-[6rem] p-[0.5rem]"
              ></textarea>
            ) : (
              <input
                type={type}
                id={name}
                name={name}
                value={generalInfoState[name]}
                onChange={setGeneralInfoState}
                className="border-1 border-amber-50 rounded-[5px] h-[2rem] p-[0.5rem]"
              />
            )}
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}
