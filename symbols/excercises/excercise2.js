const book = {
  name: "1984",
  author: "George Orwell",
  year: 1949,
  rating: 4.6,
  genre: "Science Fiction",
  movie: true,
  [Symbol.iterator]: function* () {
    for (const pair of Object.entries(this)) {
      yield pair;
    }
  },
};

for (const pair of book) console.log(pair);
