import React from "react";
import ThemeContext from "../../ThemeContext";

import TodoFilter from "../TodoFilter/TodoFilter";
import TodoItem from "../TodoItem/TodoItem";

import styles from "./TodoList.module.scss";

const TodoList = ({
  todos,
  setTodos,
  filteredTodos,
  filterStatus,
  setFilterStatus,
}) => {
  const { themeDark } = React.useContext(ThemeContext);
  const [unCompletedTodos, setUncompletedTodos] = React.useState([]);

  React.useEffect(() => {
    const todosLeft = todos.filter((todo) => !todo.isCompleted);
    setUncompletedTodos(todosLeft);
  }, [todos]);

  const handleRemoveTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleCompleteTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );

    setTodos(updatedTodos);
  };

  const clearCompletedTodos = () => {
    setTodos((prev) => prev.filter((todo) => !todo.isCompleted));
    setFilterStatus("all");
  };

  const infoMsg =
    filterStatus === "completed"
      ? "There is no completed tasks!"
      : "There is no tasks!";

  return (
    <>
      <section className={`${styles.todoList} ${!themeDark && styles.light}`}>
        {filteredTodos.length > 0 ? (
          <ul>
            {filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                handleRemoveTodo={(id) => handleRemoveTodo(id)}
                handleCompleteTodo={(id) => handleCompleteTodo(id)}
                {...todo}
              />
            ))}
          </ul>
        ) : (
          <p className={styles.infoMsg}>{infoMsg}</p>
        )}

        <div
          className={`${styles.todoFilterControl} ${
            !themeDark && styles.light
          }`}
        >
          <p>{unCompletedTodos.length} items left</p>
          <TodoFilter
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
          />
          <button className={styles.clear} onClick={clearCompletedTodos}>
            Clear Completed
          </button>
        </div>
      </section>

      <div
        className={`${styles.todoFilterControlMob} ${
          !themeDark && styles.light
        }`}
      >
        <TodoFilter
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
        />
      </div>
    </>
  );
};

export default TodoList;
