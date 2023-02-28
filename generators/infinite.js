const counter = function* () {
  let i = 0;

  while (true) {
    yield i;

    i++;
  }
};

const counterGenerator = counter();

let generator = counterGenerator.next();

while (generator.value < 10) {
  console.log(generator);
  generator = counterGenerator.next();
}
console.log(generator);

//* Lazy evaluation
