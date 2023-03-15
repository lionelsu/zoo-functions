const data = require('../data/zoo_data');

const totalAnimals = () => {
  const animalCounts = {};
  data.species.forEach(({ name, residents }) => {
    animalCounts[name] = residents.length;
  });
  return animalCounts;
};
// Função auxiliar bem simples, utilizada para criar um objeto animalCounts e com uso do forEach atribuindo a posição name do objeto species e o número de residentes como valor.

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
// Talvez as desestruturações não fossem realmente necessárias aqui, mas eu fiz para me acostumar com a sintaxe. O find serve para o primerio elemento que satisfaça a condição de comparação e depois utilizamos o if e um filter para retornar a quatindade de residentes de uma determinada especie se a condição for atendida dependendo do objeto injetado como parâmetro.

module.exports = countAnimals;
