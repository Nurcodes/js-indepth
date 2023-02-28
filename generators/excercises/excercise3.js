const randomNumber = function* () {
  while (5) {
    yield Math.floor(Math.random() * (10 - 1) + 1);
  }
};

const groceryList = function* () {
  const grocery = ["Avacado", "Cookie", "Milk", "Soup", "Soda"];
  while (grocery.length) {
    console.log(grocery);
    yield grocery.splice(
      [Math.floor(Math.random() * grocery.length - 1)],
      1
    )[0];
  }
};

const listIterator = groceryList();
const randomIterator = randomNumber();

for (let i = 0; i < 5; i++) {
  console.log(randomIterator.next().value, listIterator.next().value);
}
// console.log(listIterator.next().value);
