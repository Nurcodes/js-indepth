const makeTimeout = (ms) => {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("All done!");
    }, ms);
  });
  return timeout;
};

console.log("Programming starting");

// makeTimeout(1000).then((result) => console.log("from .then", result));

const fetchStuff = async () => {
  const result = await makeTimeout(1000);
  console.log(result);
};
fetchStuff();
