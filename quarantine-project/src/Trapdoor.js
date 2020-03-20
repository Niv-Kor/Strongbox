import Euclidean from './EuclideanCalculator'
import NumeralHandler from './NumeralHandler'

class Trapdoor
{
    constructor() {
        this.encrypterKey = null;
        this.p = (0, 0);
        this.phi = 0;
        this.n = 0;
        this.e = 0;
        this.d = 0;
        this.regenerate();
    }

    regenerate() {
        this.p = this.generatePrimes(256);

        //calculate n and phi of n
        this.n = this.p[0] * this.p[1];
        this.phi = (this.p[0] - 1) * (this.p[1] - 1);

        //choose a legal factor
        this.e = this.generateE(this.phi);

        //calculate the d factor
        this.d = this.extendedEuclidean(phi, e);
    }

    extendedEuclidean(phi, e) {
        let first = [phi, e];
        let second = [phi, 1];

        while (true) {
            let quotient = parseInt((parseInt(first[0])) / parseInt(first[1]));
            let firstFormula = first[0] - first[1] * quotient;

            if (firstFormula < 0)
                firstFormula %= phi;

            let secondFormula = second[0] - second[1] * quotient;
            
            if (secondFormula < 0)
                secondFormula %= phi;

            if (firstFormula === 1)
                return secondFormula;

            first[0] = first[1];
            second[0] = second[1];
            first[1] = firstFormula;
            second[1] = secondFormula;
        }
    }

    generatePrimes(n) {
        let primeList = Euclidean.primeList(n / 2, n * 2);
        let randomIndex = NumeralHandler.rng(0, primeList.length)
        let prime1 = primeList[randomIndex];
        primeList.delete[randomIndex];
        randomIndex = NumeralHandler.rng(0, primeList.length)
        let prime2 = primeList[randomIndex];

        return (prime1, prime2);
    }

    generateE(phi) {
        let e = 3;

        while (e % 2 === 0 || !Euclidean.isPrime(e) || phi % e === 0)
            e++;

        return e;
    }

    setEncrypterKey(encKey) {
        this.encrypterKey = encKey;
    }

    getPublicKey() {
        return (this.n, this.e);
    }
}