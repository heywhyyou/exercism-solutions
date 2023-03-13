// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  // let num = 0;
  // stack.forEach((cards) => (cards === card ? num++ : ""));
  // return num;
  //
  // Using .filter() method instead of .forEach():
  const counter = stack.filter((type) => type === card);
  return counter.length;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let num = 0;
  if (type) {
    for (const card of stack) {
      card % 2 === 0 ? num++ : "";
    }
  } else {
    for (const card of stack) {
      card % 2 !== 0 ? num++ : "";
    }
  }
  return num;
}
