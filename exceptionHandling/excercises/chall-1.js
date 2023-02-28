function loopError() {
  for (let i = 1; i < 10; i++) {
    if (i === 5) {
      try {
        throw new Error("BOOM!");
      } catch (err) {
        console.error(`Execution ran into ${err.type} at interation ${i}`);
        console.error(err);
        continue;
      }
    }
    console.log(i);
  }
}

loopError();
