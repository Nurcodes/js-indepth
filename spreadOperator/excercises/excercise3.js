const superhero = {
  name: "Bruce Wayne",
  alias: "Batman",
  universe: "DC",
  happy: false,
  enemies: ["Joker", "Catwomen", "Bane"],
  bestMovie: { title: "The Dark Knight", rating: 95 },
};

const superheroCopy = {
  ...superhero,
  enemies: [...superhero.enemies, "Poison Ivy"],
  bestMovie: { ...superhero.bestMovie, year: 2008 },
};
superheroCopy.bestMovie.rating = 99;
console.log(superhero);
console.log(superheroCopy);
