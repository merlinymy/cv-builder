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
import { generalInfoFields, workInfoFields } from "./assets/dataSchema";

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

  const [resumeState, setResumeState] = useState(() => {
    const initialFields = {};
    return initialFields;
  });

  const [isPreview, setIsPreview] = useState(false);

  const [workInfoState, setWorkInfoState] = useState([]);

  const saveChanges = () => {
    // localStorage.setItem("resume", JSON.stringify({ ...generalInfoState }));
  };

  const updateResume = () => {
    // setResumeState({ ...generalInfoState });
  };

  const handleGeneralInfoState = function (e) {
    const { name, value } = e.target;
    setGeneralInfoState((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handlePreview = (e) => {
    e.preventDefault();
    updateResume();
    setIsPreview(!isPreview);
  };

  const addNewCard = () => {
    setWorkInfoState((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: "",
        roleTitle: "",
        startDate: "",
        endDate: "",
        isCurrent: false,
        location: "",
        bulletPoints: [""],
      },
    ]);
  };

  return (
    <div className="h-dvh flex-col flex items-center ">
      <div className="m-2 w-[80%] max-w-[960px]">
        <Header></Header>
        <PreviewBtn
          isPreview={isPreview}
          handlePreview={handlePreview}
        ></PreviewBtn>

        <Resume resumeData={resumeState}></Resume>
        <GeneralInfo
          generalInfoFields={generalInfoFields}
          generalInfoState={generalInfoState}
          setGeneralInfoState={setGeneralInfoState}
        >
          <Savebutton saveChanges={saveChanges}></Savebutton>
        </GeneralInfo>
        <Divider></Divider>
        <WorkExperience
          workInfoState={workInfoState}
          setWorkInfoState={setWorkInfoState}
          workInfoFields={workInfoFields}
          addNewCard={addNewCard}
        ></WorkExperience>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
