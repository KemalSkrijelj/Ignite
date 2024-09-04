import React from "react";
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyles";
import { Route, Routes } from "react-router-dom";
import GameDetail from "./components/GameDetail";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Home />
    </div>
  );
}

export default App;
