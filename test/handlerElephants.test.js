const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Retorna 4 quando o argumento for count', () => {
    expect(handlerElephants('count')).toEqual(4);
  });

  it('Retorna um array que contém Jefferson quando o argumento for "names"', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });

  it('Retorn um numero proximo a 10.5 quando o argumento for averageAge', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });

  it('Retorna null quando o parametrô for diferente do esperado', () => {
    expect(handlerElephants('batatinha')).toBeNull();
  });

  it('Retorna undefined se não for passado parâmetro', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Retorna "Parâmetro inválido, é necessário uma string" quando o parâmetro não for uma string', () => {
    expect(handlerElephants(7)).toEqual('Parâmetro inválido, é necessário uma string');
  });

  it('Retorna a chave do objeto quando o parâmetro corresponder a chave', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
});
