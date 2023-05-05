// Determine whether the name Dino appears in the strings below -- check
// each string separately):

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// 

str1.includes('Dino');
str2.includes('Dino');

str1.indexOf('Dino') !== -1;
str2.indexOf('Dino') !== -1;

// Regex:

/Dino/.test(str1);
/Dino/.test(str2);

str1.match(/Dino/) !== null;
str2.match(/Dino/) !== null;
