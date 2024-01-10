//Dates

let myDates = new Date();
console.log(myDates.toString());
console.log(myDates.toLocaleDateString());
console.log(myDates.toUTCString());
console.log(myDates.toLocaleTimeString());
console.log(
  myDates.toLocaleString("default", {
    weekday: "long",
  })
);
