const goGetCandies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve({
          candy: "sour keys",
          quantity: 10,
        }),
      2000
    );
  });
};

const sellCandies = (candy) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(candy * 25), 3000);
  });
};

//* async/await syntax
const asyncCandies = async () => {
  const candy = await goGetCandies();
  const cents = await sellCandies(candy.quantity);
  console.log(cents, new Date() - sTime);
};
console.log("Program starting..");
const sTime = new Date();
asyncCandies();
console.log("Program finished");

//& vanilla promises syntax
const promisesCandies = () => {
  goGetCandies().then((result) => {
    sellCandies(result.quantity).then((cents) =>
      console.log(cents, new Date() - fStamp)
    );
  });
};

// console.log("Program starting..");
// const fStamp = new Date();
// promisesCandies();
// console.log("Program finished");
