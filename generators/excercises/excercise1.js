const randomNumber = function* () {
  while (true) {
    yield Math.random();
  }
};

const generatorRandom = randomNumber();

let i = 0;

while (i < 10) {
  console.log(generatorRandom.next());
  i++;
}

let j = 0;
for (const val of generatorRandom) {
  console.log(val);
  j++;
  if (j === 10) break;
}
