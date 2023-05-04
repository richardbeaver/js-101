/* eslint no-unused-vars:"off" */

function parseJSON(data) {
  let result;

  try {
    result = JSON.parse(data); // Throws an exception if "data" is invalid
  } catch (err) {
    // We run this code if JSON.parse throws an exception
    // "err" contains an Error object that we can inspect and use
    console.log('There was a ', err.name, 'parsing JSON data: ', err.message);
    result = null;
  } finally {
    // This code runs whether `JSON.parse` suceeds or fails
    console.log('Finished parsing data.');
  }

  return result;
}

console.log(parseJSON('')); // => SyntaxError
console.log(parseJSON('hello')); // => SyntaxError
console.log(parseJSON('{ "name":"bill" }')); // => { name: 'bill' }
