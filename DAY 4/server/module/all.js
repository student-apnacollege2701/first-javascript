function iseven(a) {
  if (a % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

function isodd(a) {
  if (a % 2 != 0) {
    console.log("odd number");
  } else {
    console.log(" not odd number");
  }
}

function isprime(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      count++;
    }
    if (count == 2) {
      console.log(n, "is prime");
    }
  }
}
module.exports = { feven: iseven, fodd: isodd, fprime: isprime };
