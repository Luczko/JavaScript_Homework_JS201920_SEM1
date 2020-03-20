// 11 Create a function that will return the current day name in Polish.
let day = new Date();
function currentDay() {
  let polishDays = [
    "Niedziela",
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota"
  ];
  return polishDays[day.getDay()];
}
console.log(currentDay());
