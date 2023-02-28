const fetchData = async () => {
  return "hello javascript";
};
const result = fetchData();
console.log(Promise.resolve(10));

result.then((result) => {
  console.log(result);
});

const myPromise = new Promise((resolve, reject) => {
  const result = "finished";
  return resolve(result).then((result) => console.log("finished"));
});
console.log(myPromise);
