import Board from "./Board";
import CountdownTimer from './CountdownTimer';
import UI from "./UI";

const GameSate = {
  score: 0,
  timer: null,
  level: 1,
  game: null,
  start() {
    console.log("Game started!");
    this.game = new Board(6);
    UI.addUIEventListeners();
    this.initTimer();
  },
  resetGame() {
    this.timer.clearCountdown();
    this.game = new Board(6);
    this.score = 0;
    this.level = 1;
    this.updateGameOnWin(0);
    this.initTimer();
  },
  initTimer() {
    this.timer = CountdownTimer();
    this.timer.countdown();
  },
  updateGameOnWin(numOfCards) {
    this.timer.clearCountdown();
    this.calculateScore(numOfCards)
  },
  calculateScore(numOfCards) {
    let total = numOfCards * 100;
    UI.updateScore(total);
  }
};

export default GameSate;
