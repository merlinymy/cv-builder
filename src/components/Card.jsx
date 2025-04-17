import { Label } from "./Label";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { Checkbox } from "./Checkbox";

export function Card({ workInfoState, setWorkInfoState, workInfoFields }) {
  const generateForm = function (field, state) {
    if (field.type === "text" || field.type === "date") {
      return (
        <Input
          type={field.type}
          name={field.name}
          stateId={state.id}
          data={state}
          handleData={setWorkInfoState}
        ></Input>
      );
    } else if (field.type === "textarea") {
      return (
        <Textarea
          data={state}
          name={field.name}
          stateId={state.id}
          handleData={setWorkInfoState}
        ></Textarea>
      );
    } else if (field.type === "checkbox") {
      return (
        <Checkbox
          name={field.name}
          data={state}
          stateId={state.id}
          handleData={setWorkInfoState}
        ></Checkbox>
      );
    }
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
