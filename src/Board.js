import icons from "./icons";
import Card from "./Card";

function Board(num) {
  const app = document.getElementById("app");
  const board = document.getElementById("board");
  board.classList.add("board");
  app.appendChild(board);

  function clearCards(board) {
    while (board.firstChild) {
      board.removeChild(board.firstChild);
    }
  }

  function makeCards(level) {
    const levels = [6, 12, 18, 24, 30, 36];
    const num = levels[level - 1];

    if (board.children.length > 0) {
      clearCards(board);
    }

    const iconsLength = icons.length;
    const cards = [];
    const getNumber = getRandomNumber();
    let newCard;

    for (let i = 1; i <= num / 2; i++) {
      let getCardName = getNumber(iconsLength);
      newCard = new Card(i, 0, icons[getCardName]);
      cards.push(newCard);
    }
    console.log('ORiginal cards length', cards);
    let cardsLength = cards.length;
    for (let i = 0; i < cardsLength; i++) {
      cards[i].pair = (num / 2 + 1) + i;
      newCard = new Card((num / 2 + 1) + i, i + 1, cards[i].className);
      cards.push(newCard);
    }

    appendCardsToDOM(cards);
    return cards;
  }

  function appendCardsToDOM(cards) {
    cards = randomize(cards);
    for (let i = 0; i < cards.length; i++) {
      let el = document.createElement("li");
      el.classList.add("card");
      el.setAttribute("id", `card-${cards[i].id}`);
      el.setAttribute('data-match', `card-${cards[i].pair}`)
      let cover = document.createElement("div");
      let back = document.createElement("div");
      cover.classList.add("cover");
      // cover.innerHTML = "<img src='/owls.png' alt='owls'>";
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
      let random = Math.floor(Math.random() * Math.floor(startLength - 1));
      let element = arr.splice(random, 1);
      arr.push(...element);
      counter++;
    }
    return arr;
  }

  return makeCards(num);
}

export default Board;
