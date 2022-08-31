import { conta } from './conta.js'

export class contaCorrente extends conta {
  static contadorDeConstasCorrente = 0

  constructor(client, agencia, valor) {
    super(client, agencia, valor)
  }

  sacar(valor) {
    const taxa = 1.1
    return super._sacar(valor, taxa)
  }
}
