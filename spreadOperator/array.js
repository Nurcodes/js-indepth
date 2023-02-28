const myArray = [1, 2, 3, 4, 5, 6];

const myArrayCopy = [...myArray];

// console.log(myArray + "\n" + myArrayCopy);

//* shallow copies

const matrix = [10, 5, 12, 2];

const shallowMatrix = [...matrix];

console.log(shallowMatrix === matrix);

matrix.push(5);
console.log(shallowMatrix);

// matrix[0].push({ notPrimitive: 10 });
// console.log(matrix);
// console.log(shallowMatrix);

let num = "10";

let numCopy = num;

console.log(num === numCopy);
