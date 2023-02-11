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

export function quantities(layers) {
  const ingNeeded = { noodles: 0, sauce: 0 };
  for (let i = 0; i < layers.length; i++) {
    if (layers[i] === "noodles") {
      ingNeeded.noodles += 50;
    } else if (layers[i] === "sauce") {
      ingNeeded.sauce += 0.2;
    }
  }
  return ingNeeded;
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, portions) {
  const newRecipe = recipe;
  for (let key in newRecipe) {
    newRecipe[key] = (newRecipe[key] / 2) * portions;
  }
  return newRecipe;
}

/* 

portions in recipe: 2
portions in recipeOne: 1
recipeOne = 0.5 * recipe

*/
