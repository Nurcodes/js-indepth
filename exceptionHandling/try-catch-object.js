const errorFnExpress = function () {
  return coolFunction();
};

const msg = null;
try {
  const user = {
    name: "Alex",
    age: 21,
  };
  errorFnExpress();
} catch (error) {
  console.error(error);
  console.log(msg);
}

function errorFn() {
  return coolFunction();
}
