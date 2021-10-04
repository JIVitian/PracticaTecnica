function isPrime(number) {
  for (let i = 2; i < number; i++) if (number % i === 0) return false;
  // If the number is less than 1, then is not prime
  return number > 0 ? true : false;
}
