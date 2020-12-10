import GameState from './gameState';

const UI = {
  flippedCards: [],
  currentCardToMatch: null,
  cardFlippedCount: 0,
  totalCardsFlippedCount: 0,

  addUIEventListeners() {
    const cards = document.querySelectorAll(".card");
    const resetButton = document.getElementById('game-reset');

    // Cards
    cards.forEach((element) => {
      element.addEventListener("click", (event) => {
        console.log(this.cardFlippedCount)
        if (this.cardFlippedCount < 2) {
          this.updateCardFlippedCount();
          this.handleCardClick(element, event.target.id);
        }
      });
    });

    // Reset Button
    resetButton.addEventListener('click', (event) => {
      GameState.resetGame()
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
      this.clearCurrentCardToMatch();
    } else {
      this.triggerCardTurn(boardIds);
    }
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
    const callback = this.clearCurrentCardToMatch.bind(this);
    setTimeout(function () {
      cards.forEach(card => {
        let current = document.getElementById(card).nextSibling;
        current.classList.toggle("flip-card-back");
      });
      callback();
    }, 1000);
  }
};

export default UI;

