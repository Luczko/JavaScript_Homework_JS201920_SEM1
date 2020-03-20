// 12 Create a function that tells us how many days till Friday ☺
let day = new Date();
function currentDay() {
  let count = [5 - day.getDay()];
  return count[0];
}
console.log(currentDay());
