import board from "./Board";
import UI from "./UI";

const gameSate = {
  score: 0,
  cardFlips: 0,
  time: 0,
  level: 1,
  cards: [],
  start() {
    console.log("started");
    this.cards = board(6);
    UI.addUIEventListeners();
  },
  updateCardFlips() {
    this.cardFlips++;
  },
};

export default gameSate;
