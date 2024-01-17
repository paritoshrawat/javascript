const user = {
  name: "paritosh",
  age: 25,
  welcomemessage: function () {
    // console.log(`${this.name},welcome to website`);
    // console.log(this);// current object
  },
};

// user.welcomemessage();
// user.name = "man";
// user.welcomemessage();
// console.log(this); // empty object

function one() {
  let username = "hey";
  //   console.log(this); // global object
  //   console.log(this.username); //undefined this doesnot work on function
}
// it does not work on function exprssion and simple function function ae like function that are sued in variables

one();

const two = () => {
  console.log(this); // empty object
};

two();
