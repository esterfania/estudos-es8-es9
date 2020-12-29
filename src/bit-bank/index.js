import { Cliente } from "./Cliente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Ester", "178.193.338-45");
const contaPoupanca = new ContaPoupanca(50, "0001", cliente1);
const contaCorrente = new ContaCorrente(199, "0001", cliente1);
const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(1000);
contaSalario.sacar(200);
console.log(contaSalario);
