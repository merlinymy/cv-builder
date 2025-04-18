export function UtilBar() {
  return (
    <div className="utilbar-wrap md:col-span-2 flex justify-between">
      <div className="move-wrap flex">
        <button className="move-up"></button>
        <button className="move-down"></button>
      </div>
      <button className="delete-exp">Remove Experience</button>
    </div>
  );
}
