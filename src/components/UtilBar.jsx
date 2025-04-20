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
        <button className="move-up h-6 w-6" disabled={isFirst} onClick={moveUp}>
          <ArrowUp></ArrowUp>
        </button>
        <button
          className="move-down h-6 w-6"
          disabled={isLast}
          onClick={moveDown}
        >
          <ArrowDown></ArrowDown>
        </button>
      </div>
      <button
        className={isPoint ? "h-6 w-6" : "pl-4 pt-2 pr-4 pb-2"}
        onClick={handleRemove}
      >
        <TrashCan></TrashCan>
        {isPoint
          ? ""
          : workOrProject === "work"
            ? "Remove Experience"
            : "Remove Project"}
      </button>
    </div>
  );
}
