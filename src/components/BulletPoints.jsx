import { AddNewBtn } from "./AddNewBtn";
import { PlusCircle } from "./PlusCircle";

export function BulletPoints() {
  return (
    <div>
      <p className="text-2xl">Bullet Points</p>
      <AddNewBtn>
        <PlusCircle></PlusCircle>
        Add Bullet Points
      </AddNewBtn>
    </div>
  );
}
