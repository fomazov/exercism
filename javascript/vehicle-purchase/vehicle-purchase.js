// @ts-check

/**
 * Determines whether or not you need a licence to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  const allowed = ['car', 'truck'];
  return allowed.includes(kind);
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  const isFirstOptionShouldBeFirst = option1 < option2;
  const resultOption = isFirstOptionShouldBeFirst ? option1 : option2;
  return `${resultOption} is clearly the better choice.`;
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  let result;
  if (age > 1 && age < 3) {
    result = originalPrice - originalPrice * 0.2;
  } else if (age >= 3 && age <= 10) {
    result = originalPrice - originalPrice * 0.3;
  } else if (age > 10) {
    result = originalPrice - originalPrice * 0.5;
  }
  return result;
}
