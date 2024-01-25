const promptSync = require('prompt-sync');
const prompt = promptSync();

let precoAvista = parseFloat(prompt("Digite o preço à vista do produto: "));
let parcelas = parseInt(prompt("Digite o número de parcelas (3 ou 5): "));
let totalPagar;

if (parcelas === 3) {
    totalPagar = precoAvista + (precoAvista * 0.10);
} else if (parcelas === 5) {
    totalPagar = precoAvista + (precoAvista * 0.20);
} else {
    console.log("Número de parcelas inválido.");
}

console.log(`O total a pagar é: R$ ${totalPagar.toFixed(2)}`);