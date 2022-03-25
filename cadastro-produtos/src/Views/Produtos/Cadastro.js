import React, { Component } from "react";

class CadastroProduto extends Component {
  state = {
    nome: "",
    sku: "",
    descricao: "",
    preco: 0,
    fornecedor: "",
  };

  handleChange = ({ target }) => {
    // const valor = target.value;
    const nomeDoCampo = target.name;
    this.setState({
      [nomeDoCampo]: target.value,
    });
  };

  onSumbmit = (event) => {
    console.log(this.state);
  }

  render() {
    const { nome, sku, descricao, preco, fornecedor } = this.state;
    return (
      <div className="card">
        <div className="card-header">Cardastro de produto</div>
        <div className="card-body">
          <div className="row mt-3">
            <div className="col-md-6">
              <label>Nome: *</label>
              <input
                type="text"
                name="nome"
                value={nome}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            <div className="col-md-6">
              <label>Sku: *</label>
              <input
                type="text"
                name="sku"
                value={sku}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-12">
              <label>Descricção: *</label>
              <textarea
                value={descricao}
                name="descricao"
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
          </div>

          <div className="row mt-3 mb-3">
            <div className="col-md-6">
              <label>Preço: *</label>
              <input
                value={preco}
                name="preco"
                type="text"
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            <div className="col-md-6">
              <label>Fornecedor: *</label>
              <input
                type="text"
                name="fornecedor"
                onChange={this.handleChange}
                value={fornecedor}
                className="form-control"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-1">
              <button className="btn btn-success" onClick={this.onSumbmit}>Salvar</button>
            </div>

            <div className="col-md-1">
              <button className="btn btn-primary">Limpar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CadastroProduto;
