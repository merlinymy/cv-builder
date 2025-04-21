import { Section } from "./components/Section";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { GeneralInfo } from "./components/GeneralInfo";
import { Savebutton } from "./components/Savebutton";
import { Resume } from "./components/Resume";
import { useMemo, useState } from "react";
import { PreviewBtn } from "./components/PreviewBtn";
import "./styles/app.css";
import { Divider } from "./components/Divider";
import { WorkExperience } from "./components/WorkExperience";
import {
  generalInfoFields,
  workInfoFields,
  projectInfoFields,
  educationFields,
  certificationFields,
} from "./assets/dataSchema";
import { Skills } from "./components/Skills";
import { PDFViewer, pdf } from "@react-pdf/renderer";
import { SubHeader } from "./components/SubHeader";

function App() {
  let storedResume;
  if (!localStorage.getItem("resume")) {
    localStorage.setItem("resume", JSON.stringify({}));
  } else {
    storedResume = JSON.parse(localStorage.getItem("resume"));
  }
  const [generalInfoState, setGeneralInfoState] = useState(() => {
    let initialFields = {};
    let saved = storedResume.general;
    if (saved) {
      return saved;
    }
    generalInfoFields.forEach((f) => (initialFields[f.name] = ""));
    return initialFields;
  });

  const [workInfoState, setWorkInfoState] = useState(storedResume.work || []);
  const [projectInfoState, setprojectInfoState] = useState(
    storedResume.projects || [],
  );
  const [skills, setSkills] = useState(storedResume.skills || []);
  const [education, setEducation] = useState(storedResume.education || []);
  const [certification, setCertification] = useState(
    storedResume.certification || [],
  );

  const saveChanges = () => {
    const resume = {
      general: generalInfoState,
      work: workInfoState,
      projects: projectInfoState,
      skills: skills,
      education: education,
      certification: certification,
    };
    try {
      localStorage.setItem("resume", JSON.stringify(resume));
      setSaveMessageVisible(true);
      setTimeout(() => {
        setSaveMessageVisible(false);
      }, 3000);
    } catch (e) {
      console.log(e);
    }
  };

  const [saveMessageVisible, setSaveMessageVisible] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const togglePreview = () => {
    storedResume = JSON.parse(localStorage.getItem("resume"));
    setPreviewVisible(!previewVisible);
  };

  const downloadPDF = async () => {
    const blob = await pdf(
      <Resume
        general={generalInfoState}
        work={workInfoState}
        projects={projectInfoState}
        education={education}
        certification={certification}
        skills={skills}
      ></Resume>,
    ).toBlob();
    const blobUrl = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = `${generalInfoState.name.split(" ").join("_")}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex-col flex items-center ">
      <div className="m-2 w-[80%] max-w-[700px] ">
        <Header></Header>
        <SubHeader></SubHeader>
        <PreviewBtn
          previewVisible={previewVisible}
          handlePreview={togglePreview}
        ></PreviewBtn>
        {
          <div>
            {previewVisible && (
              <div className="resumePreview mb-20 h-[1000px]">
                <button
                  className="mt-3 mb-3 pl-4 pt-2 pr-4 pb-2 text-[#000000] bg-[#cacaca] transition duration-300 ease-in-out dark:hover:bg-[#ffffff]"
                  onClick={downloadPDF}
                >
                  Download PDF
                </button>

                <PDFViewer style={{ width: "100%", height: "100%" }}>
                  <Resume
                    general={generalInfoState}
                    work={workInfoState}
                    projects={projectInfoState}
                    education={education}
                    certification={certification}
                    skills={skills}
                  />
                </PDFViewer>
              </div>
            )}
          </div>
        }
        <Divider></Divider>
        <GeneralInfo
          generalInfoFields={generalInfoFields}
          generalInfoState={generalInfoState}
          setGeneralInfoState={setGeneralInfoState}
        >
          <Savebutton
            saveChanges={saveChanges}
            saveMessageVisible={saveMessageVisible}
          ></Savebutton>
        </GeneralInfo>
        <Divider></Divider>
        <WorkExperience
          workOrProject="work"
          workInfoState={workInfoState}
          setWorkInfoState={setWorkInfoState}
          workInfoFields={workInfoFields}
          setPreviewVisible={setPreviewVisible}
        ></WorkExperience>
        <Divider></Divider>
        <WorkExperience
          workOrProject="project"
          workInfoState={projectInfoState}
          setWorkInfoState={setprojectInfoState}
          workInfoFields={projectInfoFields}
          setPreviewVisible={setPreviewVisible}
        ></WorkExperience>
        <Divider></Divider>
        <Skills skills={skills} setSkills={setSkills}></Skills>
        <Divider></Divider>
        <WorkExperience
          workOrProject="education"
          workInfoState={education}
          setWorkInfoState={setEducation}
          workInfoFields={educationFields}
          setPreviewVisible={setPreviewVisible}
        ></WorkExperience>
        <Divider></Divider>
        <WorkExperience
          workOrProject="certification"
          workInfoState={certification}
          setWorkInfoState={setCertification}
          workInfoFields={certificationFields}
          setPreviewVisible={setPreviewVisible}
        ></WorkExperience>
        <Savebutton
          saveChanges={saveChanges}
          saveMessageVisible={saveMessageVisible}
        ></Savebutton>
      </div>
    </div>
  );
}

export default App;
