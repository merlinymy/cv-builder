export function moveUp(arr, item) {
  return move(arr, item, -1);
}

export function moveDown(arr, item) {
  return move(arr, item, 1);
}

function move(arr, item, step) {
  const idx = arr.indexOf(item);
  const newIdx = idx + step;
  if (newIdx < 0 || newIdx === arr.length) return;
  const indexes = [idx, newIdx].sort((a, b) => a - b);
  return arr.toSpliced(indexes[0], 2, arr[indexes[1]], arr[indexes[0]]);
}
