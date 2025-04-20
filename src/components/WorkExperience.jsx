import { Card } from "./Card";
import { AddNewBtn } from "./AddNewBtn";
import { PlusCircle } from "./PlusCircle";
export function WorkExperience({
  workOrProject,
  workInfoState,
  setWorkInfoState,
  workInfoFields,
}) {
  const addNewCard = () => {
    setWorkInfoState((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        companyName: "",
        roleTitle: "",
        startDate: "",
        endDate: "",
        isCurrent: false,
        location: "",
        bulletPoints: [],
      },
    ]);
  };

  return (
    <div>
      <p className="text-2xl">
        {workOrProject === "work" ? "Work Experience" : "Projects"}
      </p>
      <div className="flex flex-col gap-4">
        {workInfoState.map((state) => (
          <Card
            key={state.id}
            workOrProject={workOrProject}
            workInfoState={state}
            workInfoStates={workInfoState}
            setWorkInfoState={setWorkInfoState}
            workInfoFields={workInfoFields}
          ></Card>
        ))}
      </div>

      <AddNewBtn addNewCard={addNewCard}>
        <PlusCircle></PlusCircle>
        {workOrProject === "work" ? "Add Work Experience" : "Add Projects"}
      </AddNewBtn>
    </div>
  );
}
