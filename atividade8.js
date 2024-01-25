const promptSync = require('prompt-sync');
const prompt = promptSync();

let nomeAluno = prompt("Digite o nome do aluno: ");
let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let nota3 = parseFloat(prompt("Digite a terceira nota: "));
let media = (nota1 + nota2 + nota3) / 3;
let situacao = (media >= 8) ? "Aprovado" : "Reprovado";

console.log(`Aluno: ${nomeAluno}\nMédia: ${media}\nSituação: ${situacao}`);