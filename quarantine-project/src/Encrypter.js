import NumeralHandler from './NumeralHandler'

function encrypt(msg, trapdoor) {
    let string = '';
    let maxDigits = 1;
    let encObj = {
        encryption: '',
        publicKey: 0
    };

    if (msg.length) {
        //encrypt all items in the message
        for (let i = 0; i < msg.length; i++) {
            msg[i] = Math.pow(parseInt(msg[i]), trapdoor.encrypterKey[1]) % trapdoor.encrypterKey[0];
            let mDigits = msg[i].length;

            if (mDigits > maxDigits) maxDigits = mDigits;
        }

        //concat all encrypted items into a string
        for (let i = 0; i < msg.length; i++) {
            let numLength = ('' + parseInt(msg[i])).length;
            let m = NumeralHandler.shiftRight(parseInt(msg[i]), maxDigits);
            string += m;
        }

        //insert header info
        string = NumeralHandler.shiftRight(maxDigits, 3) + string;
        encObj.encryption = string;
    }

    //insert new public key
    encObj.publicKey = trapdoor.getPublicKey();

    return encObj;
}

function decrypt(msg, trapdoor) {
    let decObj = {
        decryption: [],
        encryption: msg[1],
        publicKey: msg[2]
    };

    if (msg[0]) {
        let blockSize = parseInt(msg[0].substr(0, 3));

        //create a list of encrypted integers, using the first item in the message
        for (let i = 3; i < msg[0].length; i += blockSize) {
            let block = msg[0].substr(i, i + blockSize);
            decObj.decryption.push(block);
        }

        //decrypt the integers back to normal using the decryptor key
        for (let i = 0; i < decObj.decryption.length; i++)
        decObj.decryption[i] = Math.pow(parseInt(decObj.decryption[i]), trapdoor.d) % trapdoor.n;

        decObj.decryption = decList;
        return decObj;
    }
}