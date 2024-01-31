const promptSync = require('prompt-sync');
const prompt = promptSync();

let valor = parseInt(prompt("Digite um número para a tabuada:"));

if (valor) {
  console.log(`Tabuada do ${valor}:`);
  for (i=1; i<=10; i++) {
    calculo=(`${valor * i}`)
    console.log(`${valor} * ${i} = ${calculo}`);
    }
} else {
  console.log("digite um número correto.");
}
