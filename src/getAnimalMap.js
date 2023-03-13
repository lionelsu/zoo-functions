const data = require('../data/zoo_data');

// function filterAnimalsByLocation(animals, location) {
//   const filteredAnimals = animals.filter(animal => animal.location === location)
//     .map(animal => animal.name);
//   return filteredAnimals;
// }

const animalList = () => data.species.reduce((specie, animal) => {
  const { name, location } = animal;
  const filteredSpecies = specie;

  if (!filteredSpecies[location]) {
    filteredSpecies[location] = [];
  }

  filteredSpecies[location].push(name);
  return filteredSpecies;
}, {});

const getAnimalList = (sex, sorted) =>
  data.species.reduce((specie, animal) => {
    const { name, location, residents } = animal;
    const filteredSpecies = specie;
    if (!filteredSpecies[location]) {
      filteredSpecies[location] = [];
    }
    let zooAnimals = residents;
    if (sex) {
      zooAnimals = zooAnimals
        .filter((resident) => resident.sex === sex);
    }
    zooAnimals = zooAnimals.map((resident) => resident.name);
    if (sorted) {
      zooAnimals.sort();
    }
    filteredSpecies[location].push({ [name]: zooAnimals });
    return filteredSpecies;
  }, {});

const getAnimalMap = (options) => {
  if (options && options.includeNames) {
    return getAnimalList(options.sex, options.sorted);
  }
  return animalList();
};

module.exports = getAnimalMap;
