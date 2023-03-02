import fetch from "node-fetch";
import fs from "fs/promises";

const img = "https://w.wallhaven.cc/full/zy/wallhaven-zyxvqy.jpg";
const start = Date.now();
const fetchImg = async () => {
  const res = await fetch(img);
  console.log("Have received the response");

  console.log("-----------");
  console.log("Beginning parsing the response body now....\n");

  const parsedImg = await res.arrayBuffer();
  console.log(new Int8Array(parsedImg));
  const typedParsedImg = new Int8Array(parsedImg);
  console.log("------------");
  console.log("Have parsed the response into a blob\n");

  //* Now I need to use the fs/promise
  //* module to save the image to a file
  console.log("--------------");
  console.log("Beginning to write the file");
  try {
    await fs.writeFile("./wallpaper.jpg", typedParsedImg);
    console.log("Completed all of the required tasks HOORAY!!\n");
    console.log(`Time elapsed: ${(Date.now() - start) / 1000}`);
  } catch (err) {
    console.log(err);
  }
  return;
};

// fetchImg();

const mountains = "https://w.wallhaven.cc/full/4x/wallhaven-4x93ko.png";

fetch(mountains)
  .then((res) => {
    return res.arrayBuffer();
  })
  .then((buffer) => {
    fs.appendFile("mountains.png", Buffer.from(buffer));
  })
  .then((result) => console.log("Completed!"))
  .catch((err) => console.log(err));
