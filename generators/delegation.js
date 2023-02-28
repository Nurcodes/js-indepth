const counter = function* () {
  yield 1;
  yield* ["delegated 2", "delegated 3", "delegated 4"];
  yield 5;
};

const generatorObject = counter();

for (const val of generatorObject) {
  console.log(val);
}
