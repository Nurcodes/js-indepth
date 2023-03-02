import fetch from "node-fetch";
const url = "https://pokeapi.co/api/v2/pokemon/pikachu";

const getPokemonPromise = () => {
  const start = Date.now();
  fetch(url)
    .then((result) => {
      console.log("RESPONSE!");
      return result.json();
    })
    .then((json) => {
      console.log("JSON");
      console.log(json.name);
      console.log(json.height);
      console.log((Date.now() - start) / 1000);
      // console.log(json.sprites.other["official-artwork"].front_default);
    });
};

//* NOW WITH ASYNC/AWAIT FUNCTION
//^ AND USE JSON.PARSE()

const charmander = "https://pokeapi.co/api/v2/pokemon/charmander";

const getPokemon = async () => {
  const start = Date.now();
  //*should be using a try catch!!
  const response = await fetch(charmander);
  console.log("Got the response");
  const text = await response.text();
  console.log("Got the text");

  //* This is synchronus, so no
  //* await is needed
  const json = JSON.parse(text);
  console.log(json.name);
  console.log(json.height);
  console.log((Date.now() - start) / 1000);
};

// getPokemon();
getPokemonPromise();
