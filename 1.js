const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Charlie", age: 22, gender: "male" },
  { name: "Diana", age: 28, gender: "female" },
  { name: "Ethan", age: 35, gender: "male" },
  { name: "Fiona", age: 27, gender: "female" },
  { name: "George", age: 24, gender: "male" },
  { name: "Hannah", age: 29, gender: "female" },
  { name: "Ian", age: 31, gender: "male" },
  { name: "Julia", age: 26, gender: "female" },
];

const filteringFemales = () => people.filter((p) => p.gender === "female");
const names = filteringFemales().map((p) => p.name);
console.log(names);
