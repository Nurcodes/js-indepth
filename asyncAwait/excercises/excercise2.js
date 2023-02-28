"use strict";

const fetchFast = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Fast done1"), 2000);
  });
};

const fetchSlow = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Slow done"), 6000);
  });
};

console.log("Program starting..."); //1
const firstTimeStamp = new Date();
/*
  Await Promises takes 8 seconds because,
  nothing runs while the await is handling the promise.
 */
const awaitPromises = async () => {
  const fast = fetchFast();
  const slow = fetchSlow();
  const all = await Promise.all([fast, slow]);
  const secondTimeStamp = new Date();
  const totalTimeElapsed = secondTimeStamp - firstTimeStamp;
  console.log(all, totalTimeElapsed);
};

const thenPromises = () => {
  const fast = fetchFast().then((f) => console.log("fast from then ", f)); //4
  const slow = fetchSlow().then((s) => console.log("slow from then ", s));
};

awaitPromises();
//thenPromises(); // called after the first await
console.log("Program finished"); //2
