const counter = function* () {
  //* pause here and return the generator
  //* not executing the code
  yield 1;
  return;
  yield 2;
  yield 3;
};

const counterGenerator = counter();

for (const value of counterGenerator) {
  console.log(value);
}
console.log(counterGenerator.next());
