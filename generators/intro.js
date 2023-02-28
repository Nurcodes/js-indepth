const counter = function* () {
  //* pause here and return the generator
  //* not executing the code
  console.log("This is the first log");
  yield 1;
  yield 2;
  yield 3;
};

console.log(counter);

const counterGenerator = counter();
console.log(counterGenerator);

console.log(counterGenerator.next());
