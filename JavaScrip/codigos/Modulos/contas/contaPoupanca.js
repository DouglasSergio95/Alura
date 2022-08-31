import { conta } from './conta.js'

export class contaPoupanca extends conta {
  static contadorDeConstaPoupanca = 0

  constructor(client, agencia, valor) {
    super(client, agencia, valor)
  }
}
