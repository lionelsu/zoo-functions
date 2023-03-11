const data = require('../data/zoo_data');

const getResposibleId = (id) => {
  const idList = data.employees
    .find((employee) => employee.id === id).responsibleFor;

  const getId = idList
    .find((speciesId) => data.species
      .find((specie) => specie.id === speciesId));

  return getId;
};

const getAnimalList = (id) => {
  const animals = data.species
    .find((specie) => specie.id === getResposibleId(id)).residents;

  return animals;
};

const getOldestFromFirstSpecies = (id) => {
  const olderAnimal = getAnimalList(id)
    .reduce((acc, curr) => (acc.age > curr.age ? acc : curr));

  const oldestAnimals = Object.values(olderAnimal);
  return oldestAnimals;
};

module.exports = getOldestFromFirstSpecies;
