import { Funcionario } from "../Funcionario/Funcionario.js";

export class Autenticacao {
  static login(autenticavel, senha) {
    //obriga o autenticavel a implementar o método autenticar (interface)
    if (Autenticacao.ehAutenticavel(autenticavel)) {
      return autenticavel.autenticar(senha);
    }
    return false;
  }
  static ehAutenticavel(autenticavel) {
    return (
      "autenticar" in autenticavel &&
      autenticavel.autenticar instanceof Function
    );
  }
}
