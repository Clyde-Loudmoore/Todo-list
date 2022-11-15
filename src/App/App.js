import React from "react";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

import TodoContainer from "./App.styles";

const App = () => {
  // const [todos, setTodos] = React.useState(
  //   JSON.parse(localStorage.getItem("todos")) || []
  // );

  // React.useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  return (
    <TodoContainer>
      <Header />
      <Main />
      <Footer />
    </TodoContainer>
  );
};

export default App;
