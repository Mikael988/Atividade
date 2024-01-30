const promptSync = require('prompt-sync');
const prompt = promptSync();

let operando1 = parseFloat(prompt("Digite o primeiro operando:"));
let operando2 = parseFloat(prompt("Digite o segundo operando:"));
let operacao = prompt("Escolha uma operação: +, -, *, /");

let resultado;

switch (operacao) {
  case "+":
    resultado = operando1 + operando2;
    break;
  case "-":
    resultado = operando1 - operando2;
    break;
  case "*":
    resultado = operando1 * operando2;
    break;
  case "/":
    resultado = operando1 / operando2;
    break;
  default:
    console.log("Operação inválida.");
}

console.log('Resultado: ${resultado}');