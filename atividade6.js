const promptSync = require('prompt-sync');
const prompt = promptSync();

let ValorA = Number(prompt('Digite o valor A: '));
let ValorB = Number(prompt('Digite o valor B: '));
let C;

if (ValorA === ValorB){
    C = ValorA + ValorB;
} else {
    C = ValorA * ValorB;
}
console.log('O ValorC será: ' + C)