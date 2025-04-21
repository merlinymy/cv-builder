import { Label } from "./Label";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { Checkbox } from "./Checkbox";
import { BulletPoints } from "./BulletPoints";
import { UtilBar } from "./UtilBar";
import { moveUp, moveDown } from "../util/util";

export function Card({
  workInfoState,
  workInfoStates,
  setWorkInfoState,
  workInfoFields,
  workOrProject,
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

  const addNewPoint = (id) => {
    setWorkInfoState((prev) =>
      prev.map((state) =>
        state.id === id
          ? {
              ...state,
              bulletPoints: [
                ...state.bulletPoints,
                {
                  id: crypto.randomUUID(),
                  content: "",
                },
              ],
            }
          : state,
      ),
    );
  };

  const removeBullet = (stateId, pointId) => {
    setWorkInfoState((prev) =>
      prev.map((state) =>
        state.id === stateId
          ? {
              ...state,
              bulletPoints: state.bulletPoints.filter(
                (point) => point.id !== pointId,
              ),
            }
          : state,
      ),
    );
  };

  const updatePoint = (stateId, pointId, newPoint) => {
    setWorkInfoState((prev) => {
      const newState = prev.map((state) =>
        state.id === stateId
          ? {
              ...state,
              bulletPoints: state.bulletPoints.map((point) =>
                point.id === pointId ? { ...point, content: newPoint } : point,
              ),
            }
          : state,
      );
      return newState;
    });
  };

  const updatePoints = (stateId, pointsArr) => {
    setWorkInfoState((prev) => {
      const newState = prev.map((state) =>
        state.id === stateId ? { ...state, bulletPoints: pointsArr } : state,
      );
      return newState;
    });
  };
  const moveCardUp = (workInfoState, selectedState) => {
    if (workInfoState[0] === selectedState) {
      return;
    }
    const newState = moveUp(workInfoState, selectedState);
    setWorkInfoState(newState);
  };

  const moveCardDown = (workInfoState, selectedState) => {
    if (workInfoState[workInfoState.length - 1] === selectedState) {
      return;
    }
    const newState = moveDown(workInfoState, selectedState);
    setWorkInfoState(newState);
  };

  return (
    <div className="flex flex-col gap-4">
      <div
        key={workInfoState.id}
        className=" card border-1 border-amber-50 p-5 grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {workInfoFields.map((f) => (
          <div
            key={f.name}
            className={`flex gap-2 ${f.type === "textarea" ? "md:col-span-2" : ""} ${f.type === "checkbox" ? "flex-row items-center" : "flex-col"}`}
          >
            <Label
              inputId={f.name + workInfoState.id}
              inputName={f.label}
            ></Label>
            {generateForm(f, workInfoState)}
          </div>
        ))}
        {workInfoState.bulletPoints && (
          <BulletPoints
            workInfoState={workInfoState}
            addNewPoint={addNewPoint}
            removeBullet={removeBullet}
            updatePoint={updatePoint}
            updatePoints={updatePoints}
          ></BulletPoints>
        )}
        <UtilBar
          isPoint={false}
          workOrProject={workOrProject}
          isFirst={workInfoStates[0] === workInfoState}
          isLast={workInfoStates[workInfoStates.length - 1] === workInfoState}
          handleRemove={() => removeExperience(workInfoState.id)}
          moveUp={() => moveCardUp(workInfoStates, workInfoState)}
          moveDown={() => moveCardDown(workInfoStates, workInfoState)}
        ></UtilBar>
      </div>
    </div>
  );
}
