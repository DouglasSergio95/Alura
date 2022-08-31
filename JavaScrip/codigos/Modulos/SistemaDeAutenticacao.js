export class SistemaDeAutenticacao {
  static login(autenticavel, senha) {
    if (SistemaDeAutenticacao.ehAutenticavel(autenticavel)) {
      //verificacao para ver se o sistema tem o metodo autenticar dentro do objeto
      return autenticavel.autenticar(senha) // retorna o booleano do metodo autenticar
    }
    return false
  }
  static ehAutenticavel(autenticavel) {
    return (
      'autenticar' in autenticavel &&
      autenticavel.autenticar instanceof Function
    ) //procura o nome da chave/ metodo dentro do objeto autenticavel e verifica se a chave dentro do objeto e uma funcao ou nao
  }
}
