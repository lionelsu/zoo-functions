const data = require('../data/zoo_data');

const getResposibleId = (id) => {
  const idList = data.employees
    .find((employee) => employee.id === id).responsibleFor;

  const getId = idList
    .find((speciesId) => data.species
      .find((specie) => specie.id === speciesId));

  return getId;
};

// Função com única responsábilidade de filtrar ids primeiro passando o filtro no objeto employees e posteriormente nos id das especies correspondentes.

const getAnimalList = (id) => {
  const animals = data.species
    .find((specie) => specie.id === getResposibleId(id)).residents;

  return animals;
};

// Função auxililar para encontrar o responsável pelo id igual ao id da especie buscada

const getOldestFromFirstSpecies = (id) => {
  const olderAnimal = getAnimalList(id)
    .reduce((acc, curr) => (acc.age > curr.age ? acc : curr));

  const oldestAnimals = Object.values(olderAnimal);
  return oldestAnimals;
};

// Função principal para construir a saída, acc e curr foram mantidos para continuar com a funcionalidade da função sem atribuir variáveis aos parâmetros do reduce para enfim, retornar um array com nome, idade e sexo do animal mais velho.

module.exports = getOldestFromFirstSpecies;
