const character = {
  name: "Rick Axley",
  class: "Axe weilder",
  quote: "I'll never let you down",
  [Symbol("__admin__")]: false,
};

for (const key of Object.keys(character)) {
  console.log(key);
}
console.log("---------");
console.log(Object.getOwnPropertySymbols(character));
