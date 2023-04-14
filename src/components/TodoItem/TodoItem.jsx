import React from "react";
import ThemeContext from "../../ThemeContext";

import styles from "./TodoItem.module.scss";

import iconCross from "../../assets/svg/icon-cross.svg";

const TodoItem = ({
  id,
  isCompleted,
  todoText,
  handleRemoveTodo,
  handleCompleteTodo,
}) => {
  const { themeDark } = React.useContext(ThemeContext);
  return (
    <li className={`${styles.todoItem} ${!themeDark && styles.light}`}>
      <input
        type="checkbox"
        id={`check${id}`}
        onClick={() => handleCompleteTodo(id)}
        defaultChecked={isCompleted}
      />

      <label htmlFor={`check${id}`}>{todoText}</label>
      <img
        src={iconCross}
        alt="icon-cross"
        onClick={() => handleRemoveTodo(id)}
      />
    </li>
  );
};

export default TodoItem;
