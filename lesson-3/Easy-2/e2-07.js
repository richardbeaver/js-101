// Consider the following object:
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// Create an array from this object that contains only two elements: Barney's
// name and Barney's number:
[ 'Barney', 2 ]

//

let barneyEntry = Object.entries(flintstones).find((entry) => entry[0] === 'Barney');

console.log(barneyEntry);
