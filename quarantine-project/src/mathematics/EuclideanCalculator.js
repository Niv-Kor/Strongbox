export {
    simpleSieve,
    primeList,
    isPrime
}

/**
 * Finds all prime numbers smaller than a given limit.
 * 
 * @param {Number} limit - Maximum number of the range (inclusive)
 * @returns {Array} A list of prime numbers under the specified limit.
 */
function simpleSieve(limit) {
    let primes = [];
    let mark = new Array(limit + 1).fill(false);

    for (let i = 2; i < limit + 1; i++) {
        //if not marked yet, then it's a prime
        if (!mark[i]) {
            primes.push(i);

            for (let j = i; j < limit + 1; j += i)
                mark[j] = true;
        }
    }

    return primes;
}

/**
 * Get all prime numbers within a range,
 * using the segemented sieve algorithm.
 * 
 * @param {Number} min - Minimum number of the range (inclusive)
 * @param {Number} max - Maximum number of the range (inclusive)
 * @returns {Array} A list of prime numbers within the specified range.
 */
function primeList(min, max) {
    let limit = Math.floor(Math.sqrt(max)) + 1;
    let primes = simpleSieve(limit);
    let n = max - min + 1;
    let mark = new Array(n + 1).fill(false);

    //use the found primes by simpleSieve to find primes in given range
    for (let i = 0; i < primes.length; i++) {
        //find the minimum number in the range that is a multiple of prime[i] (divisible by prime[i])
        let minLim = Math.floor(min / primes[i]) * primes[i];

        if (minLim < min) minLim += primes[i];
        if (minLim === primes[i]) minLim += primes[i];

        for (let j = minLim; j < max + 1; j += primes[i])
            mark[j - min] = true;
    }

    //numbers which are not marked in range are prime
    let rangesPrimes = [];
    for (let i = min; i < max + 1; i++)
        if (!mark[i - min])
            rangesPrimes.push(i);

    return rangesPrimes;
}

/**
 * Check if a number is a prime number.
 * 
 * @param {Number} num - The number to check
 * @returns {Boolean} True of the number is prime.
 */
function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i < num / 2; i++)
        if (!(num % i)) return false;

    return true;
}