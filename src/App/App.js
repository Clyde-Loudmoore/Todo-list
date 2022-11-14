import React from "react";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

import TodoContainer from "./App.styles";

const App = () => {
  // const [todos, setTodos] = React.useState(
  //   JSON.parse(localStorage.getItem("todos")) || []
  // );
  // const [filteredTodos, setFilteredTodos] = React.useState("all");

  // React.useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  // const todoFilter = React.useMemo(() => {
  //   if (filteredTodos === "complited") {
  //     return todos.filter((item) => item.status === true);
  //   }
  //   if (filteredTodos === "active") {
  //     return todos.filter((item) => item.status === false);
  //   }
  //   return todos;
  // }, [filteredTodos, todos]);

  return (
    <TodoContainer>
      <Header />
      <Main
      // onClick={setFilteredTodos}
      />
      <Footer />
    </TodoContainer>
  );
};

export default App;
