const handlerElephants = require('../src/handlerElephants');

describe('Cobertura de testes para a função handlerElephants', () => {
  it('1 - deve retornar undefinded caso nenhum parâmetro seja passado e null caso seja passado um parâmetro inexistente', () => {
    expect(handlerElephants()).toBeUndefined();

    expect(handlerElephants('catapimbas')).toBeNull();
  });

  it('2 - deve retornar a string "Parâmetro inválido, é necessário uma string" caso o parâmetro passado não seja uma string', () => {
    expect(handlerElephants(0)).toEqual('Parâmetro inválido, é necessário uma string');
  });

  it('3 - deve retornar a quantidade de elefantes caso o parâmetro passado seja "count"', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('4 - deve retornar um array com os nomes de todos os elefantes caso o parâmetro seja "names"', () => {
    const listaDeElefantes = handlerElephants('names');
    // chamada da função para capturar seu retorno em uma lista e comparar com o uso da função no teste abaixo o retorno deve conter ["Ilana", "Orval", "Bea", "Jefferson"].
    expect(handlerElephants('names')).toEqual(listaDeElefantes);
    // deve retornar a lista de nomes completa ["Ilana", "Orval", "Bea", "Jefferson"]
    expect(handlerElephants('names')).toContain('Ilana');
    // deve conter o nome Ilana
    expect(handlerElephants('names')).toContain('Orval');
    // deve conter o nome Orval
    expect(handlerElephants('names')).toContain('Bea');
    // deve conter o nome Bea
    expect(handlerElephants('names')).toContain('Jefferson');
    // deve conter o nome Jefferson
  });

  it('5 - deve retronar a média da idade dos elefantes caso o parâmetro passado seja "averageAge"', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });

  it('6 - deve retornar a localização dos elefantes caso o parâmetro passado seja "location"', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  it('7 - deve retornar a popularidade dos elefantes caso o parâmetro passado seja "popularity"', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });

  it('8 - deve retornar uma lista com a relação de dias em que é possível visitar os elefantes, caso o parâmetro passado seja "availability"', () => {
    const listaVisitas = handlerElephants('availability');
    // chamada da função para capturar a lista e comparar com a chamada em nossos testes, a lista retornada deve conter ["Friday", "Saturday", "Sunday", "Tuesday"]
    expect(handlerElephants('availability')).toEqual(listaVisitas);
    // deve retornar ["Friday", "Saturday", "Sunday", "Tuesday"]
    expect(handlerElephants('availability')).toContain('Friday');
    // deve conter a disponibilidade Friday
    expect(handlerElephants('availability')).toContain('Saturday');
    // deve conter a disponibilidade Saturday
    expect(handlerElephants('availability')).toContain('Sunday');
    // deve conter a disponibilidade Sunday
    expect(handlerElephants('availability')).toContain('Tuesday');
    // deve conter a disponibilidade Tuesday
    expect(handlerElephants('availability')).not.toContain('Monday');
    // não deve conter a disponibilidade Monday
  });
});
