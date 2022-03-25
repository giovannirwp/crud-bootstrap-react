import React from "react";

import { HashRouter, Switch, Route } from "react-router-dom";
import CadastroProduto from "./Produtos/Cadastro";
import Home from "./Home";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cadastro-produtos" component={CadastroProduto} />
      </Switch>
    </HashRouter>
  );
};
