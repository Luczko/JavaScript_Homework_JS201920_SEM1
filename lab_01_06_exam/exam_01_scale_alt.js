// 1) Scale riddle. With 8 balls ☺ EXAM [1,1,1,1,2,1,1,1]. One of the items will be change to two. Indexes are t be chosen at random. Use compressions only two times.
let numbers = [1, 1, 1, 1, 1, 1, 2, 1];
function scaleRiddle(arr) {
  let plate1 = [];
  let plate2 = [];
  let plate3 = [];
  let sum1 = 0;
  let sum2 = 0;
  for (i = 0; i < numbers.length; i++) {
    if (i < 3) {
      let factor = Math.floor(Math.random() * arr.length);
      if (plate1.includes(factor, 0) === true) {
        i = i - 1;
      } else {
        sum1 += arr[factor];
        plate1.push(factor);
      }
    } else if (i >= 3 && i < 6) {
      let factor = Math.floor(Math.random() * arr.length);
      if (
        plate1.includes(factor, 0) === true ||
        plate2.includes(factor, 0) === true
      ) {
        i = i - 1;
      } else {
        sum2 += arr[factor];
        plate2.push(factor);
      }
    } else {
      let factor = Math.floor(Math.random() * arr.length);
      if (
        plate1.includes(factor, 0) === true ||
        plate2.includes(factor, 0) === true ||
        plate3.includes(factor, 0) === true
      ) {
        i = i - 1;
      } else {
        plate3.push(factor);
      }
    }
  }
  if (sum1 === sum2) {
    if (arr[plate3[0]] < arr[plate3[1]]) {
      return plate3[1];
    } else {
      return plate3[0];
    }
  } else if (sum1 > sum2) {
    if (arr[plate1[0]] < arr[plate1[1]]) {
      return plate1[1];
    } else if (arr[plate1[0]] > arr[plate1[1]]) {
      return plate1[0];
    } else {
      return plate1[2];
    }
  } else {
    if (arr[plate2[0]] < arr[plate2[1]]) {
      return plate2[1];
    } else if (arr[plate2[0]] > arr[plate2[1]]) {
      return plate2[0];
    } else {
      return plate2[2];
    }
  }
}
console.log(`Szukany indeks to: ${scaleRiddle(numbers)}`);
