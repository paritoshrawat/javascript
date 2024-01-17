// singleton
const users = new Object(); // singlton object
// Object.create(); // by this constructor method we can make singleton

// Object literals

const mysm = Symbol("key");

const user = {
  name: "paritosh",
  [mysm]: "key2",
  age: 26,
  greet: function () {
    console.log("yo");
  },
  roll: "Ranger",
  logged: false,
  day: ["monday", "tuesday"],
};

// console.log(user.day);
// console.log(typeof user[mysm]);
// Object.freeze(user);
// user.logged = true;
// console.log(user);

user.greeting = function () {
  console.log("hello hey");
};

// user.greet();

console.log(user.greeting());
