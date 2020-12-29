import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
  static numeroDeContas = 0;
  constructor(...args) {
    super(...args);
    ContaCorrente.numeroDeContas += 1;
  }
  // sobrescreve o comportamento de sacar
  sacar(valor) {
    const taxa = 1.1;
    super._sacar(taxa, valor);
  }
}
