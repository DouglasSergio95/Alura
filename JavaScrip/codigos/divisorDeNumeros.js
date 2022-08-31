// prgrama para mostrar todos os numeros separados

function divisorDNumeros(exem) {
  //nome da funcao e o valor a ser recebido da mesma
  if (exem < 0 ? (contador = -1 * exem) : (contador = exem))
    // se o valor for negativo converte em porsitivo para o contador
    for (var x = 0; contador > 0; x++) {
      // conta quantos numeros foram serao utliados para a divisao
      contador = Math.trunc(contador / 10)
    }

  for (y = x; y > 0; y--) {
    //faz a repeticao
    var i = 10 ** (y - 1) // faz a elevacao do numero de contador para usar na divisao
    var resultadoNumerico = Math.trunc((exem / i) % 10) //pega os valores de cada casa decimal

    console.log(resultadoNumerico)
  }
  return true
}

console.log(divisorDNumeros(452277880)) //chama a funcao e passa um valor para ela
