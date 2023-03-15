const data = require('../data/zoo_data');

const isManager = (id) => {
  const { employees } = data;
  return employees
    .some(({ managers }) => managers.includes(id));
};
// Super simples, encontra algum manager que tenha o id do parâmetro incluído.

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  // return employees.filter(({ managers }) => managers.includes(managerId)).map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  const { employees } = data;
  return employees
    .flatMap(({ managers, firstName, lastName }) =>
      (managers.includes(managerId)
        ? `${firstName} ${lastName}`
        : []));
};
// O uso do flatMap aqui é para combinar o filter com o map onde, enquanto o flatmap transforma cada objeto em um array, o "filter" interno é usado para remover os elementos vazios.

module.exports = { isManager, getRelatedEmployees };
