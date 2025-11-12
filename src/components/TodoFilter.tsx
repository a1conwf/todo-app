import React from "react";
import useTodoStore from "../store/store";
import { TODO_FILTERS } from "../constants";
import type { TodoFilterType } from "../types";

const TodoFilter: React.FC = () => {
  const todoFilter = useTodoStore((state) => state.todoFilter);
  const setTodoFilter = useTodoStore((state) => state.setTodoFilter);

  const handleFilterClick = (filter: TodoFilterType) => {
    if (filter !== todoFilter) {
      setTodoFilter(filter);
    }
  };

  return (
    <ul className="flex items-center gap-3">
      {TODO_FILTERS.map((filter) => (
        <li key={filter}>
          <button
            className={`capitalize cursor-pointer hover:text-filter-hover transition-colors text-sm  ${
              filter === todoFilter ? "text-blue" : "text-secondary"
            }`}
            onClick={() => handleFilterClick(filter)}
          >
            {filter}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(TodoFilter);
