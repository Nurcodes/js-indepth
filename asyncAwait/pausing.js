const makeTimeout = (ms) => {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("All done!");
    }, ms);
  });
  return timeout;
};

console.log("Programming starting");

const fetchData = async () => {
  console.log("Fire off first promise");
  const result1 = makeTimeout(2000);
  console.log("Fire off second promise");
  const result2 = makeTimeout(2000);
  const finalResult = await Promise.all([result1, result2]);
  console.log("Done with both all promises", finalResult);
};

fetchData();
console.log("Program complete");
