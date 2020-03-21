import * as Euclidean from '../mathematics/EuclideanCalculator';
import * as NumeralHandler from '../mathematics/NumeralHandler';

export {
    Trapdoor
}

class Trapdoor
{
    constructor() {
        this.p = [0, 0];
        this.phi = 0;
        this.n = 0;
        this.e = 0;
        this.d = 0;
        this.cryptoKey = {};
        this.regenerate();
    }

    /**
     * Regenerate the trapdoor's values.
     */
    regenerate() {
        this.p = this.generatePrimes(1024);

        //calculate n and phi of n
        this.n = this.p[0] * this.p[1];
        this.phi = (this.p[0] - 1) * (this.p[1] - 1);

        //choose a legal factor
        this.e = this.generateE(this.phi);

        //calculate the d factor
        this.d = this.calculateD(this.phi, this.e)
    }

    /**
     * Calculate the trapdoor's d value.
     * 
     * @param {Number} phi - Euler's totient function on n
     * @param {Number} e - The trapdoor's e value
     * @returns {Number} The trapdoor's d value.
     */
    calculateD(phi, e) {
        for (let k = 1; k <= e; k++) {
            let kTest = (k * phi + 1) / e;
            if (Number.isInteger(kTest)) return kTest;
        }
    }

    /**
     * Generate 2 random prime numbers.
     * 
     * @param {Number} n - The scoped range within which the primes are generated
     * @returns {Array} An array with 2 prime numbers.
     *                  If no 2 prime numbers could be found,
     *                  They will be replaced with undefined values.
     */
    generatePrimes(n) {
        let primes = Euclidean.primeList(n / 2, n * 2);
        let randomIndex1 = NumeralHandler.rng(0, primes.length);
        let prime1 = primes[randomIndex1];

        let randomIndex2 = undefined;
        do randomIndex2 = NumeralHandler.rng(0, primes.length);
        while (primes.length > 1 && randomIndex2 === randomIndex1);
        let prime2 = primes[randomIndex2];

        return [prime1, prime2];
    }

    /**
     * Generate a random compatible e value.
     * 
     * @param {Number} phi - Euler's totient function on n
     * @returns {Number} The trapdoor's e value.
     */
    generateE(phi) {
        let e = 3;
        while (e % 2 === 0 || !Euclidean.isPrime(e) || phi % e === 0) e++;
        return e;
    }

    /**
     * Set an encrypter key for the trapdoor's user.
     * The encrypter key should be the public key of the message sender,
     * whose message needs to be read by the user.
     * 
     * @param {Object} key - A key containing 'e' and 'n' values
     */
    setCryptoKey(key) {
        this.cryptoKey = key;
    }

    /**
     * @returns {Object} The user's public key, containing 'e' and 'n' values.
     */
    getPublicKey() {
        return {
            e: this.e,
            n: this.n
        }
    }
}