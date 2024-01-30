const promptSync = require('prompt-sync');
const prompt = promptSync();

let valorCompra = parseFloat(prompt("Digite o valor total da compra:"));
let codigoCliente = parseInt(prompt("Digite o código do cliente (1 para comum, 2 para funcionário, 3 para vip):"));

let desconto;

switch (codigoCliente) {
  case 1:
    desconto = 0;
    break;
  case 2:
    desconto = 0.1;
    break;
  case 3:
    desconto = 0.05;
    break;
  default:
    console.log("Código de cliente inválido.");
}

let valorFinal = valorCompra - ('valorCompra * desconto');

console.log('Valor a ser pago: ${valorFinal.toFixed(2)}');