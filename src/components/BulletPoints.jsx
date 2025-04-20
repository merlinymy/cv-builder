import { AddNewBtn } from "./AddNewBtn";
import { BulletPoint } from "./BulletPoint";
import { PlusCircle } from "./PlusCircle";

export function BulletPoints({
  workInfoState,
  addNewPoint,
  removeBullet,
  updatePoint,
  updatePoints,
}) {
  const bulletPoints = workInfoState.bulletPoints;

  return (
    <div className="md:col-span-2 ">
      <p className="text-2xl">Bullet Points</p>
      <div className="bulletPointsWrap flex flex-col gap-2">
        {bulletPoints.map((point) => (
          <BulletPoint
            key={point.id}
            bulletPoints={bulletPoints}
            bulletPoint={point}
            workInfoState={workInfoState}
            removeBullet={removeBullet}
            updatePoint={updatePoint}
            updatePoints={updatePoints}
          ></BulletPoint>
        ))}
      </div>

      <AddNewBtn addNewCard={() => addNewPoint(workInfoState.id)}>
        <PlusCircle></PlusCircle>
        Add Bullet Points
      </AddNewBtn>
    </div>
  );
}
