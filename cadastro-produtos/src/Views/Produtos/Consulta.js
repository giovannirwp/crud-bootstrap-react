import React, { Component } from "react";
import produtoService from "../../app/produtoService";
import { withRouter } from "react-router-dom";
import Card from "../../Components/Card";
import ProdutosTable from "./ProdutosTable";

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
        <ProdutosTable
          produtos={this.state.produtos}
          editarAction={this.preparaEditar}
          deletarAction={this.delete}
        />
      </Card>
    );
  }
}

export default withRouter(Consulta);
