import { funcionarios } from './funcionarios.js'

export class Gerente extends funcionarios {
  constructor(nome, cpf, salario) {
    super(nome, cpf, salario)
    this._bonificacao = 1.1
  }
}
