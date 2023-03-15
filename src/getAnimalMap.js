const data = require('../data/zoo_data');

// function filterAnimalsByLocation(animals, location) {
//   const filteredAnimals = animals.filter(animal => animal.location === location)
//     .map(animal => animal.name);
//   return filteredAnimals;
// }

const animalMap = () => data.species.reduce((specie, animal) => {
  const { name, location } = animal;
  const filteredSpecies = specie;

  if (!filteredSpecies[location]) {
    filteredSpecies[location] = [];
  }

  filteredSpecies[location].push(name);
  return filteredSpecies;
}, {});
// Esta função serve como auxilio para criar retorno do objeto principal, o objeto padrão. Eu perdi um domingo inteiro tentando usar este objeto e condições com a função mountAnimalMap mas, foi completamente frustrado, eu achei esta bem engessada, no geral.

const mountAnimalMap = (sex, sorted) =>
  data.species.reduce((specie, animal) => {
    const { name, location, residents } = animal;
    const filteredSpecies = specie;
    if (!filteredSpecies[location]) {
      filteredSpecies[location] = [];
    }
    let residentAnimals = residents;
    if (sex) {
      residentAnimals = residentAnimals
        .filter((resident) => resident.sex === sex);
    }
    residentAnimals = residentAnimals
      .map((resident) => resident.name);
    if (sorted) {
      residentAnimals.sort();
    }
    filteredSpecies[location].push({ [name]: residentAnimals });
    return filteredSpecies;
  }, {});
// Principal função para construir o objeto dependendo da dependencia injetada como parâmetro, talvez não fosse necessário usar da desestruturação, mas pela limitação de linhas do lint eu acho que deixa o código melhor.

const getAnimalMap = (options) => {
  if (options && options.includeNames) {
    return mountAnimalMap(options.sex, options.sorted);
  }
  return animalMap();
};
// Função usada apenas para gerar as saídas dependendo da especificidade do objeto injetado.

module.exports = getAnimalMap;
