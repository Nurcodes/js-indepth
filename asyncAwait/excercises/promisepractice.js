const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Im resolved");
  }, 2000);
});

function fn() {
  p.then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Second resolve");
      }, 2000);
    });
  }).then((result) => console.log(result));
}

fn();
