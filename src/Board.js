import icons from "./icons";
import Card from "./Card";

function makeBoard(num) {
  const app = document.getElementById("app");
  const board = document.createElement("ul");
  board.classList.add("board");
  app.appendChild(board);

  function makeCards(num) {
    const iconsLength = icons.length;
    const cards = [];
    const getNumber = getRandomNumber();
    let newCard;

    for (let i = 1; i <= num / 2; i++) {
      let getCardName = getNumber(iconsLength);
      newCard = new Card(i, 0, icons[getCardName]);
      cards.push(newCard);
    }
    let cardsLength = cards.length;
    for (let i = 0; i < cardsLength; i++) {
      cards[i].pair = cardsLength + i;
      newCard = new Card(cardsLength + i, i + 1, cards[i].className);
      cards.push(newCard);
    }

    appendCardsToDOM(cards);
    return cards;
  }

  function appendCardsToDOM(cards) {
    cards = randomize(cards);
    console.log(cards);
    for (let i = 0; i < cards.length; i++) {
      let el = document.createElement("li");
      el.classList.add("card");
      el.setAttribute("id", `card-${i}`);
      let cover = document.createElement("div");
      let back = document.createElement("div");
      cover.classList.add("cover");
      cover.innerHTML = "Cover";
      cover.setAttribute("id", `card-${cards[i].id}${cards[i].id}${i}-front`);
      back.classList.add("back", "lni", cards[i].className, "flip-card-back");
      back.setAttribute("id", `card-${cards[i].id}${cards[i].id}${i}-back`);
      board.appendChild(el);
      el.appendChild(cover);
      el.appendChild(back);
    }
  }

  function getRandomNumber() {
    const memo = {};
    return function getNum(length) {
      let num = Math.floor(Math.random() * Math.floor(length));
      if (!memo[num]) {
        memo[num] = true;
        return num;
      } else {
        return getNum(length);
      }
    };
  }

  function randomize(arr) {
    let startLength = arr.length - 1;
    let counter = 0;
    while (counter < startLength) {
      console.log(counter, "counter", startLength, "startLength");
      let random = Math.floor(Math.random() * Math.floor(startLength - 1));
      let element = arr.splice(random, 1);
      arr.push(...element);
      counter++;
    }
    return arr;
  }

  return makeCards(num);
}

export default makeBoard;
