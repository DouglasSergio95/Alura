export class client {
  constructor(nome, rg) {
    this.nome = nome
    this._rg = rg
  }
  get rg() {
    return this._rg
  }
  autenticar() {
    return false
  }
}
