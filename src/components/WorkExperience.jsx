import { Card } from "./Card";
import { AddNewBtn } from "./AddNewBtn";
import { PlusCircle } from "./PlusCircle";
export function WorkExperience({
  workInfoState,
  setWorkInfoState,
  workInfoFields,
  addNewCard,
}) {
  return (
    <div>
      <p className="text-2xl">Work Experience</p>
      <Card
        workInfoState={workInfoState}
        setWorkInfoState={setWorkInfoState}
        workInfoFields={workInfoFields}
      ></Card>
      <AddNewBtn addNewCard={addNewCard}>
        <PlusCircle></PlusCircle>
        Add Work Experience
      </AddNewBtn>
    </div>
  );
}
