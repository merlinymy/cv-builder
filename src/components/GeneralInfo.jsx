import { Input } from "./Input";
import { Textarea } from "./Textarea";
export function GeneralInfo({
  generalInfoFields,
  generalInfoState,
  setGeneralInfoState,
  children,
}) {
  const handleGeneralInfoState = function (e) {
    const { name, value } = e.target;
    setGeneralInfoState({ ...generalInfoState, [name]: value });
  };
  return (
    <div>
      <p className="text-2xl">General Info</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {generalInfoFields.map(({ name, label, type }) => (
          <div
            key={name}
            className={`flex flex-col gap-2 ${type === "textfield" ? "md:col-span-2" : ""}`}
          >
            <label htmlFor={name}>{label}</label>
            {type === "textfield" ? (
              <Textarea
                data={generalInfoState[name]}
                name={name}
                handleData={handleGeneralInfoState}
              ></Textarea>
            ) : (
              <Input
                type={type}
                name={name}
                data={generalInfoState}
                handleData={handleGeneralInfoState}
              ></Input>
            )}
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}
