import { Card } from "./Card";
import { AddNewBtn } from "./AddNewBtn";
import { PlusCircle } from "./PlusCircle";
export function WorkExperience({
  workOrProject,
  workInfoState,
  setWorkInfoState,
  workInfoFields,
}) {
  const addNewCard = (workOrProject) => {
    setWorkInfoState((prev) => [
      ...prev,
      workOrProject === "work" || workOrProject === "project"
        ? {
            id: crypto.randomUUID(),
            companyName: "",
            roleTitle: "",
            startDate: "",
            endDate: "",
            isCurrent: false,
            location: "",
            bulletPoints: [],
          }
        : {
            id: crypto.randomUUID(),
            institutionName: "",
            certification: "",
            startDate: "",
            endDate: "",
            gpa: "",
          },
    ]);
  };

  return (
    <div>
      <p className="text-2xl">
        {workOrProject === "work"
          ? "Work Experience"
          : workOrProject === "project"
            ? "Projects"
            : "Education"}
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

      <AddNewBtn addNewCard={() => addNewCard(workOrProject)}>
        <PlusCircle></PlusCircle>
        {workOrProject === "work"
          ? "Add Work Experience"
          : workOrProject === "project"
            ? "Add Project"
            : "Add Education"}
      </AddNewBtn>
    </div>
  );
}
