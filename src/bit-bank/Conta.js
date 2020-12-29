import { Cliente } from "./Cliente.js";

export class Conta {
  //   _saldo = 0; atributo privado que funciona a partir da versão 12+ do node, o atributo não é listado
  // _saldo é uma convenção para representar props privadas, porém mesmo assim possibilita a alteração
  constructor(saldoInicial, agencia, cliente) {
    this._saldo = saldoInicial;
    this.agencia = agencia;
    this.cliente = cliente;
  }
  set cliente(cliente) {
    if (cliente instanceof Cliente) {
      this._cliente = cliente;
    }
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  depositar(valor) {
    if (valor < 0) return;
    this._saldo += valor;
  }

  sacar(valor) {
    const taxa = 1;
    return this._sacar(taxa, valor);
  }
  _sacar(taxa, valor) {
    const valorSacado = taxa * valor;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }
    return 0;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
