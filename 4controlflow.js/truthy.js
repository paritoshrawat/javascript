// truthy and falsy we assume the value is true or fallse

// falsy values

// false,0,-0,BigInt 0n, null, undefined, "",Nan

// checking if array is emty

const emp = [];

if (emp.length === 0) {
  //   console.log("array is emty");
}

// checking object is empty or not

const user = {};
// Object.keys(user) // it gives array of keys
if (Object.keys(user).length === 0) {
  //   console.log("object is empty");
}

// nullish coelescing operator (??): it many depend on null and undeifned

let val;
// val = 5 ?? 10; // 5

val = null ?? 10; // 10

console.log(val);

// trnoray operator

// condition ? true: flase
