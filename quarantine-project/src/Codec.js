import NumeralHandler from './NumeralHandler'

/**
 * Encode a message.
 * E.g:
 *      in: 'Hello World!'
 *      out: ['072', '101', '108', '108', '111', '032', '087', '111', '114', '108', '100', '033']
 * 
 * @param {String} msg - The message to encode
 * @returns {Array} An array of the message, having the ASCII value of each character as an item.
 */
function encode(msg) {
    let decimalList = [];

    for (let i in msg) {
        let charCode = msg.charCodeAt(i);
        let len = ('' + charCode).length;
        decimalList.push(NumeralHandler.shiftRight(charCode, 3));
    }

    return decimalList;
}

/**
 * Convert a list of integers (8bit) to a string of characters.
 * E.g:
 *      in: ['072', '101', '108', '108', '111', '032', '087', '111', '114', '108', '100', '033']
 *      out: 'Hello World!'
 * 
 * @param {Array} msg - The message to decode
 * @returns {String} A string representation of the encoded array.
 */
function decode(msg) {
    let charString = '';

    for (let i in msg)
        charString += String.fromCharCode(msg[i]);

    console.log('str: ' + charString);
    return charString;
}