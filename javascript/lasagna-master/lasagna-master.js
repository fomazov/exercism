/// <reference path="./global.d.ts" />
// @ts-check

export function cookingStatus(time) {
  if (time === 0) return 'Lasagna is done.';
  return time ? 'Not done, please wait.' : 'You forgot to set the timer.';
}

export function preparationTime(layers, time = 2) {
  return layers.length * time;
}

export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;
  for (let layer in layers) {
    if (layers[layer] === 'noodles') noodles += 50;
    if (layers[layer] === 'sauce') sauce += 0.2;
  }
  return { noodles, sauce };
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe1, scale) {
  let recipe2 = {};
  for (let [key, value] of Object.entries(recipe1)) {
    recipe2[key] = (value / 2) * scale;
  }
  return recipe2;
}
