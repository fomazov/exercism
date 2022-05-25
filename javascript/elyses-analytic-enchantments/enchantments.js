// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Get the position (index) of the card in the given stack
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} position of the card in the stack
 */
export function getCardPosition(stack, card) {
  return stack.indexOf(card);
}

/**
 * Determine if the stack contains the card
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {boolean} true if card is in the stack, false otherwise
 */
export function doesStackIncludeCard(stack, card) {
  return stack.includes(card);
}

/**
 * Determine if card is even
 *
 * @param {number} card
 *
 * @returns {boolean} true if card is even, false otherwise
 */
const even = (card) => card % 2 === 0;

/**
 * Determine if card is odd
 *
 * @param {number} card
 *
 * @returns {boolean} true if card is odd, false otherwise
 */
const odd = (card) => !even(card);

/**
 * Determine if each card is even
 *
 * @param {number[]} stack
 *
 * @returns {boolean} true if all cards are even, false otherwise
 */
export const isEachCardEven = (stack) => stack.every(even);

/**
 * Check if stack contains odd-value card
 *
 * @param {number[]} stack
 *
 * @returns {boolean} true if the array contains odd card, false otherwise
 */
export const doesStackIncludeOddCard = (stack) => stack.some(odd);

/**
 * Get the first odd card from the stack
 *
 * @param {number[]} stack
 *
 * @returns {number} the first odd value
 */
export const getFirstOddCard = (stack) => stack.find(odd);

/**
 * Determine the position of the first card that is even
 *
 * @param {number[]} stack
 *
 * @returns {number} position of the first card that is even
 */
export const getFirstEvenCardPosition = (stack) => stack.findIndex(even);
