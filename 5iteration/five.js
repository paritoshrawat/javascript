// for each loop

// const coding = ["javascript", "java", "python", "ruby"];
// coding.forEach((val) => console.log(val));

// can be written like

const coding = ["javascript", "java", "python", "ruby"];
coding.forEach(function (val) {
  // for each have value index and array (val,i,arr)
  //   console.log(val);
});

const all = [
  {
    dta: "java",
    data: "javascript",
  },
  {
    dta: "py",
    data: "python",
  },
  {
    dta: "rb",
    data: "ruby",
  },
];

all.forEach((item) => console.log(item.dta));
