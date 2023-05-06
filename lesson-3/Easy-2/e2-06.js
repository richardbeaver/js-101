// Suppose we build an array like this:

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// This code will create a nested array that looks like this:
["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// Nesting data structures like we do here is commonplace in JavaScript and
// programming in general. We'll explore this in much greater depth in a future Lesson.

// Create a new array that contains all of the above values, but in an un-nested format:
[ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]

//

let names = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// Using 'flat':
let flattened = names.flat();

console.log("Using 'flat':");
console.log(flattened);

//

// Using 'concat' and spread syntax
let result = [].concat(...names);

console.log("Using 'concat' and spread syntax:")
console.log(result);

// Using 'forEach'
result = [];
names.forEach((item) => {
  // Specifying whether item is an array and using spread syntax if so
  // if (Array.isArray(item)) {
  //   result.push(...item);
  // } else {
  //   result.push(item);
  // }

  // Simplifying by letting the 'concat' method do that for us into a new
  // array on each iteration
  result = result.concat(item);
});

console.log("Using 'forEach':")
console.log(result);

// Using 'reduce'
result = names.reduce((resultList, item) => {
  return resultList.concat(item);
}, []);

console.log("Using 'reduce':")
console.log(result);
