import fetch from "node-fetch";
const response = fetch("https://www.craigslist.org/about/");

response
  .then((result) => result.text())
  .then((text) => console.log(text))
  .catch((err) => console.log(err));
