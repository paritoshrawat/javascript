const marvl = ["spiderman", "ironman", "thor"];
const Dc = ["superman", "greenlntern", "robin"];
const allheroes = marvl.concat(Dc); // concat doesnot modify the original array we neeed another variable for both array

// console.log(allheroes);

// marvl.push(Dc); //push change the original array
// console.log(marvl);

const array = [1, 3, 5, [56, 23, [2, 5, [8, 7], 7, 9], 7, [3]]];

const newarray = array.flat(3);

// console.log(newarray);

console.log(Array.from({ name: "hitesh" }));
