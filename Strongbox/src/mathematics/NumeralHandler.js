export {
    zeroPadding,
    rng,
    powerMod
}

/**
 * Pad a number with zeros to its left.
 * 
 * @param {Number} num - The number to shift
 * @param {Number} len - The length of the number after the padding
 * @returns {String} A string representation of the number, with zeros from its left.
 */
function zeroPadding(num, len) {
    let numStr = '' + num;
    let digits = numStr.length;
    let result = numStr;

    for (let i = 0; i < len - digits; i++)
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

/**
 * Perform a power modulu operation.
 * This algorithm is faster than the basic language tools for such operation.
 * 
 * @param {Number} base - Base number
 * @param {Number} exp - An exponent
 * @param {Number} mod - A modulu value
 * @returns {Number} base ^ exponent % modulu .
 */
function powerMod(base, exp, mod) {
    if (mod === 1) return 0;

    let result = 1;
    base %= mod;

    while (exp > 0) {
        if (exp % 2 === 1) result = (result * base) % mod;
        exp >>= 1;
        base = Math.pow(base, 2) % mod;
    }

    return result;
}