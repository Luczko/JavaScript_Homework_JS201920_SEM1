let colors = [1, 2, 3, 4];
let figures = [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

let deck = [];
for (let i = 0; i < colors.length; i++) {
  for (let j = 0; j < figures.length; j++) {
    let card = {
      figure: figures[j],
      color: colors[i]
    };
    deck.push(card);
  }
}

// console.log(deck);
// console.log(deck[2]);

let randomCards = [];
for (let i = 0; i < 5; i++) {
  let newCard = Math.floor(Math.random() * deck.length);
  randomCards.push(deck[newCard]);
  deck.splice(newCard, 1);
}

// cS - skrót od cardsSorted przy sprawdzaniu zmienić nazwe
const bS = randomCards.sort(function(a, b) {
  return a.figure - b.figure;
});

// DO SPRAWDZANIA POPRAWNOŚCI ZMIENIĆ NA cS
const cS = [
  {
    figure: 2,
    color: 1
  },
  {
    figure: 3,
    color: 1
  },
  {
    figure: 4,
    color: 2
  },
  {
    figure: 5,
    color: 3
  },
  {
    figure: 14,
    color: 4
  }
];

const cardsColored = cS.map(e => {
  switch (e.color) {
    case 1:
      return (e = {
        figure: e.figure,
        color: "Hearts"
      });
    case 2:
      return (e = {
        figure: e.figure,
        color: "Clubs"
      });
    case 3:
      return (e = {
        figure: e.figure,
        color: "Diamond"
      });
    case 4:
      return (e = {
        figure: e.figure,
        color: "Spades"
      });
  }
});
const cardsNamed = cardsColored.map(e => {
  switch (e.figure) {
    case 2:
      return (e = {
        figure: "Two",
        color: e.color
      });
    case 3:
      return (e = {
        figure: "Three",
        color: e.color
      });
    case 4:
      return (e = {
        figure: "Four",
        color: e.color
      });
    case 5:
      return (e = {
        figure: "Five",
        color: e.color
      });
    case 6:
      return (e = {
        figure: "Six",
        color: e.color
      });
    case 7:
      return (e = {
        figure: "Seven",
        color: e.color
      });
    case 8:
      return (e = {
        figure: "Eight",
        color: e.color
      });
    case 9:
      return (e = {
        figure: "Nine",
        color: e.color
      });
    case 10:
      return (e = {
        figure: "Ten",
        color: e.color
      });
    case 11:
      return (e = {
        figure: "Jack",
        color: e.color
      });
    case 12:
      return (e = {
        figure: "Queen",
        color: e.color
      });
    case 13:
      return (e = {
        figure: "King",
        color: e.color
      });
    case 14:
      return (e = {
        figure: "Ace",
        color: e.color
      });
  }
});

console.log("Twoja ręka to:");
console.log(`${cardsNamed[0].figure} of ${cardsNamed[0].color}`);
console.log(`${cardsNamed[1].figure} of ${cardsNamed[1].color}`);
console.log(`${cardsNamed[2].figure} of ${cardsNamed[2].color}`);
console.log(`${cardsNamed[3].figure} of ${cardsNamed[3].color}`);
console.log(`${cardsNamed[4].figure} of ${cardsNamed[4].color}`);

function isStraight() {
  for (let i = 0; i < 4; i++) {
    if (cS[i].figure != cS[i + 1].figure - 1) {
      return false;
    }
  }
  return true;
}

function isSpecialStraight() {
  for (let i = 0; i < 3; i++) {
    if (cS[i].figure != cS[i + 1].figure - 1) {
      return false;
    }
  }
  if (cS[4].figure == 14) {
    return true;
  }
}

function isFlush() {
  for (let i = 0; i < 4; i++) {
    if (cS[i].color != cS[i + 1].color) {
      return false;
    }
  }
  return true;
}

function repetitions() {
  let reps = [];
  for (let i = 0; i < 4; i++) {
    if (cS[i].figure == cS[i + 1].figure) {
      reps.push(cS[i].figure);
    }
  }
  return reps;
}

function onePair() {
  let check = repetitions();
  if (check.length != 1) {
    return false;
  }
  return true;
}

function twoPairs() {
  let check = repetitions();
  if (check.length == 2 && check[0] != check[1]) {
    return true;
  }
  return false;
}

function threeOfA() {
  let check = repetitions();
  if (check.length == 2 && check[0] == check[1]) {
    return true;
  }
  return false;
}

function fourOfA() {
  let check = repetitions();
  if (check.length == 3 && check[0] == check[1] && check[1] == check[2]) {
    return true;
  }
  return false;
}

function fullHouse() {
  let check = repetitions();
  if (check.length == 3 && (check[0] != check[1] || check[1] != check[2])) {
    return true;
  }
  return false;
}

function scoreCards() {
  let cards = repetitions();
  let map = cards.map(e => {
    switch (e) {
      case 2:
        return "Two";
      case 3:
        return "Three";
      case 4:
        return "Four";
      case 5:
        return "Five";
      case 6:
        return "Six";
      case 7:
        return "Seven";
      case 8:
        return "Eight";
      case 9:
        return "Nine";
      case 10:
        return "Ten";
      case 11:
        return "Jack";
      case 12:
        return "Queen";
      case 13:
        return "King";
      case 14:
        return "Ace";
    }
  });
  return map;
}

function yourHand() {
  let final = scoreCards();
  if (isStraight() && isFlush() && cS[4].figure == 14) {
    return "Royal Flush";
  } else if ((isStraight() || isSpecialStraight()) && isFlush()) {
    return "Straight Flush";
  } else if (isStraight() || isSpecialStraight()) {
    return "Straight";
  } else if (isFlush()) {
    return "Flush";
  } else if (fourOfA()) {
    return `Four of a kind of ${final[0]}s`;
  } else if (fullHouse()) {
    return `Full house of ${final[0]}s and ${final[2]}s`;
  } else if (threeOfA()) {
    return `Three of a kind of ${final[0]}s`;
  } else if (twoPairs()) {
    return `Two pairs of ${final[0]}s and ${final[1]}s`;
  } else if (onePair()) {
    return `One pair of ${final[0]}s`;
  } else {
    return `Highest card: ${cardsNamed[4].figure} of ${cardsNamed[4].color}`;
  }
}

console.log("Twój wynik to:", yourHand());
// console.log(scoreCards());
