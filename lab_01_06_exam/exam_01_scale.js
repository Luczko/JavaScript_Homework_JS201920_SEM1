// 1) Scale riddle. With 8 balls ☺ EXAM [1,1,1,1,2,1,1,1]. One of the items will be change to two. Indexes are t be chosen at random. Use compressions only two times.
let numbers = [1, 1, 1, 1, 1, 1, 1, 2];

let numbersMap = numbers.map((e, i) => {
  return (obj = { weight: e, idx: i });
});

function firstTry() {
  let plate1 = [];
  let plate2 = [];
  for (let i = 0; i < 6; i++) {
    if (i < 3) {
      let factor = Math.floor(Math.random() * numbersMap.length);
      plate1.push(numbersMap[factor]);
      numbersMap.splice(factor, 1);
    } else {
      let factor = Math.floor(Math.random() * numbersMap.length);
      plate2.push(numbersMap[factor]);
      numbersMap.splice(factor, 1);
    }
  }
  let plate1Sum = plate1[0].weight + plate1[1].weight + plate1[2].weight;
  let plate2Sum = plate2[0].weight + plate2[1].weight + plate2[2].weight;
  if (plate1Sum > plate2Sum) {
    return plate1;
  } else if (plate1Sum < plate2Sum) {
    return plate2;
  } else {
    return numbersMap;
  }
}

function secondTry() {
  let first = firstTry();
  if (first.length == 2) {
    if (first[0].weight > first[1].weight) {
      return first[0].idx;
    } else {
      return first[1].idx;
    }
  } else {
    if (first[0].weight > first[1].weight) {
      return first[0].idx;
    } else if (first[0].weight < first[1].weight) {
      return first[1].idx;
    } else {
      return first[2].idx;
    }
  }
}

console.log(`Szukany indeks to: ${secondTry()}`);
