import { Card } from "./Card";
import { AddNewBtn } from "./AddNewBtn";
import { PlusCircle } from "./PlusCircle";
export function WorkExperience({
  workInfoState,
  setWorkInfoState,
  workInfoFields,
  addNewCard,
  addNewPoint,
  removeBullet,
  updatePoint,
}) {
  return (
    <div>
      <p className="text-2xl">Work Experience</p>
      <div className="flex flex-col gap-4">
        {workInfoState.map((state) => (
          <Card
            key={state.id}
            workInfoState={state}
            setWorkInfoState={setWorkInfoState}
            workInfoFields={workInfoFields}
            addNewPoint={addNewPoint}
            removeBullet={removeBullet}
            updatePoint={updatePoint}
          ></Card>
        ))}
      </div>

      <AddNewBtn addNewCard={addNewCard}>
        <PlusCircle></PlusCircle>
        Add Work Experience
      </AddNewBtn>
    </div>
  );
}
