import { Label } from "./Label";
import { Input } from "./Input";
import { Textarea } from "./Textarea";

export function Card({ workInfoState, setWorkInfoState, workInfoFields }) {
  const generateForm = function (field, state) {
    if (field.type === "text" || field.type === "date") {
      return (
        <Input
          type={field.type}
          name={field.name}
          data={state[field.name]}
          setData={handleChange}
        ></Input>
      );
    } else if (field.type === "textarea") {
      return (
        <Textarea data={workInfoState} handleChange={handleChange}></Textarea>
      );
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkInfoState((prev) => [...prev]);
  };
  return (
    <div className="border-1 border-amber-50">
      {workInfoState.map((state) => {
        return workInfoFields.map((f) => (
          <div key={f.name} className="input-group">
            <Label inputId={f.name} inputName={f.label}></Label>
            {generateForm(f, state)}
          </div>
        ));
      })}
    </div>
  );
}
