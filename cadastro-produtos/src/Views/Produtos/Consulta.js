import React, { Component } from "react";
import produtoService from "../../app/produtoService";
import { withRouter } from "react-router-dom";
import Card from "../../Components/Card";

class Consulta extends Component {
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

  preparaEditar = (sku) => {
    console.log("sku para editar: ", sku);
    this.props.history.push(`/cadastro-produtos/${sku}`);
  };

  delete = (sku) => {
    const produtos = this.service.deletar(sku);
    this.setState({ produtos });
  };

  render() {
    return (
      <Card header="Consulta Produtos">
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
                  <td>
                    <button
                      onClick={() => this.preparaEditar(produto.sku)}
                      className="btn btn-primary"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => this.delete(produto.sku)}
                      className="btn btn-danger"
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    );
  }
}

export default withRouter(Consulta);
