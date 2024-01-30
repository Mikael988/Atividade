const promptSync = require('prompt-sync');
const prompt = promptSync();

let nomeHospede = prompt("Digite o nome do hóspede:");
let opcao = prompt('Olá, ${nomeHospede}! Escolha uma opção:');
`1. Fazer Check-in
2. Chamar serviço de quarto
3. Fazer pedido
4. Fazer Check-out`

switch (opcao) {
  case "1":
    console.log("Check-in realizado com sucesso!");
    break;
  case "2":
    console.log("Serviço de quarto solicitado.");
    break;
  case "3":
    console.log("Pedido realizado com sucesso.");
    break;
  case "4":
    console.log("Check-out concluído. Obrigado pela estadia!");
    break;
  default:
    console.log("Opção inválida.");
}