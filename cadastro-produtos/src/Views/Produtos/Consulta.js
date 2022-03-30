import React, { Component } from "react";
import produtoService from "../../app/produtoService";

export default class Consulta extends Component {
  state = {
    produtos: [],
  };

  constructor() {
    super();
    this.service = new produtoService();
  }

  componentDidMount() {
    const produtos = this.service.obterProdutos();
    this.setState({ produtos });
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          Consulta Produtos
        </div>
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Sku</th>
                <th scope="col">Preço</th>
                <th scope="col">Fornecedor</th>
                <th scope="col"></th>
              </tr>
            </thead>

            <tbody>
              {this.state.produtos.map((produto, index) => {
                return (
                  <tr key={index}>
                    <td>{produto.nome}</td>
                    <td>{produto.sku}</td>
                    <td>{produto.preco}</td>
                    <td>{produto.fornecedor}</td>
                    <td></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
