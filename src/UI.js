import GameState from './gameState';

const UI = {
  flippedCards: [],
  totalCards: 0,
  currentCardToMatch: null,
  cardFlippedCount: 0,
  totalCardsFlippedCount: 0,

  addUIEventListeners() {
    const cards = document.querySelectorAll(".card");
    this.totalCards = cards.length / 2;
    this.makeResetButton();
    // Cards
    cards.forEach((element) => {
      element.addEventListener("click", (event) => {
        if (this.cardFlippedCount < 2) {
          this.updateCardFlippedCount();
          this.handleCardClick(element, event.target.id);
        }
      });
    });
  },

  makeResetButton() {
    const container = document.querySelector('.game-state');
    let button = document.getElementById('game-reset');

    if (!button) {
      button = document.createElement('button');
      button.textContent = 'Reset Game';
      button.setAttribute('id', 'game-reset')
      container.appendChild(button);
    }

    button.addEventListener('click', (event) => {
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
      if (this.totalCards === this.flippedCards.length) {
        console.log('Game Won!');
        this.handleGameWin();
      }
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
  },

  handleGameWin() {
    this.updateSuccessMessage(true);
    this.resetCardState()
    setTimeout(() => {
      GameState.updateGameOnWin(this.totalCards * 2);
    }, 1000);
  },

  updateSuccessMessage(gameWon) {
    const message = document.getElementById('game-success');
    if (gameWon) {
      message.textContent = 'Yay, you won!!!';
    } else {
      message.textContent = "It's ok to finally, pick yourself and try again";
    }
  },

  resetCardState() {
    this.flippedCards = [];
    this.currentCardToMatch = null;
    this.cardFlippedCount = 0;
    this.totalCardsFlippedCount = 0;
  },

  clearSuccessMessage() {
    const message = document.getElementById('game-success');
    message.textContent = '';
  },

  updatePoints(points) {
    const currentPoints = document.getElementById('points');
    currentPoints.textContent = points;
  },

  updateLevel(level) {
    const container = document.getElementById('level');
    container.textContent = level;
  }
};

export default UI;

