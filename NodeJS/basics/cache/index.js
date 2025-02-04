const superHero = require("./batman");

// NOTE- always user new constructor to avoid cache
const batman = new superHero("batman");

console.log(batman.getName());
batman.setName("Bruce Wane");
console.log(batman.getName());

const superMane = new superHero("superman");
console.log(superMane.getName());

// DO NOT GO AS IT SAVE CAHCE
// const superHero = require("./batman");

// const batman = superHero.getName();

// console.log(batman);
// superHero.setName("Spiderman");
// console.log(superHero.getName());

// // const newSuperHero = require("./batman");
// // const newSuperHero = new superHero();

// console.log(newSuperHero.getName());
