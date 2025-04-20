import { Cross } from "./Cross";

export function Tag({ skill, removeSkill }) {
  return (
    <div className="tag flex items-baseline w-fit rounded-[15px] gap-2.5 align-bottom">
      <p className="align-top">{skill}</p>
      <button onClick={removeSkill}>
        <Cross></Cross>
      </button>
    </div>
  );
}
