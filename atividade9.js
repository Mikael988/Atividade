const promptSync = require('prompt-sync');
const prompt = promptSync();

let num1 = parseFloat(prompt("Digite o primeiro número: "));
let num2 = parseFloat(prompt("Digite o segundo número: "));
let codigo = parseInt(prompt("Digite o código de seleção (1, 2 ou 3): "));
let resultado;

if (codigo === 1) {
    resultado = num1 + num2;
} else if (codigo === 2) {
    resultado = num1 * num2;
} else if (codigo === 3) {
    if (num2 !== 0) {
        resultado = num1 / num2;
    } else {
        console.log("Divisão por zero não é permitida.");
    }
} else {
    console.log("Código de seleção inválido.");
}

if (resultado !== undefined) {
    console.log(`O resultado é: ${resultado}`);
}