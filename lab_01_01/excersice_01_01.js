// Exc 1 From years in array check for leap years [1974, 1900, 1985, 2000]
// 2000
let years = [1974, 1900, 1985, 2000];
for (let i = 0; i < years.length; i++) {
  if ((years[i] % 100 != 0 && years[i] % 4 === 0) || years[i] % 400 === 0) {
    console.log(years[i]);
  }
}
