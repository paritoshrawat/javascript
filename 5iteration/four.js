const user = {
  lang: "javascript",
  cpp: "c++",
  rb: "ruby",
};

for (const key in user) {
  console.log(key); // key
  console.log(user[key]); // value
}
