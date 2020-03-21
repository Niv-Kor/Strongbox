import * as NumeralHandler from '../mathematics/NumeralHandler'

export {
    encrypt,
    decrypt
}

/**
 * Encrypt an encoded message.
 * 
 * @param {Array} msg - Encoded message
 * @param {Trapdoor} trapdoor - The encrypter's trapdoor
 * @returns {Object} An object containing the encrypted message,
 *                   and some of the tools needed to decrypt it.
 */
function encrypt(msg, trapdoor) {
    let string = '';
    let maxDigits = 1;
    let encObj = {
        message: '',
        blockLen: '',
        publicKey: {}
    };

    if (msg.length) {
        //encrypt all items in the message
        for (let i = 0; i < msg.length; i++) {
            msg[i] = NumeralHandler.powerMod(parseInt(msg[i]), trapdoor.cryptoKey.e, trapdoor.cryptoKey.n);
            let mDigits = ('' + msg[i]).length;

            if (mDigits > maxDigits) maxDigits = mDigits;
        }

        //concat all encrypted items into a string
        for (let i = 0; i < msg.length; i++) {
            let m = NumeralHandler.zeroPadding(parseInt(msg[i]), maxDigits);
            string += m;
        }
        
        //insert header info
        encObj.message = string;
        encObj.blockLen = maxDigits;
    }

    encObj.publicKey = trapdoor.getPublicKey();
    return encObj;
}

/**
 * Decrypt an encrypted message.
 * 
 * @param {Object} msg - Encrypted message
 * @param {Trapdoor} trapdoor - The decrypter's trapdoor
 * @returns {Array} An encoded message, needed to be decoded in order to read.
 */
function decrypt(msg, trapdoor) {
    let src = msg.message;
    let decryption = [];

    if (src) {
        //create a list of encrypted integers, using the first item in the message
        for (let i = 0; i < src.length; i += msg.blockLen) {
            let block = src.substring(i, i + msg.blockLen);
            decryption.push(block);
        }

        //decrypt the integers back to normal using the decryptor key
        for (let i = 0; i < decryption.length; i++) {
            let powmodRes = NumeralHandler.powerMod(parseInt(decryption[i]), trapdoor.d, trapdoor.n);
            decryption[i] = powmodRes;
        }

        return decryption;
    }
}