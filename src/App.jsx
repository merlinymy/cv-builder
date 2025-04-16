import { Section } from "./components/Section";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { GeneralInfo } from "./components/GeneralInfo";
import { Savebutton } from "./components/Savebutton";
import { Resume } from "./components/Resume";
import { useState } from "react";

function App() {
  const generalInfoFields = [
    { name: "name", label: "Name", type: "text" },
    { name: "email", label: "Email", type: "text" },
    { name: "linkedIn", label: "LinkedIn", type: "text" },
    { name: "phone", label: "Phone Number", type: "text" },
    { name: "github", label: "GitHub", type: "text" },
    { name: "location", label: "Location", type: "text" },
    { name: "summary", label: "Summary", type: "textfield" },
  ];

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

  // const [resumeState, setResumeState] = useState(() => {
  //   const initialFields = {};
  //   return initialFields;
  // });

  const saveChanges = () => {
    localStorage.setItem("resume", JSON.stringify({ ...generalInfoState }));
  };

  // const updateResume = () => {
  //   setResumeState({ ...generalInfoState });
  // };

  const handleGeneralInfoState = function (e) {
    const { name, value } = e.target;
    setGeneralInfoState((prev) => {
      return { ...prev, [name]: value };
    });
    // setGeneralInfoState({ ...generalInfoState, [name]: value });
  };

  return (
    <div className="h-dvh flex-col flex items-center ">
      <div className="m-2 w-[80%] max-w-[960px]">
        <Header></Header>
        {/* <Resume resumeData={resumeState}></Resume> */}
        <GeneralInfo
          generalInfoFields={generalInfoFields}
          generalInfoState={generalInfoState}
          setGeneralInfoState={handleGeneralInfoState}
        >
          <Savebutton saveChanges={saveChanges}></Savebutton>
        </GeneralInfo>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
