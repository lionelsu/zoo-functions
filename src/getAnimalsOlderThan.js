const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const { species } = data;
  const speciesName = species
    .find((specie) => specie.name === animal).residents;

  const olderAnimals = speciesName
    .every((resident) => resident.age >= age);
  return olderAnimals;
};
// Função super simples, find e every são usados para receber as condições true ou false dependendo dos parâmetros passados, testa se todos os animais possuem a idade especificada e retorna verdadeiro ou falso.
module.exports = getAnimalsOlderThan;
