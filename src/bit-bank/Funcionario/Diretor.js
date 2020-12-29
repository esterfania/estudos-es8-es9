import { Autenticacao } from "../auth/autenticacao.js";
import { Funcionario } from "./Funcionario.js";

export class Diretor extends Funcionario {
  constructor(...args) {
    super(...args);
    this._bonificacao = 2;
  }
}
