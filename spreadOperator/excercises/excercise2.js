const animal = {
  name: "Koala",
  Kingdom: "Australia",
  cute: true,
  friends: [
    {
      name: "Kangaroo",
      kingdom: "Australia",
    },
  ],
};

const koala = { ...animal, tall: false };

animal.cute = false;

animal.friends[0].cute = false;

console.log(animal);
console.log(koala);
