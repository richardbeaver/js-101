// What is the output of the following code?

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);

/*
 34

 Passing 'answer' to the 'messWithIt' function initializes the 'someNumber'
 parameter to a copy of value of 'answer'. The 'someNumber' parameter variable
 is then reassigned and returned by the function. This does not affect the 
 global 'answer' variable, which is still 42 after the function is called.

*/
