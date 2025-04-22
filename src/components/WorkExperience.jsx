import { Card } from "./Card";
import { AddNewBtn } from "./AddNewBtn";
import { PlusCircle } from "./PlusCircle";
export function WorkExperience({
  workOrProject,
  workInfoState,
  setWorkInfoState,
  workInfoFields,
  setPreviewVisible,
  previewVisible,
}) {
  const addNewCard = (workOrProject) => {
    setWorkInfoState((prev) => [
      ...prev,
      workOrProject === "work"
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
        : workOrProject === "education"
          ? {
              id: crypto.randomUUID(),
              institutionName: "",
              certification: "",
              startDate: "",
              endDate: "",
              gpa: "",
            }
          : workOrProject === "certification"
            ? {
                id: crypto.randomUUID(),
                certificationName: "",
                description: "",
              }
            : {
                id: crypto.randomUUID(),
                projectName: "",
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
      <p className="text-2xl mb-4">
        {workOrProject === "work"
          ? "Work Experience"
          : workOrProject === "project"
            ? "Projects"
            : workOrProject === "education"
              ? "Education"
              : "Certifications"}
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
            setPreviewVisible={setPreviewVisible}
            previewVisible={previewVisible}
          ></Card>
        ))}
      </div>

      <AddNewBtn addNewCard={() => addNewCard(workOrProject)}>
        <PlusCircle></PlusCircle>
        {workOrProject === "work"
          ? "Add Work Experience"
          : workOrProject === "project"
            ? "Add Project"
            : workOrProject === "education"
              ? "Add Education"
              : "Add Certification"}
      </AddNewBtn>
    </div>
  );
}
