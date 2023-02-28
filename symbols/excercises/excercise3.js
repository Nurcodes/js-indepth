const book = {
  name: "1984",
  author: "George Orwell",
  year: 1949,
  rating: 4.6,
  genre: "Science Fiction",
  movie: true,
  [Symbol.asyncIterator]: async function* () {
    for (const pair of Object.entries(this)) {
      yield new Promise((resolve, reject) => {
        setTimeout(() => resolve(pair), 1000);
      });
    }
  },
};

async function getPairs() {
  for await (const pairs of book) console.log(pairs);
}

console.log("Program starting");
getPairs();
console.log("Program finished");
