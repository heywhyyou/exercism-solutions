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

  // return stack.filter((type) => type === card).length;

  // Making use of && instead of ?:
  let counter = 0;
  stack.forEach((oneCard) => oneCard === card && counter++);
  return counter;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
// Old solution:

// export function determineOddEvenCards(stack, type) {
//   let num = 0;
//   if (type) {
//     for (const card of stack) {
//       card % 2 === 0 ? num++ : "";
//     }
//   } else {
//     for (const card of stack) {
//       card % 2 !== 0 ? num++ : "";
//     }
//   }
//   return num;
// }

// Fancy .filter() solution:

export function determineOddEvenCards(stack, type) {
  return stack.filter((card) => {
    if (type && card % 2 === 0) return card;
    if (!type && card % 2 !== 0) return card;
  }).length;
}
