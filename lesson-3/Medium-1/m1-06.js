// What do you think the following code will output?

let nanArray = [NaN];

console.log(nanArray[0] === NaN);

// Bonus:
// How can you reliably test if a value is NaN?

/*
 This will ouput `false` as we cannot use the equality operators to determine
 whether a value is NaN.

 Bonus:
 We can use the 'Number.isNan()' method to test whether a value is NaN.
*/
