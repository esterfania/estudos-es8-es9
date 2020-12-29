import { Cliente } from "./Cliente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ester", "148.106.377-43");
const contaPoupanca = new ContaPoupanca(0, "0001", cliente1);

const contaCorrente = new ContaCorrente(199, "0001", cliente1);

console.log(contaPoupanca);
contaCorrente.sacar(100);
console.log(contaCorrente)
console.log(ContaCorrente.numeroDeContas);
