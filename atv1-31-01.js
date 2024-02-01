function calcPct(x, y) {
    let porcentagem = (y / x) * 100;
    return `${porcentagem.toFixed(2)}% de ${x} é ${y}`;
}
  let x = 40;
  let y = 10;
  let resultado = calcPct(x, y);
  
  console.log(resultado);