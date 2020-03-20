// 1) Show a result of Josephus Problem for 7 soldiers.
// 	a. 1 Kills 2
// 	b. 3 Kills 4
// 	c. 5 Kills 6
// 	d. 7 Kills 1
// 	e. 3 Kills 5
// 	f. 7 Kills 3
// 	g. 7 Remains alive

class Soldier {
  constructor(name) {
    this.name = name;
  }
}

(function() {
  let unit = [];
  let numberOfSoldiers = 7;
  for (let i = 1; i <= numberOfSoldiers; i++) {
    unit.push(new Soldier(`Soldier ${i}`));
  }
  let executioner = 0;
  for (; unit.length > 1; ) {
    let fatality = (executioner + 1) % unit.length;
    console.log(
      "executioner:",
      unit[executioner].name,
      "victim:",
      unit[fatality].name
    );
    unit.splice(fatality, 1);
    executioner = fatality % unit.length;
  }
  console.log(unit[0].name, "remains alive");
})();
