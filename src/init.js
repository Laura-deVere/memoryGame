import game from "./gameState";

const startBTN = document.getElementById("game-start");
startBTN.addEventListener("click", function () {
  init();
});
function init() {
  console.log("start");
  startBTN.remove();
  game.start();
}
