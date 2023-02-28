const timeGenerator = async function* (time) {
  while (1) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => resolve(time), time);
    });
    time *= 2;
    if (time == 1600) {
      yield new Promise((resolve, rejecet) => {
        setTimeout(
          () => resolve("Server seems to be down - terminating the process.."),
          2000
        );
      });
      break;
    }
  }
};

const timeIterator = timeGenerator(100);

async function getTime() {
  for await (const promise of timeIterator) {
    console.log(promise);
  }
  console.log(timeIterator.next());
}

getTime();
