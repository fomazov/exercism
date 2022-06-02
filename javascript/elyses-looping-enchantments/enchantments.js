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
  const rs = [];
  stack.forEach((value) => {
    if (value === card) rs.push(value);
  });
  return rs.length;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  const rs = [];
  const countOnlyEven = type;
  const countOnlyOdd = !countOnlyEven;
  const isEven = (card) => card % 2 === 0;
  const isOdd = (card) => !isEven(card);

  for (const card of stack) {
    if (countOnlyEven && isEven(card)) {
      rs.push(card);
    } else if (countOnlyOdd && isOdd(card)) {
      rs.push(card);
    }
  }
  return rs.length;
}
