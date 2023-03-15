const data = require('../data/zoo_data');

const getEmployeeName = (employee) =>
  `${employee.firstName} ${employee.lastName}`;
// Função auxiliar para gerar o nome já concatenado.

const getSpecies = (responsible) =>
  responsible.map((speciesId) =>
    data.species.find((species) => species.id === speciesId).name);
// Função para retornar um novo array com as especificações do responsável injetados pelo parâmetro.

const getSpeciesLocations = (responsible) =>
  responsible.map((speciesId) =>
    data.species
      .find((species) => species.id === speciesId).location);
// Função para gerar um novo array com as especificações injetadas pelo parâmetro.
// Note que talvez não precisassemos de duas funções, mas tento fazer aqui o principio da responsabilidade única.

const mountEmployeesCoverage = () => {
  const listObj = data.employees.map((employee) => {
    const fullName = getEmployeeName(employee);
    const species = getSpecies(employee.responsibleFor);
    const locations = getSpeciesLocations(employee.responsibleFor);

    return {
      id: employee.id,
      fullName,
      species,
      locations,
    };
  });

  return listObj;
};
// Função para montar o objeto principal da cobertura e que vai se modularizar de acordo com o parâmetro injetado na função getEmployeesCoverage.

const getEmployeesCoverage = (param) => {
  const employeesList = mountEmployeesCoverage();

  if (!param) {
    return employeesList;
  }

  const listObj = param.id
    ? employeesList.find((employee) => employee.id === param.id)
    : employeesList.find((employee) => employee.fullName
      .includes(param.name));

  if (!listObj) {
    throw new Error('Informações inválidas');
  }

  return listObj;
};
// Principal função de retorno e principal responsável por checar o parâmetro injetado e retornar o objeto desejado, caso algum valor não esteja definido, um erro será lançado.

module.exports = getEmployeesCoverage;
