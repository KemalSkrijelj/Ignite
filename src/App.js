import React from "react";
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyles";
import { Route, Routes } from "react-router-dom";
import GameDetail from "./components/GameDetail";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
        <Home />
    </div>
  );
}

export default App;
