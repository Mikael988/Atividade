const promptSync = require('prompt-sync');
const prompt = promptSync();

let sexo = prompt("Digite M para Masculino ou F para Feminino:");
let pesoUsuario = parseFloat(prompt("Digite o peso do usuário:"));

let pesoIdeal;

switch (sexo.toUpperCase()) {
  case "M":
    pesoIdeal = 72.7 * pesoUsuario - 58;
    console.log('Peso ideal para um homem: ${pesoIdeal.toFixed(2)} kg');
    break;
  case "F":
    pesoIdeal = 62.1 * pesoUsuario - 44.7;
    console.log('Peso ideal para uma mulher: ${pesoIdeal.toFixed(2)} kg');
    break;
  default:
    console.log("Opção de sexo inválida.");
}