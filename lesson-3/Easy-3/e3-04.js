// What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

/*
 [{ first: 42 }, { second: "value2" }, 3, 4, 5]

 arr2 is declared and initialized to a copy of the value of arr1. The slice
 method creates shallow copies, so arr2 contains references to the same 
 objects in the first two indexes of arr1, and then copies of the following
 three integers.
 'arr2[0].first' mutates the object at index 0 of arr2, reassigning the value
 of its 'first' property to 42. This object is the same object referenced
 by the 0-th index of arr1.
 Therefore, this mutation is reflected when ouputting arr1.

*/
