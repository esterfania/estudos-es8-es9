import { Cliente } from "../Cliente.js";
export class Conta {
  //   _saldo = 0; atributo privado que funciona a partir da versão 12+ do node, o atributo não é listado
  // _saldo é uma convenção para representar props privadas, porém mesmo assim possibilita a alteração
  constructor(saldoInicial, agencia, cliente) {
    if (this.constructor === Conta) {
      throw new Error(
        "Você não deve instanciar um objeto do tipo conta, pois é uma classe abstrata"
      );
    }
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
  //Método abstrato
  sacar(valor) {
    throw new Error("O método sacar deve ser implementado, pois é abstrato");
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
