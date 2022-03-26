import React, { Component } from "react";

export default class Message extends Component {
  render() {
    return (
      <div className="alert alert-dismissible alert-success">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
        ></button>
        <strong>Bem feito!</strong>
        <strong className="alert-link">Cadastro realizado com sucesso!</strong>.
      </div>
    );
  }
}
