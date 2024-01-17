if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}
// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "hitesh";

  function two() {
    const website = "ypotube";
    // console.log(username);
    // console.log(website);
  }
  two();
}
one();

// function expression

console.log(addone(5)); // here we can access
function addone(num) {
  return num + 1;
}

// console.log(add(7)); // here we can no tacces earlier beacuse of hoisting
const add = function addtwo(num) {
  return num + 2;
  //   even if we use var we vcannot access it
};

console.log(add(7));
