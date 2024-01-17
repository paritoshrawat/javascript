// for of

// ["", "", ""]

// [({}, {}, {})];

// let arr = ["superman", "spiderman", "batman", "hulk"];

// for (const val of arr) {
//   //   console.log(val);
// }

// let greetings = "how are you";

// for (const greet of greetings) {
//   if (greet === " ") {
//     // console.log("continue");
//     continue; // Skip the space and go to the next iteration
//   }
//   console.log(`for of greeting ${greet}`);
// }

// 888888888888888888888  Map 9999999999999999999999999999999

const map = new Map();
map.set("IN", "India");
map.set("usa", "america");
map.set("uae", "arabia");
map.set("swt", "switzerland");
// map.set("usa", "america");
// map.set("usa", "united states"); new value is placed the that is writen last
// we cannot use same key if the same key is use again then  last key is used

// console.log(map);

for (const [key, value] of map) {
  console.log(key);
  // return key; first value
}

// in object

// const user = {
//   game: "tekken",
//   name2: "red dead redemption 2",
// };

// for (const [key] of user) {
//   //   console.log(key); it is not iterable
// }
