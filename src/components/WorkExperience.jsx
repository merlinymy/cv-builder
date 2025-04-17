import { Card } from "./Card";
import { AddNewBtn } from "./AddNewBtn";
import { PlusCircle } from "./PlusCircle";
export function WorkExperience({
  workInfoState,
  setWorkInfoState,
  workInfoFields,
  addNewCard,
}) {
  console.log(workInfoState);
  return (
    <div>
      <p>Work Experience</p>
      <Card
        workInfoState={workInfoState}
        setWorkInfoState={setWorkInfoState}
        workInfoFields={workInfoFields}
      ></Card>
      <AddNewBtn addNewCard={addNewCard}>
        <PlusCircle></PlusCircle>
      </AddNewBtn>
    </div>
  );
}
