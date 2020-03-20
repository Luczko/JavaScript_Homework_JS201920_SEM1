// Exc 7 Calculate average value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98]
// wynik = 45.14
let numbers = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let even = [];
let summary = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    even.push(numbers[i]);
    summary = summary + numbers[i];
  }
}
console.log(summary / even.length);
