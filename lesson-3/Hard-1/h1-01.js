// Will the following functions return the same results?

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

/*
 No, the 'first' function will return the object defined in the function body.
 The 'second' function will return undefined because there is no expression
 on the same line as the return statement. Because semi-colons are optional,
 javscript will interpret this as an empty return statement. As long as the
 code below the return statement is valid, no errors will be thrown but that
 code will not be executed.
*/
