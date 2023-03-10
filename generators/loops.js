const counter = function* () {
  //* pause here and return the generator
  //* not executing the code
  yield 1;
  yield 2;
  yield 3;
};

console.log(counter);

const counterGenerator = counter();
console.log(counterGenerator);

for (const count of counterGenerator) {
  console.log(count);
}

let counterObject = counterGenerator.next();
console.log(counterObject);

while (counterObject.done === false) {
  console.log(counterObject.value);
  counterObject = counterGenerator.next();
  console.log(counterObject);
}
// console.log("All done");
