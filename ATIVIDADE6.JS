const promptSync = require('prompt-sync');
const prompt = promptSync();

let numeroCriancasNascidas = parseInt(prompt("Digite o número de crianças nascidas:"));
let numeroObitos = parseInt(prompt("Digite o número de óbitos:"));
let numeroHabitantes = parseInt(prompt("Digite o número de habitantes:"));

let taxaNatalidade = (numeroCriancasNascidas * 1000) / numeroHabitantes;
let taxaMortalidade = (numeroObitos * 1000) / numeroHabitantes;

console.log('Taxa de Natalidade: ${taxaNatalidade.toFixed(2)} por mil habitantes');
console.log('Taxa de Mortalidade: ${taxaMortalidade.toFixed(2)} por mil habitantes');