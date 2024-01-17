function addtwonumber(num1, num2) {
  //   console.log(num1 + num2);
  const ans = num1 + num2;
  // console.log("hey");
  return ans;
}

const result = addtwonumber(2, 4);
// console.log(result);

function loginuser(username) {
  return `${username} has logged in`;
}

// console.log(loginuser("paritosh"));

function cart(...num) {
  return num;
}

// console.log(cart(2, 4, 5, 6, 7));

const user = {
  name: "paritosh",
  age: 26,
};

function paramet(anyobject) {
  console.log(`name is :${anyobject.name} age is ${anyobject.age}`);
}

// paramet(user);

const newarray = [200, 400, 500, 700];

function returnvalue(anyarray) {
  return anyarray[1];
}

console.log(returnvalue(newarray));
