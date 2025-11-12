import React from "react";
import useTodoStore, {
  useFilteredTodos,
  useActiveTodosCount,
} from "../store/store";

import { TodoListItem, TodoFilter } from "./index";

const TodoList: React.FC = () => {
  const { clearCompletedTodos } = useTodoStore();
  const filteredTodos = useFilteredTodos();
  const activeTodosCount = useActiveTodosCount();
  const todos = useTodoStore((state) => state.todos);

  return (
    <>
      {todos.length > 0 && (
        <>
          <div className="mt-4 bg-dark-blue py-4 transition duration-300 rounded-md border-border shadow-default md:mt-6 md:py-5">
            {filteredTodos.length > 0 ? (
              <ul className="flex flex-col gap-5 max-h-[450px] overflow-y-auto">
                {filteredTodos.map((todo) => (
                  <TodoListItem
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    isCompleted={todo.isCompleted}
                  />
                ))}
              </ul>
            ) : (
              <span className="flex justify-center text-secondary text-base text-center">
                No todos found
              </span>
            )}
            <div className="flex items-center justify-between px-5 pt-5 md:px-6">
              <span className="text-secondary md:text-sm">
                {activeTodosCount} {activeTodosCount === 1 ? "item" : "items"}{" "}
                left
              </span>
              <div className="hidden md:block">
                <TodoFilter />
              </div>
              <button
                className="text-secondary cursor-pointer hover:text-filter-hover transition-colors md:text-sm"
                onClick={clearCompletedTodos}
              >
                Clear completed
              </button>
            </div>
          </div>
          <div className="min-h-[48px] mt-4 flex items-center justify-center bg-dark-blue transition duration-300 rounded-md border-border shadow-default md:hidden">
            <TodoFilter />
          </div>
        </>
      )}
    </>
  );
};

export default TodoList;
