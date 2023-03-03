import fs from "fs/promises";
import { choosePokemon } from "./PokeCLI.js";
import { existsSync } from "fs";
import inquirer from "inquirer";

const fetchOfficial = async (choice) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${choice}`;

  try {
    //* call fetch to get the official artwork of choice

    const res = await fetch(url);
    if (res.status === "200") return;
    const dir = `${choice[0].toUpperCase() + choice.slice(1)}`;
    if (!existsSync(dir)) {
      await fs.mkdir(dir);
      console.log(`Created ${dir} directory `);
    }

    //* parse the response
    const parsedObj = await res.json();

    //* look for the offical artwork;
    const official = parsedObj.sprites.other["official-artwork"];

    //* loop through the keys and send them to the fs function
    let i = 0;
    for (const j in official) {
      const buffer = await fetch(official[j])
        .then((res) => res.arrayBuffer())
        .then((arrBuff) => Buffer.from(arrBuff));
      //* now that we have our buffer
      //* we will use the fs/promises
      //^Also need the key name to make the file name

      await fs.writeFile(
        `${dir}/${choice}-${Object.keys(official)[i]}.png`,
        buffer
      );
      console.log(`Saved: ${choice}/${j}`);
      i++;
    }
  } catch (err) {
    console.log(err);
  }
};

export default fetchOfficial;

//& TODO
