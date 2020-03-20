// Exc 5 Choose longest string from the array. [‘Karol’, ‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’].
// Politechnika
let longest = "";
let strings = ["Karol", "Adam", "Rogowski", "Politechnika", "Super", "Weekend"];

for (i = 0; i < strings.length; i++) {
  if (strings[i].length > longest.length) {
    longest = strings[i];
  }
}
console.log(longest);
