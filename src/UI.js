const UI = {
  flippedCards: [],
  currentCardToMatch: null,
  cardFlippedCount: 0,
  totalCardsFlippedCount: 0,

  addUIEventListeners() {
    const cards = document.querySelectorAll(".card");
    cards.forEach((element) => {
      element.addEventListener("click", (event) => {
        if (this.cardFlippedCount < 2) {
          this.updateCardFlippedCount();
          this.handleCardClick(element, event.target.id);
        }
      });
    });
  },

  updateCardFlippedCount() {
    this.cardFlippedCount++;
    this.updateTotalCardsFlippedCount();
  },

  updateTotalCardsFlippedCount() {
    this.totalCardsFlippedCount++;
    const el = document.getElementById('card-flips');
    el.textContent = this.totalCardsFlippedCount;
  },

  handleCardClick(element, targetId) {
    let currentCard = {
      id: element.id,
      match: element.getAttribute('data-match'),
      boardId: targetId
    };
    if (!this.currentCardToMatch) {
      this.currentCardToMatch = currentCard;
    } else {
      this.checkIfCardMatched(currentCard);
    }
    this.triggerCardFlip(targetId);
  },

  checkIfCardMatched(card) {
    const cardIds = [card.id, this.currentCardToMatch.id];
    const boardIds = [card.boardId, this.currentCardToMatch.boardId];
    if (this.currentCardToMatch.id === card.match) {
      this.flippedCards.push([...cardIds]);
    } else {
      this.triggerCardTurn(boardIds);
    }
    this.clearCurrentCardToMatch();
  },

  clearCurrentCardToMatch() {
    this.currentCardToMatch = null;
    this.cardFlippedCount = 0;
  },

  triggerCardFlip(id) {
    const selectedCard = document.getElementById(id);
    let flip = selectedCard.nextSibling;
    flip.classList.toggle("flip-card-back");
  },

  triggerCardTurn(cards) {
    setTimeout(function () {
      cards.forEach(card => {
        let current = document.getElementById(card).nextSibling;
        current.classList.toggle("flip-card-back");
      });
    }, 1000);

  }
};

export default UI;

