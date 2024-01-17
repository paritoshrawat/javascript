// const coding = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const allnum = coding.map((num) => num + 20);
// // const allnum = coding.map((num) => num > 2); // true false

// console.log(allnum);

const coding = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const chaining = coding
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 50);

console.log(chaining);
