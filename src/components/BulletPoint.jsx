import { Textarea } from "./Textarea";
import { UtilBar } from "./UtilBar";
export function BulletPoint({
  bulletPoint,
  workInfoState,
  removeBullet,
  updatePoint,
}) {
  return (
    <div key={bulletPoint.pointId} className="flex gap-2 items-center">
      <Textarea
        data={bulletPoint.context}
        handleData={(e) =>
          updatePoint(workInfoState.id, bulletPoint.id, e.target.value)
        }
      ></Textarea>
      <UtilBar
        isPoint={true}
        handleRemove={() => removeBullet(workInfoState.id, bulletPoint.id)}
      ></UtilBar>
    </div>
  );
}
