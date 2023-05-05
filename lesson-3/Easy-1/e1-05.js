// What will the following code output?

console.log(false == '0');
console.log(false === '0');

/*
 true
 false

 The loose inequality operatory will coerce both operands to numbers in this
 case and then make a comparison. `false` and `'0'` both convert to the number
 0, so this will return true.
 However, the strict equality operator always returns false when its operands
 are two different types, as is the case here.
*/
