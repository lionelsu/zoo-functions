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

module.exports = { calculateEntry, countEntrants };
