import { Label } from "./Label";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { Checkbox } from "./Checkbox";
import { BulletPoints } from "./BulletPoints";
import { UtilBar } from "./UtilBar";

export function Card({
  workInfoState,
  setWorkInfoState,
  workInfoFields,
  addNewPoint,
  removeBullet,
  updatePoint,
}) {
  const handleWorkExperienceState = function (e) {
    const { name, value, type } = e.target;
    const stateid = e.target.getAttribute("stateid");
    setWorkInfoState((prev) => {
      const newState = prev.map((ele) => {
        if (ele.id === stateid) {
          return type === "checkbox"
            ? { ...ele, [name]: e.target.checked }
            : { ...ele, [name]: value };
        }
        return ele;
      });
      return newState;
    });
  };
  const generateForm = function (field, state) {
    if (field.type === "text" || field.type === "month") {
      return (
        <Input
          type={field.type}
          name={field.name}
          stateId={state.id}
          data={state}
          handleData={handleWorkExperienceState}
        ></Input>
      );
    } else if (field.type === "textarea") {
      return (
        <Textarea
          data={state[field.name]}
          name={field.name}
          stateId={state.id}
          handleData={handleWorkExperienceState}
        ></Textarea>
      );
    } else if (field.type === "checkbox") {
      return (
        <Checkbox
          name={field.name}
          data={state}
          stateId={state.id}
          handleData={handleWorkExperienceState}
        ></Checkbox>
      );
    }
  };
  const removeExperience = (id) => {
    setWorkInfoState((prev) => prev.filter((state) => state.id !== id));
  };
  return (
    <div className="flex flex-col gap-4">
      <div
        key={workInfoState.id}
        className="border-1 border-amber-50 p-5 grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {workInfoFields.map((f) => (
          <div
            key={f.name}
            className={`flex gap-2 ${f.type === "textarea" ? "md:col-span-2" : ""} ${f.type === "checkbox" ? "flex-row items-center" : "flex-col"}`}
          >
            <Label inputId={f.name} inputName={f.label}></Label>
            {generateForm(f, workInfoState)}
          </div>
        ))}

        <BulletPoints
          workInfoState={workInfoState}
          addNewPoint={addNewPoint}
          removeBullet={removeBullet}
          updatePoint={updatePoint}
        ></BulletPoints>
        <UtilBar
          isPoint={false}
          handleRemove={() => removeExperience(workInfoState.id)}
        ></UtilBar>
      </div>
    </div>
  );
}
