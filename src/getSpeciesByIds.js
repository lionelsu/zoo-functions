const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const { species } = data;
  return species
    .filter((specie) => ids
      .includes(specie.id));
};
// Função super simples onde novamente, talvez não fosse necessára a desestruturação. Retorna um array com as especies referentes passadas por id. O spread operator (...ids) é usado para espalhar e "copiar" as propriedades do parâmetro passado e facilitar o "resto" da saída.

module.exports = getSpeciesByIds;
