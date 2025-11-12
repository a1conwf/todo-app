import React, { useCallback } from "react";

import type { TodoItem } from "../types";
import useTodoStore from "../store/store";

import iconCross from "../assets/svg/icon-cross.svg";

const TodoListItem: React.FC<TodoItem> = ({ id, title, isCompleted }) => {
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const updateTodo = useTodoStore((state) => state.updateTodo);

  const handleToggleTodo = useCallback(() => {
    updateTodo(id, {
      id,
      title,
      isCompleted: !isCompleted,
    });
  }, [id, title, isCompleted, updateTodo]);

  const handleRemoveTodo = useCallback(() => {
    removeTodo(id);
  }, [id, removeTodo]);

  return (
    <li className="flex items-center justify-between border-b border-border px-5 pb-5 md:px-6">
      <div className="flex items-center gap-3 md:gap-6">
        <input
          className="w-5 h-5 md:w-6 md:h-6"
          type="checkbox"
          id={id}
          checked={isCompleted}
          onChange={handleToggleTodo}
        />
        <label
          className="cursor-pointer text-ellipsis overflow-hidden whitespace-nowrap max-w-[200px] sm:max-w-[350px]"
          htmlFor={id}
        >
          {title}
        </label>
      </div>

      <img
        className="md:w-5 md:h-5 cursor-pointer"
        src={iconCross}
        alt="Delete todo item"
        onClick={handleRemoveTodo}
      />
    </li>
  );
};

export default React.memo(TodoListItem);
