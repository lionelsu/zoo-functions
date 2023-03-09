const data = require('../data/zoo_data');

const findEmployeeByName = (name, worker) =>
  worker.firstName === name || worker.lastName === name;

const getEmployeeByName = (employeeName) => {
  const { employees } = data;
  const findWorker = employees.find((worker) =>
    findEmployeeByName(employeeName, worker));

  return employeeName ? findWorker : {};
};

module.exports = getEmployeeByName;
