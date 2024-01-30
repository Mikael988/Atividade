const promptSync = require('prompt-sync');
const prompt = promptSync();

let valorProduto = parseFloat(prompt("Digite o valor do produto:"));
let formaPagamento = parseInt(prompt("Digite a forma de pagamento (1 para à vista, 2 para à prazo):"));

let valorFinal;

switch (formaPagamento) {
  case 1:
    valorFinal = valorProduto - (valorProduto * 0.1);
    break;
  case 2:
    valorFinal = valorProduto;
    break;
  default:
    console.log("Forma de pagamento inválida.");
}

console.log('Valor final a ser pago: ${valorFinal.toFixed(2)}');