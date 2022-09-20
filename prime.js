//Problem 3: Use the same function to print Non-Primes from 2 to a given limit

function findPrime(num) {
  let count = 0;
  for (i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    return true;
  }
  return false;
}

