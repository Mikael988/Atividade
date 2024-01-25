const promptSync = require('prompt-sync');
const prompt = promptSync();

let nome = prompt('Digite seu nome: ');
let salario = Number(prompt('Digite seu salario: '));

let aumento = salario * 1.10
console.log('O seu aumento sera de: ' + aumento)