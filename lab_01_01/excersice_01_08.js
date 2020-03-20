// Exc 8 Calculate average value of items at even indexes. Zero is not considered to be even number. [1,6,23,8,4,98,3,7,3,98,4,98]
// wynik = 7.4
let numbers = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let even = [];
let summary = 0;
for (let i = 0; i < numbers.length; i++) {
  if (i % 2 === 0 && i != 0) {
    even.push(numbers[i]);
    summary = summary + numbers[i];
  }
}
console.log(summary / even.length);
