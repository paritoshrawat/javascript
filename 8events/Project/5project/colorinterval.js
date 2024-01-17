const randomcolor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

console.log(randomcolor());

let validcolor;

const changecolor = function () {
  if (!validcolor) {
    validcolor = setInterval(color, 1000);
  }

  function color() {
    document.body.style.backgroundColor = randomcolor();
  }
};

const stopcolor = function () {
  clearInterval(validcolor);
  validcolor = null;
};

document.querySelector("#start").addEventListener("click", changecolor);
document.querySelector("#stop").addEventListener("click", stopcolor);
