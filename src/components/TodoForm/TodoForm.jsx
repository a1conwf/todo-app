import React from "react";
import { nanoid } from "nanoid";
import ThemeContext from "../../ThemeContext";

import styles from "./TodoForm.module.scss";

const TodoForm = ({ setTodos }) => {
  const { themeDark } = React.useContext(ThemeContext);
  const [inputValue, setInputValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue) {
      const newTodo = {
        id: nanoid(),
        todoText: inputValue,
        isCompleted: false,
      };

      setTodos((prev) => [...prev, newTodo]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={`${styles.formInput} ${!themeDark && styles.light}`}>
        <div className={styles.circle} />
        <input
          type="text"
          value={inputValue}
          placeholder="Create a new todo..."
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </form>
  );
};

export default TodoForm;
