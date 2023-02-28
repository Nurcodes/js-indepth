const movie = {
  name: "Blade Runner",
  director: "Ridley Scott",
  year: "1982",
  rating: 89,
  genre: "Science fiction",
  [Symbol("budget")]: 30,
  [Symbol("boxOffice")]: 41.6,
  [Symbol.iterator]: function* () {
    for (const [key, val] of Object.entries(this)) {
      yield `${key} => ${val}`;
    }
  },
};

for (const pair of movie) {
  console.log(pair);
}

console.log(Object.getOwnPropertySymbols(movie));
