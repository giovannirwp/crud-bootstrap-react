import React from "react";

import { HashRouter, Switch, Route } from "react-router-dom";
import CadastroProduto from "./Produtos/Cadastro";
import Home from "./Home";
import Consulta from "./Produtos/Consulta";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Switch>
      <Route exact path="/cadastro-produtos/:sku?" component={CadastroProduto} />
      <Route exact path="/consulta-produtos" component={Consulta} />
      <Route exact path="/" component={Home} />

    </Switch>
  );
};
