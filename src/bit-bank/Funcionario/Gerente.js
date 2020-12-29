import { Funcionario } from "./Funcionario.js";

export class Gerente extends Funcionario {
  constructor(...args) {
    super(...args);
    this._bonificacao = 1.1;
  }
}
