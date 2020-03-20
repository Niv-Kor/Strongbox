/**
 * Shift a number to the right and pad it with zeros.
 * 
 * @param {Number} num - The number to shift
 * @param {Number} places - Amount of rigft shifts (zeros from the left)
 * @returns {String} A string representation of the number, with zeros from its left.
 */
function shiftRight(num, places) {
    let numStr = '' + num;
    let result = numStr;

    for (i = 0; i < places; i++)
        result = '0' + result;

    return result;
}