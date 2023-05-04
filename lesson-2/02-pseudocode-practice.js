/* eslint no-unused-vars:"off", consistent-return:"off" */

/*
Number in a collection with the greatest value:

START

# Given a collection of integers called "numbers"

SET iterator = 1
SET savedNumber = value within numbers collection at space 1

WHILE iterator <= length of numbers
  SET currentNumber = value within numbers collection at space "iterator"
  IF currentNumber > savedNumber
    savedNumber = currentNumber
  ELSE
    skip to the next iteration

  iterator = iterator + 1

PRINT savedNumber

END

*/

function findGreatest(numbers) {
  if (numbers === undefined) return;

  let savedNumber = numbers[0];

  numbers.forEach((num) => {
    if (num > savedNumber) {
      savedNumber = num;
    }
  });

  return savedNumber;
}

// ========================================================
// ========================================================

/*
Returns the sum of two numbers:

START

# Given two numbers: "number1" and "number2"

SET result = number1 + number2
RETURN result

END

*/

function sum(number1, number2) {
  const result = number1 + number2;
  return result;
}

// ========================================================
// ========================================================

/*
Takes array of strings; returns result of concatenating those strings
(Returns an empty string when input is an empty array)

START

# Given an array of strings: "strings"

SET concatenatedStrings = empty string
SET iterator = 1

WHILE iterator <= length of "strings"
  concatenatedStrings =
    concatenatedStrings + value in "strings" array at space "iterator"
  iterator = iterator + 1

RETURN concatenatedStrings

END

*/

function concatenateStrings(strings) {
  if (strings === undefined) return;

  let concatenatedStrings = '';
  strings.forEach((str) => {
    concatenatedStrings += str;
  });

  return concatenatedStrings;
}

console.log(concatenateStrings(undefined)); // => undefined
console.log(concatenateStrings([])); // => ''
console.log(concatenateStrings(['hello', 'there'])); // => 'hellothere'

// ========================================================
// ========================================================

/*
Takes array of integers; returns an array with every other element, starting
with the first

START

# Given an array of integers: "numbers"

SET result = empty array
SET iterator = 1

WHILE iterator <= length of numbers
  APPEND value within numbers collection at space "iterator" to result
  iterator = iterator + 2

RETURN result

END

*/

function everyOther(numbers) {
  if (numbers === undefined) return;

  let result = [];
  for (let idx = 0; idx < numbers.length; idx += 2) {
    result.push(numbers[idx]);
  }
  return result;
}

console.log(everyOther(undefined)); // => undefined
console.log(everyOther([])); // => []
console.log(everyOther([1,3])); // => [1]
console.log(everyOther([1,4,7,2,5])); // => [1,7,5]

// ========================================================
// ========================================================

/*
Determines index of the 3rd occurrence of a given character in a string; if
character does not occur, return `null`

START

# Given a string, "givenString", and a character, "char"

SET count = 0
SET iterator = 1

WHILE iterator <= length of givenString
  SET currentChar = character in givenString at space "iterator"

  IF currentChar == char
    count = count + 1
    If count == 3
      RETURN iterator

  iterator = iterator + 1

RETURN null

END

*/

function thirdOccurrence(givenString, char) {
  if (givenString === undefined) return;

  let count = 0;

  for (let idx = 0; idx < givenString.length; idx += 1) {
    const currentChar = givenString[idx];
    if (currentChar === char) {
      count += 1;
      if (count === 3) {
        return idx;
      }
    }
  }

  return null;
}

console.log(thirdOccurrence(undefined, 'a')); // => undefined
console.log(thirdOccurrence('', 'a')); // => null
console.log(thirdOccurrence('axbxcdxex', 'x')); // => 6

// ========================================================
// ========================================================

/*
Takes 2 arrays of numbers; "zips" the two arrays (first array elements
become the elements at even indexes, seconds array elements at odd indexes)
Can assume that both array arguments have the same number of elements

START

# Given two arrays of numbers: "array1" and "array2"

SET result = empty array
SET iterator = 1

WHILE iterator <= length of array1  // which is also length of array2
  SET value1 = value in array1 at space "iterator"
  SET value2 = value in array2 at aspace "iterator"

  APPEND value1 to result
  APPEND value2 to result

  iterator = iterator + 1

RETURN result

END

*/

function merge(array1, array2) {
  if (array1 === undefined || array2 === undefined) return;

  const result = [];

  for (let idx = 0; idx < array1.length; idx += 1) {
    const value1 = array1[idx];
    const value2 = array2[idx];

    result.push(value1);
    result.push(value2);
  }

  return result;
}

console.log(merge(undefined, undefined)); // => undefined
console.log(merge([], undefined)); // => undefined
console.log(merge(undefined, [])); // => undefined
console.log(merge([1, 2, 3], [4, 5, 6])); // => [1, 4, 2, 5, 3, 6]
