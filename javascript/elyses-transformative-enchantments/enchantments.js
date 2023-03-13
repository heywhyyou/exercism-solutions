// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  return deck.map((value) => value * 2);
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  const tripleTheThrees = (acc, currentValue) => {
    if (currentValue === 3) {
      acc.push(currentValue);
      acc.push(currentValue);
      acc.push(currentValue);
    } else {
      acc.push(currentValue);
    }
    return acc;
  };

  return deck.reduce(tripleTheThrees, []);
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  deck.splice(0, 4);
  deck.splice(2, 4);
  return deck;
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  const lastCard = deck.pop();
  const firstCard = deck.shift();
  deck.splice(deck.length / 2, 0, lastCard, firstCard);
  return deck;
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  const pushTwos = (acc, currentValue) => {
    if (currentValue === 2) {
      acc.push(currentValue);
    }
    return acc;
  };
  return deck.reduce(pushTwos, []);
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  return deck.sort((a, b) => a - b);
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  throw new Error("Implement the reorder function");
}
