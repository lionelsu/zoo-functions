const getOpeningHours = require('../src/getOpeningHours');

describe('Cobertura de testes para a função getOpeningHours', () => {
  it('1 - deve retornar o objeto defaultObj caso a função seja chamada sem nenhum parâmetro', () => {
    const defaultObj = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(defaultObj);
  });

  const zooClosed = 'The zoo is closed';
  const zooOpened = 'The zoo is open';
  test.each([
    ['Monday', '09:00-AM', zooClosed],
    ['Tuesday', '09:00-AM', zooOpened],
    ['Wednesday', '09:00-PM', zooClosed],
    ['Thursday', '09:00-PM', zooClosed],
    ['Friday', '10:00-AM', zooOpened],
    ['Saturday', '10:00-AM', zooOpened],
    ['Sunday', '10:00-AM', zooOpened],
    ['Thu', '09:00-AM', 'The day must be valid. Example: Monday'],
    ['Friday', '09:00-ZM', 'The abbreviation must be \'AM\' or \'PM\''],
    ['Saturday', 'C9:00-AM', 'The hour should represent a number'],
    ['Sunday', '09:c0-AM', 'The minutes should represent a number'],
    ['Tuesday', '09:99-AM', 'The minutes must be between 0 and 59'],
    ['Wednesday', '99:09-PM', 'The hour must be between 0 and 12'],
  ])('Sequência: %# - deve retornar a string informando se o Zoo está aberto, fechado ou lançar um erro dependendo dos parâmetros passados, ex: "%s", "%s" deve retornar "%s"', (param1, param2, expected) => {
    try {
      expect(getOpeningHours(param1, param2)).toBe(expected);
    } catch (err) {
      expect(() => getOpeningHours(param1, param2)).toThrow(expected);
    }
  });
});
