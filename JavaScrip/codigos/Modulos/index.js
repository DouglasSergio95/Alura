import { Gerente } from './funcionarios/gerente.js'
import { Diretor } from './funcionarios/diretor.js'
import { SistemaDeAutenticacao } from './SistemaDeAutenticacao.js'
import { client } from './client.js'

const diretor = new Diretor('Douglas', 45353432, 1000)
const gerente = new Gerente('Sara', 45353432, 2000)

diretor.cadastrarSenha('1234')
gerente.cadastrarSenha('1242')

const autenteicacaoDiretor = SistemaDeAutenticacao.login(diretor, '1234')
const autenticacaoGerente = SistemaDeAutenticacao.login(gerente, '1242')

console.log(autenticacaoGerente, autenteicacaoDiretor)
console.log(diretor)
