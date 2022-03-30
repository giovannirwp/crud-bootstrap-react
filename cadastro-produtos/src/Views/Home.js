import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className="jumbotron">
      <h1 className="display-3">Bem vindo</h1>
      <p className="lead">
        Este é seu sistema, ultilize a barra de navegação para acessar as paginas
      </p>
      <hr className="my-4" />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <p className="lead">
        <Link className="btn btn-primary btn-lg" to="/cadastro-produtos" role="button">
          Cadastrar
        </Link>
      </p>
    </div>
  );
}

export default Home;
