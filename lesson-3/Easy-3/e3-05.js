// The following function unnecessarily uses two return statements to return
// boolean values. Can you rewrite this function so it only has one return
// statement and does not explicitly use either true or false?
// Try to come up with at least two different solutions.

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

//

// 1
function isColorValid(color) {
  return color === "blue" || color === "green";
}

// 2
function isColorValid(color) {
  return ["blue", "green"].includes(color);
}
