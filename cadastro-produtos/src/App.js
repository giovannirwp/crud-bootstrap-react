import React from "react";
import { HashRouter } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Rotas from "./Views/Rotas";

function App() {
  return (
    <div className="container">
      <HashRouter>
        <NavBar />
        <Rotas />
      </HashRouter>
    </div>
  );
}

export default App;
