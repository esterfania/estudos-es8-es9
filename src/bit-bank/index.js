import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ester", "148.106.377-43");
const contaCorrente1 = new ContaCorrente("0001", cliente1);
contaCorrente1.depositar(100);

const cliente2 = new Cliente("Alice", "148.106.377-43");
const contaCorrente2 = new ContaCorrente("0001", cliente2);

contaCorrente1.transferir(70, contaCorrente2);
console.log(contaCorrente1);
console.log(contaCorrente2);
console.log(ContaCorrente.numeroDeContas);
