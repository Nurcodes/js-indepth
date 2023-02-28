function fetchPokemon() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          name: "Pickachu",
          power: 20,
        },
      });
      reject(Error("Danger, danger!"));
    }, 2000);
  });
}

async function getPokemon() {
  try {
    const result = await fetchPokemon();
    console.log(result);
  } catch {
    console.log("Caught the error");
  }
  console.log("No problems here :)");
}
//getPokemon();
const getPokemonPromise = () => {
  const result = fetchPokemon()
    .then((success) => console.log(success))
    .catch((err) => console.log(err.name));
  console.log(`${result}`); //2
};
getPokemonPromise();
console.log("Program Start"); //3
