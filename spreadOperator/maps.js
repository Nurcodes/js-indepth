const countries = new Map();

countries
  .set("Spain", "Europe")
  .set("America", "North America")
  .set("Japan", "Asia")
  .set("China", "Asia")
  .set("Kenya", "Africa")
  .set("Brazil", "South America");

console.log(countries);

const countriesSpread = [...countries, "string", "number", "word"];
console.log(countriesSpread);
