// Importa a função que será testada
const { validaJson } = require('../../ScriptsJS/getJsonBacen/getJsonBacen.js');

// Testa o cenário em que jsonBacen é fornecido
test('Testa se validaJson imprime "top" quando jsonBacen é fornecido', () => {
  // Suprimir a saída do console.log
  console.log = jest.fn();

  // Chama a função com jsonBacen verdadeiro
  validaJson(true);

  // Verifica se o console.log foi chamado com o argumento correto
  expect(console.log).toHaveBeenCalledWith('top');
});

// Testa o cenário em que jsonBacen não é fornecido
test('Testa se validaJson imprime "nada top" quando jsonBacen não é fornecido', () => {
  // Suprimir a saída do console.log
  console.log = jest.fn();

  // Chama a função com jsonBacen falso (ou não fornecido)
  validaJson(false);

  // Verifica se o console.log foi chamado com o argumento correto
  expect(console.log).toHaveBeenCalledWith('nada top');
});