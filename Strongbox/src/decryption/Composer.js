import * as Codec from './Codec';
import * as Encrypter from './Encrypter';

export {
    compose,
    decompose
}

/**
 * Compose a message before sending it.
 * 
 * @param {String} msg - The message to compose
 * @param {UserProfile} sender - Profile of the message sender
 * @returns {Object} The encrypted message.
 */
function compose(msg, sender) {
    let encoded = Codec.encode(msg);
    let encrypted = Encrypter.encrypt(encoded, sender.door);
    encrypted.sender = (sender.name);
    return encrypted;
}

/**
 * Decompose a message after receiving it.
 * 
 * @param {Object} msg - The encrypted message to decompose
 * @param {UserProfile} receiver - Profile of the message receiver
 * @returns {String} The decrypted source message.
 */
function decompose(msg, receiver) {
    let decrypted = Encrypter.decrypt(msg, receiver.door);
    let decoded = Codec.decode(decrypted);
    receiver.door.setEncrypterKey(msg.publicKey);
    return decoded;
}