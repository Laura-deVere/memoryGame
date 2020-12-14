import Board from "./Board";
import CountdownTimer from './CountdownTimer';
import UI from "./UI";

const GameSate = {
  points: 0,
  timer: null,
  level: 0,
  game: null,
  start() {
    console.log("Game started!");
    this.levelUp();
    this.initTimer();
    this.game = new Board(this.level);
    UI.addUIEventListeners();
  },
  resetGame() {
    this.timer.clearCountdown();
    this.points = 0;
    this.level = 1;
    this.game = new Board(this.level);
    this.updateGameOnWin(0);
    this.initTimer();
  },
  initTimer() {
    this.timer = CountdownTimer();
    this.timer.countdown();
  },
  updateGameOnWin(numOfCards) {
    this.timer.clearCountdown();
    this.calculatePoints(numOfCards);
    this.levelUp();
    this.game = new Board(this.level);
    UI.addUIEventListeners();
    UI.clearSuccessMessage();
    this.initTimer();
  },
  calculatePoints(numOfCards) {
    let total = numOfCards * 100;
    UI.updatePoints(total);
  },
  levelUp() {
    this.level++;
    UI.updateLevel(this.level);
  }
};

export default GameSate;
