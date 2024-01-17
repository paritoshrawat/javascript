const tinderuser = {
  age: 21,
  fullname: {
    userfullname: {
      firstname: "paritosh",
      lastname: "rawat",
    },
  },
  hobby: "movie",
};
// console.log(tinderuser.fullname.userfullname.firstname);
// console.log(Object.keys(tinderuser));
// console.log(Object.entries(tinderuser));

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

const obj3 = Object.assign({}, obj1, obj2);

// console.log(obj3);

const user = [
  {
    name: "paritosh",
    id: 1,
  },
  {
    name: "paritos2",
    id: 2,
  },
  {
    name: "paritosh3",
    id: 3,
  },

  {
    name: "paritosh4",
    id: 4,
  },
];

// console.log(user[3].id);

const course = {
  name: "javascript",
  price: 999,
  courseinstructor: "hitesh",
};

const { courseinstructor: instructor } = course;
// console.log(courseinstructor);
console.log(instructor);
