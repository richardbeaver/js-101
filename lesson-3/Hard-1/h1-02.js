// What does the last line in the following code output?

let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

/*
 { first: [1, 2] }

 'numArray' references the same array as the 'first' property in 'object'.
 This array is modified to append 2 to it when 'numArray.push(2)' is called.
 So, this mutation is reflected when we ouput 'object'.
*/
