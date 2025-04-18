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

  const [workInfoState, setWorkInfoState] = useState([]);

  const handleGeneralInfoState = function (e) {
    const { name, value } = e.target;
    setGeneralInfoState({ ...generalInfoState, [name]: value });
  };

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

  const addNewPoint = (id) => {
    setWorkInfoState((prev) =>
      prev.map((state) =>
        state.id === id
          ? {
              ...state,
              bulletPoints: [
                ...state.bulletPoints,
                {
                  id: crypto.randomUUID(),
                  content: "",
                },
              ],
            }
          : state,
      ),
    );
  };

  const removeBullet = (stateId, pointId) => {
    setWorkInfoState((prev) =>
      prev.map((state) =>
        state.id === stateId
          ? {
              ...state,
              bulletPoints: state.bulletPoints.filter(
                (point) => point.id !== pointId,
              ),
            }
          : state,
      ),
    );
  };

  const updatePoint = (stateId, pointId, newPoint) => {
    setWorkInfoState((prev) => {
      const newState = prev.map((state) =>
        state.id === stateId
          ? {
              ...state,
              bulletPoints: state.bulletPoints.map((point) =>
                point.id === pointId ? { ...point, content: newPoint } : point,
              ),
            }
          : state,
      );
      return newState;
    });
  };

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
          setGeneralInfoState={handleGeneralInfoState}
        >
          <Savebutton></Savebutton>
        </GeneralInfo>
        <Divider></Divider>
        <WorkExperience
          workInfoState={workInfoState}
          setWorkInfoState={setWorkInfoState}
          workInfoFields={workInfoFields}
          addNewCard={addNewCard}
          addNewPoint={addNewPoint}
          removeBullet={removeBullet}
          updatePoint={updatePoint}
        ></WorkExperience>
        <Divider></Divider>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
