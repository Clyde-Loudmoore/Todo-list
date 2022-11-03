import React from "react";

import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

import "./App.css";

const App = () => {
  return (
    <div className="todo__container">
      <Header />
      <Main />
    </div>
  );
};

export default App;
