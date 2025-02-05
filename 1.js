function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

for (let i = 2; i <= 20; i++) {
    console.log('number =', i, 'is prime =', isPrime(i));
}
