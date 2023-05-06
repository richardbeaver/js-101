// Given the following similar sets of code, what will each code snippet print?

// A
{
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
}

// B
{
function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
}

// C
{
function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
}

/*
 A:
 (Reassigns each function parameter variable to a different parameter
  value - does not affect global variables passed as arguments)
 one is: one
 two is: two
 three is: three

 B:
 (Also reassigns each function parameter variable - also does not affect
  global variables passed as arguments)
 one is: one
 two is: two
 three is: three
 
 C:
 (The calls to 'splice' mutate the array objects referenced by the function
 parameter variables, which are the same array objects referenced by the global
 variables passed as arguments)
 one is: two
 two is: three
 three is: one
*/
