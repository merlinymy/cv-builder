import { Section } from "./components/Section";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { GeneralInfo } from "./components/GeneralInfo";
import { Savebutton } from "./components/Savebutton";
import { Resume } from "./components/Resume";
import { useState } from "react";
import { PreviewBtn } from "./components/PreviewBtn";
import "./styles/app.css";
import { Divider } from "./components/Divider";
import { WorkExperience } from "./components/WorkExperience";
import { Card } from "./components/Card";
import {
  generalInfoFields,
  workInfoFields,
  projectInfoFields,
  educationFields,
} from "./assets/dataSchema";
import { Skills } from "./components/Skills";

function App() {
  const [generalInfoState, setGeneralInfoState] = useState(() => {
    const localResume = localStorage.getItem("resume");
    let initialFields = {};
    if (localResume) {
      initialFields = { ...JSON.parse(localResume) };
    } else {
      generalInfoFields.forEach((f) => (initialFields[f.name] = ""));
    }
    return initialFields;
  });

  const [workInfoState, setWorkInfoState] = useState([]);
  const [projectInfoState, setprojectInfoState] = useState([]);
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);

  return (
    <div className="h-dvh flex-col flex items-center ">
      <div className="m-2 w-[80%] max-w-[700px]">
        <Header></Header>
        <PreviewBtn
        // isPreview={isPreview}
        // handlePreview={handlePreview}
        ></PreviewBtn>

        {/* <Resume resumeData={resumeState}></Resume> */}
        <GeneralInfo
          generalInfoFields={generalInfoFields}
          generalInfoState={generalInfoState}
          setGeneralInfoState={setGeneralInfoState}
        >
          <Savebutton></Savebutton>
        </GeneralInfo>
        <Divider></Divider>
        <WorkExperience
          workOrProject="work"
          workInfoState={workInfoState}
          setWorkInfoState={setWorkInfoState}
          workInfoFields={workInfoFields}
        ></WorkExperience>
        <Divider></Divider>
        <WorkExperience
          workOrProject="project"
          workInfoState={projectInfoState}
          setWorkInfoState={setprojectInfoState}
          workInfoFields={projectInfoFields}
        ></WorkExperience>
        <Divider></Divider>
        <Skills skills={skills} setSkills={setSkills}></Skills>
        <Divider></Divider>
        <WorkExperience
          workOrProject="education"
          workInfoState={education}
          setWorkInfoState={setEducation}
          workInfoFields={educationFields}
        ></WorkExperience>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
