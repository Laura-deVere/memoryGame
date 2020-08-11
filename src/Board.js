import icons from "./icons";
import Card from "./Card";

function makeBoard(num) {
  const iconsLength = icons.length;
  const app = document.getElementById("app");
  const board = document.createElement("ul");
  board.classList.add("board");
  app.appendChild(board);

  function makeCards(num) {
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

    for (let i = 0; i < cards.length; i++) {
      let el = document.createElement("li");
      el.classList.add("card");
      let cover = document.createElement("div");
      let back = document.createElement("div");
      cover.classList.add("back", "lni", `${icons[i]}`);
      back.classList.add("cover");
      board.appendChild(el);
      el.appendChild(cover);
      el.appendChild(back);
    }
    return cards;
  }

  function getRandomNumber() {
    const memo = {};
    return function getNum(iconsLength) {
      let num = Math.floor(Math.random() * Math.floor(iconsLength));
      console.log(memo);
      if (!memo[num]) {
        memo[num] = true;
        return num;
      } else {
        return getNum(iconsLength);
      }
    };
  }

  return makeCards(num);
}

export default makeBoard;
