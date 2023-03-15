const data = require('../data/zoo_data');

const findEmployeeByName = (name, worker) =>
  worker.firstName === name || worker.lastName === name;
// função auxiliar, usada apenas para comparar o nome com o sobrenome e criar a condicional de retorno onde qualquer um dos parametros retorna o que precisamos.

const getEmployeeByName = (employeeName) => {
  const { employees } = data;
  const findWorker = employees.find((worker) =>
    findEmployeeByName(employeeName, worker));

  return employeeName ? findWorker : {};
};
// Novamente, talvez não seja necessária a desestruturação. Find para a condição booleana e o retorno é um ternário que, se receber parâmetros retorna o findWorker se não, retorna um objeto vazio.

module.exports = getEmployeeByName;
