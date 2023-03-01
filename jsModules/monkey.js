const monkey = {
  name: "Abu",
  species: "Capuchin",
  hobbies: ["stealing"],
  age: 10,
};

const tiger = "Rajah";

const printMonkey = () => {
  monkey.age++;
  return new Promise((res, rej) => {
    setTimeout(() => res(monkey), 5000);
  });
};

console.log("Running from monkey module");
const result = await printMonkey();
console.log("done awaiting the result");
export { result, monkey, tiger };
