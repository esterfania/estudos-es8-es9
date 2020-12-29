import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
  // sobrescreve o comportamento de sacar
  sacar(valor) {
    const taxa = 1.2;
    super._sacar(taxa, valor);
  }
}
