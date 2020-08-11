import board from "./Board";

const gameSate = {
  score: 0,
  cardFlips: 0,
  time: 0,
  level: 1,
  cards: [],
  start() {
    console.log("started");
    this.cards = board(4);
  },
};

export default gameSate;
