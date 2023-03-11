const data = require('../data/zoo_data');

const getEmployeeName = (employee) =>
  `${employee.firstName} ${employee.lastName}`;

const getSpecies = (responsible) =>
  responsible.map((speciesId) =>
    data.species.find((species) => species.id === speciesId).name);

const getSpeciesLocations = (responsible) =>
  responsible.map((speciesId) =>
    data.species
      .find((species) => species.id === speciesId).location);

const getEmployeesList = () => {
  const result = data.employees.map((employee) => {
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

  return result;
};

const getEmployeesCoverage = (param) => {
  const employeesList = getEmployeesList();

  if (!param) {
    return employeesList;
  }

  const result = param.id
    ? employeesList.find((employee) => employee.id === param.id)
    : employeesList.find((employee) => employee.fullName
      .includes(param.name));

  if (!result) {
    throw new Error('Informações inválidas');
  }

  return result;
};

module.exports = getEmployeesCoverage;
