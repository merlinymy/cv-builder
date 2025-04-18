import { ArrowDown } from "./ArrowDown";
import { ArrowUp } from "./ArrowUp";
import { TrashCan } from "./TrashCan";

export function UtilBar({ isPoint, handleRemove }) {
  return (
    <div className="utilbar-wrap md:col-span-2 flex justify-between items-center gap-0.5">
      <div className="move-wrap flex gap-0.5">
        <button className="move-up h-6 w-6">
          <ArrowUp></ArrowUp>
        </button>
        <button className="move-down h-6 w-6">
          <ArrowDown></ArrowDown>
        </button>
      </div>
      <button
        className={isPoint ? "h-6 w-6" : "pl-4 pt-2 pr-4 pb-2"}
        onClick={handleRemove}
      >
        <TrashCan></TrashCan>
        {isPoint || "Remove Experience"}
      </button>
    </div>
  );
}
