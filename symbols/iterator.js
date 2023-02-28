const character = {
  name: "Rick Axley",
  class: "Axe weilder",
  quote: "I'll never let you down",
  __admin__: false,
  [Symbol.iterator]: function* () {
    for (const i of Object.keys(this)) {
      // console.log(this.i);
      yield this[i];
    }
  },
};

for (const value of character) {
  console.log(value);
}
