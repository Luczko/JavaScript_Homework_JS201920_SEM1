// Exc 9 With a given start value of 0, iterate the array and add even items and substract odd ones.
// wynik = 279
let numbers = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let summary = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    summary = summary + numbers[i];
  } else {
    summary = summary - numbers[i];
  }
}
console.log(summary);
