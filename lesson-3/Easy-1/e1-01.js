// Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5;

/*
 No, it will not raise an error. It will assign the item at index '6' the
 value 5. There will be 3 empty slots at indexes 3-5.
*/

// Bonus:

let numbers2 = [1, 2, 3];
numbers2[6] = 5;
numbers2[4];  // what will this line return?

/*
 Accessing the 4th index will return undefined even though it is actually
 an empty slot. Doing something like `.forEach` on the array will skip the
 4th index as its not a set value.
*/
