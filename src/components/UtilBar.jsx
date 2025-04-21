import { ArrowDown } from "./ArrowDown";
import { ArrowUp } from "./ArrowUp";
import { TrashCan } from "./TrashCan";

export function UtilBar({
  isPoint,
  isFirst,
  isLast,
  handleRemove,
  workOrProject,
  moveUp,
  moveDown,
}) {
  return (
    <div className="utilbar-wrap md:col-span-2 flex justify-between items-center gap-0.5">
      <div className="move-wrap flex gap-0.5">
        <button
          className="move-up h-6 w-6 transition duration-300 ease-in-out hover:bg-[#4b4b4b]"
          disabled={isFirst}
          onClick={moveUp}
        >
          <ArrowUp></ArrowUp>
        </button>
        <button
          className="move-down h-6 w-6 transition duration-300 ease-in-out hover:bg-[#4b4b4b]"
          disabled={isLast}
          onClick={moveDown}
        >
          <ArrowDown></ArrowDown>
        </button>
      </div>
      <button
        className={`${isPoint ? "h-6 w-6" : "pl-4 pt-2 pr-4 pb-2"} transition duration-300 ease-in-out hover:bg-[#4b4b4b]`}
        onClick={handleRemove}
      >
        <TrashCan></TrashCan>
        {isPoint
          ? ""
          : workOrProject === "work"
            ? "Remove Experience"
            : workOrProject === "project"
              ? "Remove Project"
              : workOrProject === "education"
                ? "Remove Education"
                : "Remove Certification"}
      </button>
    </div>
  );
}
