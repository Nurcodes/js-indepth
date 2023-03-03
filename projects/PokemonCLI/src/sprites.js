import fs from "fs/promises";
import { existsSync } from "fs";
import inquirer from "inquirer";

/**
 * *This function uses the fetch api to get all sprites
 * *of the selected pokemon
 */

const fetchSprite = async (choice) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${choice}`;
  const dir = `${choice[0].toUpperCase() + choice.slice(1)}`;
  try {
    //* Begin to fetch the pokemon data
    const res = await fetch(url);

    //* Parse response into json
    const parsedObj = await res.json();

    //* get the sprites object
    const sprites = parsedObj.sprites;

    //* ready to loop over the keys
    iterateObj(sprites, dir, choice);
  } catch (err) {
    console.log("There seems to be an error\n");
    console.log(err);
  }
};

const iterateObj = async (obj, dir, choice) => {
  try {
    if (!existsSync(dir)) {
      console.log(`Created the ${choice} folder\n\n`);
      await fs.mkdir(`${dir}`);
    }
    for (const k in obj) {
      if (
        obj[k] === null ||
        obj === "official-artwork" ||
        obj[k] === "official-artwork"
      )
        continue;

      if (typeof obj[k] === "object") {
        iterateObj(obj[k], dir, choice);
      } else {
        const curr = `${dir}/${k}${obj[k].slice(-4)}`;

        const buffer = await fetch(obj[k])
          .then((res) => res.arrayBuffer())
          .then((arrbuff) => Buffer.from(arrbuff));

        if (existsSync(curr)) continue;
        else {
          //* Starting writing to the filesystem
          if (curr.includes(".gif") || curr.includes(".svg")) continue;
          await fs.writeFile(curr, buffer);
          await new Promise((res, rej) => {
            setTimeout(() => res(`Saved: ${dir}/${k}`), 500);
          }).then((res) => console.log(res));
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
};
export default fetchSprite;
