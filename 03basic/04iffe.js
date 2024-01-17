// iife immediately invoked function expression
// named iife
(function one() {
  console.log("hello");
  //   for preventing from pollution of global object we use iife
})();

// we have to write semicolon in if we are writing another iife after writing one iife
(() => {
  console.log("hey");
  //   this is not named iife
})();

// how javascript execute code

// first in code the gec in made inside this

// then the phase in memory phase where a place is allocated for variable and function definition
// and then exection phase

// if a function is come then memory creation phase and exection is made then retuned value retuned to global environment it deleted after work done

// how callstack work

// callstack work on lifo
// last in first out
