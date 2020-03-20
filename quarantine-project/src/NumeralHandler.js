/**
 * Shift a number to the right and pad it with zeros.
 * 
 * @param {Number} num - The number to shift
 * @param {Number} places - Amount of rigft shifts (zeros from the left)
 * @returns {String} A string representation of the number, with zeros from its left.
 */
function shiftRight(num, places) {
    let numStr = '' + num;
    let digits = numStr.length;
    let result = numStr;

    for (i = 0; i < places - digits; i++)
        result = '0' + result;

    return result;
}

/**
 * Generate a random number within a range.
 * 
 * @param {Number} from - Minimum number in the range (inclusive)
 * @param {Number} to - Maximum number in the range (inclusive)
 * @returns {Number} A random number within the range.
 */
function rng(from, to) {
    return Math.floor(Math.random() * to) + from;
}