import fetch from "node-fetch";

const response = fetch("https://jsonplaceholder.typicode.com/posts/1");

response
  .then((result) => result.text())
  .then((json) => console.log(JSON.parse(json)))
  .catch((err) => console.log(err));
