const countries = [
  "France",
  "South Africa",
  "Brazil",
  "United States",
  "Sweden",
];

const space = countries.filter((cn) => {
  if (cn.includes(" ")) return true;
  return false;
});
console.log(countries);
console.log(space);
