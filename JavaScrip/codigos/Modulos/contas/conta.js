import { client } from '../client.js'
export class conta {
  // class abstrata
  static contadorDeConsta = 0 //valor estatico quando se pode usar em outras classes sem declarar
  constructor(client, agencia, valor) {
    if (this.constructor == conta) {
      //cria uma verificacao para que nao posa usar essa class diretamete
      throw new Error(
        'Nao e permitido iniciar a classe conta diretamente // class abstrata //'
      )
    }

    this._client = client
    this._agencia = agencia
    this._saldo = valor
    conta.contadorDeConsta += 1
  }
  set client(newClient) {
    // verifica se esta sendo criado um objeto do tipo cliente
    if (newClient instanceof client) {
      this._client = newClient
    }
  }
  get client() {
    //retorna os valores contidos em client caso nao seja feito o get, nao tem como ver o valor do objeto
    return this._client
  }

  get saldo() {
    return this._saldo
  }

  sacar(valor) {
    let taxa = 1
    return this._sacar(valor, taxa)
  }

  _sacar(valor, taxa) {
    const valorSacado = valor * taxa

    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado
      return valorSacado
    }
    return 0
  }

  deposito(valor) {
    if (valor <= 0) {
      return
    }
    this._saldo += valor
  }

  tranferir(valor, conta) {
    if (valor < 0) return
    if (valor >= this._saldo) return
    const valorSacado = this.sacar(valor)
    conta.deposito(valorSacado)
  }
  // transferenciaParaCorrente(valor, conta) {
  //   if (valor < 0) return
  //   if (valor >= this._saldo) return
  //   const valorSacado = this.sacar(valor)
  //   conta.contaCorrente.deposito(valorSacado)
  // }
}
