import { funcionarios } from './funcionarios.js'

export class Diretor extends funcionarios {
  constructor(nome, cpf, salario) {
    super(nome, cpf, salario)
    this._bonificacao = 1.2
  }
}
