import { Textarea } from "./Textarea";
import { UtilBar } from "./UtilBar";
import { moveUp, moveDown } from "../util/util";
export function BulletPoint({
  bulletPoint,
  bulletPoints,
  workInfoState,
  removeBullet,
  updatePoint,
  updatePoints,
}) {
  const moveBulletUp = (bulletPoints, bulletPoint, stateId) => {
    const newArr = moveUp(bulletPoints, bulletPoint);
    updatePoints(stateId, newArr);
  };
  const moveBulletDown = (bulletPoints, bulletPoint, stateId) => {
    const newArr = moveDown(bulletPoints, bulletPoint);
    updatePoints(stateId, newArr);
  };

  return (
    <div key={bulletPoint.pointId} className="flex gap-2 items-center">
      <Textarea
        data={bulletPoint.content}
        handleData={(e) =>
          updatePoint(workInfoState.id, bulletPoint.id, e.target.value)
        }
      ></Textarea>
      <UtilBar
        isPoint={true}
        isFirst={bulletPoints[0] === bulletPoint}
        isLast={bulletPoints[bulletPoints.length - 1] === bulletPoint}
        moveUp={() => moveBulletUp(bulletPoints, bulletPoint, workInfoState.id)}
        moveDown={() =>
          moveBulletDown(bulletPoints, bulletPoint, workInfoState.id)
        }
        handleRemove={() => removeBullet(workInfoState.id, bulletPoint.id)}
      ></UtilBar>
    </div>
  );
}
