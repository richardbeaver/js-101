// Given a string, return a new string that replaces an occurrence of the
// word "important" with "urgent":

let advice = "Few things in life are as important as house training your pet dinosaur.";

//

advice.replace('important', 'urgent');

//

// Now, replace every occurrence in the string:

// Adding second occurrence of 'important'
advice = "Few things in life are as important as house training your important pet dinosaur.";

//

// Using `replaceAll` with string pattern:
advice.replaceAll('important', 'urgent');

// Using `replace` or `replaceAll` with regex:

// Regex in `replace` needs global flag set in order replace all matches
advice.replace(/important/g, 'urgent');

// A regex used in `replaceAll` must have global flag set or method will
// throw a TypeError
advice.replaceAll(/important/g, 'urgent');
