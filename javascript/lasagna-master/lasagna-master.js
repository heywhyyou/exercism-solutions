/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timer) {
  if (timer > 0) {
    return "Not done, please wait.";
  } else if (timer === 0) {
    return "Lasagna is done.";
  } else {
    return "You forgot to set the timer.";
  }
}

export function preparationTime(layers, minutes = 2) {
  let prepTime = 0;
  for (let i = 0; i < layers.length; i++) {
    prepTime += minutes;
  }
  return prepTime;
}
