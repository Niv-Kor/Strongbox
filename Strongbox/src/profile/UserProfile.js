import { Trapdoor } from '../decryption/Trapdoor'

export {
    UserProfile
}

class UserProfile
{
    /**
     * @param {String} name - User's nickname
     */
    constructor(name) {
        this.name = name;
        this.door = new Trapdoor();
    }
}