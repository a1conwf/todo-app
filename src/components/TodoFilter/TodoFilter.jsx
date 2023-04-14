import React from "react";
import ThemeContext from "../../ThemeContext";

import styles from "./TodoFilter.module.scss";

const TodoFilter = ({ filterStatus, setFilterStatus }) => {
  const { themeDark } = React.useContext(ThemeContext);
  const handleFilter = (status) => {
    setFilterStatus(status);
  };

  return (
    <div className={`${styles.todoFilter} ${!themeDark && styles.light}`}>
      <button
        className={filterStatus === "all" ? styles.active : ""}
        onClick={() => handleFilter("all")}
      >
        All
      </button>
      <button
        className={filterStatus === "active" ? styles.active : ""}
        onClick={() => handleFilter("active")}
      >
        Active
      </button>
      <button
        className={filterStatus === "completed" ? styles.active : ""}
        onClick={() => handleFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoFilter;
