function arraysum(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  console.log(sum);
}
arraysum([1, 2, 3, 4, 5, 6]);
arraysum([3, 6, 7, 2, 1, 9, 8, 4]);
