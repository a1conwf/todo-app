import React from "react";
import ThemeContext from "./ThemeContext";

import Header from "./components/Header/Header";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

import "./App.scss";

const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [themeDark, setThemeDark] = React.useState(true);
  const [filterStatus, setFilterStatus] = React.useState("all");
  const [filteredTodos, setFilteredTodos] = React.useState(todos);

  React.useEffect(() => {
    const handleFilter = () => {
      switch (filterStatus) {
        case "active":
          return setFilteredTodos(todos.filter((todo) => !todo.isCompleted));
        case "completed":
          return setFilteredTodos(todos.filter((todo) => todo.isCompleted));
        default:
          return setFilteredTodos(todos);
      }
    };
    handleFilter();
  }, [todos, filterStatus]);

  React.useEffect(() => {
    if (themeDark) {
      document.querySelector("body").classList.remove("light");
      document.querySelector("body").classList.add("dark");
    } else {
      document.querySelector("body").classList.remove("dark");
      document.querySelector("body").classList.add("light");
    }
  }, [themeDark]);

  return (
    <div className="App">
      <ThemeContext.Provider value={{ themeDark, setThemeDark }}>
        <Header />
        <div className="container">
          <main>
            <TodoForm setTodos={setTodos} />
            <TodoList
              todos={todos}
              setTodos={setTodos}
              filteredTodos={filteredTodos}
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
            />
          </main>
        </div>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
