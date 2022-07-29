const getOpeningHours = require('../src/getOpeningHours');
const data = require('../data/zoo_data');

describe('Testes da função getOpeningHours', () => {
  const closed = 'The zoo is closed';
  const open = 'The zoo is open';
  it('Retorna um objeto contendo os dias da semana e horas que o zoológico abre e fecha quando não é passado parâmetros', () => {
    const obj = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(obj);
  });

  it('Retorna "The zoo is closed" para os argumentos Monday e 09:00-AM', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(closed);
  });

  it('Retorna "The zoo is open" para os argumentos Tuesday e 09:00-AM', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe(open);
  });

  it('Retorna "The zoo is closed" Para os argumentos Wednesday e 09:00-PM', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe(closed);
  });

  it('Lança um erro com a frase "The day must be valid. Example: Monday" quando o dia for inválido', () => {
    expect(() => getOpeningHours('batatasday', '09:00-AM')).toThrowError(new Error('The day must be valid. Example: Monday'));
  });

  it('Lança um erro com a frase "The hour must be between 0 and 12" quando a hora for inválida', () => {
    expect(() => getOpeningHours('Wednesday', '77:00-PM')).toThrowError(new Error('The hour must be between 0 and 12'));
  });

  it('Lança um erro com a frase "The minutes must be between 0 and 59" quando os minutos forem inválidos', () => {
    expect(() => getOpeningHours('Wednesday', '9:88-PM')).toThrowError(new Error('The minutes must be between 0 and 59'));
  });

  it('Lança um erro com a frase "The abbreviation must be \'AM\' or \'PM\'" quando a abreviação for inválida', () => {
    expect(() => getOpeningHours('Tuesday', '09:00-JJ')).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('Lança um error com a frase "The minutes should represent a number" quando um caractere é passado no lugar de algum numero nos minutos', () => {
    expect(() => getOpeningHours('Tuesday', '09:s0-JJ')).toThrowError(new Error('The minutes should represent a number'));
  });

  it('Testa se a conversão das horas em close é feita para 0 e o código funciona corretamente com um horário em que o parque está fechado', () => {
    const { hours } = data;
    hours.Friday.close = 12;
    expect(getOpeningHours('Friday', '12:00-AM')).toBe(closed);
  });

  it('Testa se a conversão das horas em open é feita para 0 e o código funciona corretamente com um horário em que o parque está aberto', () => {
    const { hours } = data;
    hours.Tuesday.open = 12;
    expect(getOpeningHours('Tuesday', '12:00-AM')).toBe(open);
  });
});
