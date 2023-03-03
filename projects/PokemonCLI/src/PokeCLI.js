import inquirer from "inquirer";
import fetchOfficial from "./official.js";
import fetchSprite from "./sprites.js";
// import fetchStats from "./fetchStats.js";
let pokemon;

const choosePokemon = async () => {
  const pokemonObj = await inquirer.prompt([
    {
      name: "poke",
      type: "input",
      message: "Pokemon name: ",
    },
  ]);
  if (pokemonObj.poke !== " " && pokemonObj.poke !== "") {
    pokemon = pokemonObj.poke.toLowerCase();
    chooseOptions(pokemon);
  } else {
    return choosePokemon();
  }
};

const fetchOptions = async (arr, choice) => {
  if (arr.length !== 0) {
    for (const option of arr) {
      switch (option) {
        case "sprites":
          fetchSprite(choice);
          break;
        case "official-artwork":
          fetchOfficial(choice);
        case "stats":
          // fetchStats(choice);
          console.log("Not ready yet!!");
        default:
          break;
      }
    }
  } else {
    console.log("ERROR no choice made.");
  }
};

const chooseOptions = async (choice) => {
  const answer = await inquirer.prompt([
    {
      name: "options",
      type: "checkbox",
      message: "Pokemon info to download: ",
      choices: ["sprites", "official-artwork", "stats"],
    },
  ]);
  const array = answer.options;
  fetchOptions(array, choice);
};

choosePokemon();

export default pokemon;
export { choosePokemon };
