import { useState } from "react";
import { Input } from "./Input";
import { Tag } from "./Tag";

export function Skills({ skills, setSkills }) {
  const [skillInput, setSkillInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addSkill(setSkills, skillInput);
      setSkillInput("");
    }
  };
  const addSkill = (setSkills, newSkill) => {
    if (newSkill !== "" && !skillInput.includes(newSkill)) {
      setSkills((prev) => [...prev, newSkill]);
    }
  };

  const handleInput = (e) => {
    setSkillInput(e.target.value);
  };

  const removeSkill = (setSkills, skill) => {
    setSkills((prev) => prev.filter((s) => s !== skill));
  };
  return (
    <div className="skills flex flex-col gap-2">
      <p className="text-2xl">Skills</p>

      <div className="flex gap-2 items-center">
        <Input
          type={"text"}
          placeHolder={"Enter a skill"}
          data={skillInput}
          handleData={handleInput}
          handleKeyDown={handleKeyDown}
        ></Input>
        <button
          className=" pl-4 pt-2 pr-4 pb-2"
          onClick={() => addSkill(setSkills, skillInput)}
        >
          Add Skill
        </button>
      </div>
      <div className="skillTags flex gap-2">
        {skills.map((s) => (
          <Tag
            key={s}
            skill={s}
            removeSkill={() => removeSkill(setSkills, s)}
          ></Tag>
        ))}
      </div>
    </div>
  );
}
