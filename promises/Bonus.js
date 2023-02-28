const promise10 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3000);
});

const promise20 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 5000);
});

Promise.all([promise10, promise20])
  .then((val) => {
    return val;
  })
  .then((val) => {
    console.log(val[0] + val[1]);
  });
