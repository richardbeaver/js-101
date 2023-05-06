// Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";

// Return a new string that swaps the case of all of the letters:

`tHE mUNSTERS ARE CREEPY AND SPOOKY.`

//

let flippedCases = munstersDescription.split('').map((char) => {
  if (char === char.toUpperCase()) {
    // Character is upper case or non-alphabetical, so calling 'toLowerCase'
    // will either make it lower case or have no affect
    return char.toLowerCase();
  } else {
    // Otherwise, character is lower case, so capitalize it
    return char.toUpperCase();
  }
}).join('');

console.log(flippedCases);
