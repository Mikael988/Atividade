// Função para calcular o preço do imóvel
function calcularImovel(metragem, quartos) {
    let precoMetroQuadrado = 3000;
    let fatorQuartos;
  
    // Definir o fator com base no número de quartos
    if (quartos === 1) {
      fatorQuartos = 1;
    } else if (quartos === 2) {
      fatorQuartos = 1.2;
    } else if (quartos === 3) {
      fatorQuartos = 1.5;
    } else {
      console.log("Número de quartos não suportado.");
      return 0; // Valor padrão caso o número de quartos não seja suportado
    }
  
    // Calcular o preço total do imóvel
    let preco = metragem * precoMetroQuadrado * fatorQuartos;
  
    return preco;
  }
  
  // Exemplo de uso da função
  let metragem = 123;
  let quartos = 3;
  let preco = calcularImovel(metragem, quartos);
  
  console.log(`A casa custa R$ ${preco}`);