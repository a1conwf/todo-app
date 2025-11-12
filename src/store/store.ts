import { create } from "zustand";
import { useMemo } from "react";

import type { TodoItem, TodoFilterType } from "../types";

type TodoStore = {
  todos: TodoItem[];
  todoFilter: TodoFilterType;
  setTodoFilter: (filter: TodoFilterType) => void;
  addTodo: (obj: TodoItem) => void;
  updateTodo: (id: string, obj: TodoItem) => void;
  removeTodo: (id: string) => void;
  clearCompletedTodos: () => void;
};

const useTodoStore = create<TodoStore>()((set) => ({
  todos: [],
  todoFilter: "all",
  setTodoFilter: (filter: TodoFilterType) =>
    set((state) => {
      if (state.todoFilter === filter) return state;
      return { todoFilter: filter };
    }),
  removeTodo: (id: string) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
  addTodo: (obj: TodoItem) =>
    set((state) => ({ todos: [...state.todos, obj] })),
  clearCompletedTodos: () =>
    set((state) => ({
      todos: state.todos.filter((todo) => !todo.isCompleted),
    })),
  updateTodo: (id: string, obj: TodoItem) =>
    set((state) => ({
      todos: state.todos.map((todo) => (todo.id === id ? obj : todo)),
    })),
}));

// Selectors
export const useActiveTodosCount = () =>
  useTodoStore(
    (state) => state.todos.filter((todo) => !todo.isCompleted).length
  );

export const useFilteredTodos = () => {
  const todos = useTodoStore((state) => state.todos);
  const todoFilter = useTodoStore((state) => state.todoFilter);

  return useMemo(() => {
    if (todoFilter === "all") return todos;
    if (todoFilter === "active")
      return todos.filter((todo) => !todo.isCompleted);
    return todos.filter((todo) => todo.isCompleted);
  }, [todos, todoFilter]);
};

export default useTodoStore;
