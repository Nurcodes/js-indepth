import { topMovies } from "./moduleB.js";

const checkMovie = (moveName) => {
  return topMovies.includes(moveName);
};

export { checkMovie };
