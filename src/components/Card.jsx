import { Label } from "./Label";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { Checkbox } from "./Checkbox";
import { BulletPoints } from "./BulletPoints";
import { UtilBar } from "./UtilBar";

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
    <div className="flex flex-col gap-4">
      {workInfoState.map((state) => {
        return (
          <div
            key={state.id}
            className="border-1 border-amber-50 p-5 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {workInfoFields.map((f) => (
              <div
                key={f.name}
                className={`flex gap-2 ${f.type === "textarea" ? "md:col-span-2" : ""} ${f.type === "checkbox" ? "flex-row items-center" : "flex-col"}`}
              >
                <Label inputId={f.name} inputName={f.label}></Label>
                {generateForm(f, state)}
              </div>
            ))}
            <BulletPoints></BulletPoints>
            <UtilBar></UtilBar>
          </div>
        );
      })}
    </div>
  );
}
