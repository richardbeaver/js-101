// Write three different ways to remove all of the elements from the
// following array:

let numbers = [1, 2, 3, 4];

//

// 1
let len = numbers.length;
for (let i = 0; i < len; i += 1) {
  numbers.pop();
}

// Or as a while loop:
while (numbers.length > 0) {
  numbers.pop();
}

// 2
numbers.splice(0, numbers.length);

// 3
numbers.length = 0;
