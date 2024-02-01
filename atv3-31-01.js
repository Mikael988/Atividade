const promptSync = require('prompt-sync');
const prompt = promptSync();

// Função para calcular o quadrado de um número
function calcularQuadrado() {
    // Obter um número do usuário
    let numero = parseFloat(prompt("Digite um número:"));
  
    // Verificar se o número é válido
    if (!isNaN(numero)) {
      // Calcular o quadrado
      let quadrado = numero * numero;
  
      // Exibir o resultado
      console.log(`O quadrado de ${numero} é ${quadrado}`);
    } else {
      console.log("Por favor, digite um número válido.");
    }
  }
  
  // Chamar a função para calcular o quadrado
  calcularQuadrado();