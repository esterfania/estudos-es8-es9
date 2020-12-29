import { Cliente } from "./Cliente.js";
import { ContaPoupanca, ContaCorrente, ContaSalario } from "./Conta/index.js";
import { Autenticacao } from "./auth/autenticacao.js";
import { Diretor, Gerente } from "./Funcionario/index.js";

const diretor = new Diretor("Rodrigo", 1000, 123123123);
diretor.cadastrarSenha("123");
const diretorLogado = Autenticacao.login(diretor, "123");
console.log(diretorLogado);

const cliente1 = new Cliente("Ester", "178.193.338-45");
const contaPoupanca = new ContaPoupanca(50, "0001", cliente1);
const contaCorrente = new ContaCorrente(199, "0001", cliente1);
const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(1000);
contaSalario.sacar(200);
console.log(contaSalario);

const gerente = new Gerente("Fernanda", 500, 123123212);
gerente.cadastrarSenha("1233");
const gerenteLogado = Autenticacao.login(gerente, "1233");
console.log(gerenteLogado);
