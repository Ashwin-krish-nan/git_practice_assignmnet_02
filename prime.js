//Problem 3: Use the same function to print Non-Primes from 2 to a given limit
fon findPrime(num) {
  let factors = 0;
  for (i = 1; i <= num; i++) {
    if (num % i == 0) {
      factors++;
    }
  }
  if (factors == 2) {
    return true;
  }
  return false;
}

