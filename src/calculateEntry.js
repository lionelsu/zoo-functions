const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const child = entrants.filter((entry) => entry.age < 18).length;
  const adult = entrants.filter((entry) => entry.age >= 18 && entry.age < 50).length;
  const senior = entrants.filter((entry) => entry.age >= 50).length;

  return {
    // é o mesmo que child: child, ...
    child,
    adult,
    senior,
  };
};
// A função countEntrants vai filtrar sobre cada entrada do parâmetro e aplicado condições, rá retornar um array com a saída esperada que é se a idade for menor que 18, maior igual a 18 e menor que 50 ou maior igual a 50. O retorno assume o número de entradas que o array vai receber e armazena esse número com auxilio do .length no final.

const calculateEntry = (entrants) => {
  if (!entrants) {
    return 0;
  }

  const { prices } = data;
  const zooVisitor = countEntrants(entrants);

  return Object.entries(zooVisitor)
    .reduce((totalPrince, [category, count]) =>
      totalPrince + count * prices[category], 0);
};
// a função calculateEntry vai usar a countEntrants como auxiliar para receber as entradas e posteriormente retornar os valores esperados com o método reduce recebe o acc como totalPrice e o curr com um array auxiliar, o primeiro parâmetro para filtar a categoria do objeto e o segundo para filtrar a quantidade e por fim, realizar a expressão matemática. Talvez fosse completamente desnecessário realizar a desestruturação do prices, mas usei para me acostumar mais com a sintaxe.

module.exports = { calculateEntry, countEntrants };
