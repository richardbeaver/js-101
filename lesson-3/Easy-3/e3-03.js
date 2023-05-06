// What will the following code output?

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

/*
 hello there

 When str2 is initializaed to str1, a copy of the string value in str1 is
 created and str2 is assigned to that copy. So, they hold two separate
 instances of the same string value. str2 is then reassigned to another
 new string. None of this affects the value of str1.
*/
