// Alyssa was asked to write an implementation of a rolling buffer. You can
// add and remove elements from a rolling buffer. However, once the buffer
// becomes full, any new elements will displace the oldest elements in the
// buffer.

// She wrote two implementations of the code for adding elements to the buffer.
// In presenting the code to her team leader, she said "Take your pick. Do you
// prefer push() or concat() for modifying the buffer?".

// Is there a difference between these implementations, other than the method
// she used to add an element to the buffer? You may assume that newElement
// will always be a primitive value.

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

/*
 The difference is that the version using 'concat' does not mutate the array
 that the 'buffer' parameter is assigned to when the function is called. The
 'buffer' parameter is reassigned to a new array (the result of calling
 'buffer.concat()'), which does not mutate the original array. This new array
 then potentially has 'shift' called on it and is then returned, not the 
 array passed in as an argument.

 However, the 'push' method does mutate the 'buffer' array. The function returns
 a reference to the same argument array that has been mutated to now include
 the new element.
*/
