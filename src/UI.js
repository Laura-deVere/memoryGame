const UI = {
  createGameStateUI() {},
  addUIEventListeners() {
    const cards = document.querySelectorAll(".card");
    cards.forEach((element) => {
      element.addEventListener("click", (event) => {
        console.log(element.id);
        this.triggerCardFlip(event.target.id);
      });
    });
  },
  triggerCardFlip(id) {
    const selectedCard = document.getElementById(id);
    // const children = selectedCard.children;
    console.log(selectedCard.nextElementSibling);
    // selectedCard.classList.add("flip-card-cover");
    // // selectedCard.nextSibling.classList.add("lip-card-back");
    let flip = selectedCard.nextSibling;
    flip.classList.toggle("flip-card-back");
    setTimeout(function () {
      flip.classList.toggle("flip-card-back");
    }, 3000);
  },
  getCurrentCards() {},
};

export default UI;

// UI should register each card click
// UI should find both cards with turned class and return their ids and pair
// UI should trigger card flip animation
