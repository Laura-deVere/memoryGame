import game from "./gameState";
import board from "./Board";

const startBTN = document.getElementById("game-start");
startBTN.addEventListener("click", function () {
  init();
});
function init() {
  console.log("start");
  startBTN.remove();
  board(4);
}
