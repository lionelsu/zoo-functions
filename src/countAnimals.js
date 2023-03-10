const data = require('../data/zoo_data');

const totalAnimals = () => {
  const animalCounts = {};
  data.species.forEach(({ name, residents }) => {
    animalCounts[name] = residents.length;
  });
  return animalCounts;
};

const countAnimals = (animal) => {
  if (!animal) {
    return totalAnimals();
  }

  const { species } = data;
  const { species: animalSpecies, sex: animalSex } = animal;

  const filteredSpecies = species.find(({ name }) => name === animalSpecies);

  if (animalSpecies) {
    return animalSex
      ? filteredSpecies.residents
        .filter(({ sex }) => sex === animalSex).length
      : filteredSpecies.residents.length;
  }
};

module.exports = countAnimals;
