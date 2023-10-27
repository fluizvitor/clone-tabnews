const calculadora = require("../models/calculadora.js");

test("Nome do teste", callbackFunction);
function callbackFunction() {
  console.log("Essa função foi chamada!");
}

test("Espero que 1 seja 1", () => {
  expect(1).toBe(1);
});

test("somar 2 + 2 = 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 10 + 10 = 20", () => {
  const resultado = calculadora.somar(10, 10);
  expect(resultado).toBe(20);
});

test("subtração 10 - 9 = 1", () => {
  const resultado = calculadora.subtrair(10, 9);
  expect(resultado).toBe(1);
});

test("subtração 10 - 11 = -1", () => {
  const resultado = calculadora.subtrair(10, 11);
  expect(resultado).toBe(-1);
});

test("multiplicando 5 x 2 = 10", () => {
  const resultado = calculadora.multiplicar(5, 2);
  expect(resultado).toBe(10);
});

test("multiplicando 5 x 0 = 0", () => {
  const resultado = calculadora.multiplicar(5, 0);
  expect(resultado).toBe(0);
});

test("porcentagem 10% de 100 = 10", () => {
  const resultado = calculadora.porcentagem(10, 100);
  expect(resultado).toBe(10);
});

test("porcentagem 100% de 0 = 0", () => {
  const resultado = calculadora.porcentagem(100, 0);
  expect(resultado).toBe(0);
});
