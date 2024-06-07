export function totalValues(arr) {
  let totPrice = 0;
  for (let i of arr) {
    totPrice = totPrice + i.count * i.price;
  }
  let totalItems = arr.reduce((acc, i) => {
    return acc + i.count;
  }, 0);
  return [totPrice, totalItems];
}
