import icons from "./icons";
export default function makeBoard(num) {
  const app = document.getElementById("app");
  const board = document.createElement("ul");
  board.classList.add("board");
  app.appendChild(board);
  console.log(icons);

  for (let i = 0; i < icons.length; i++) {
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
}
