import React, { useRef } from "react";
import { nanoid } from "nanoid";
import toast from "react-hot-toast";

import type { TodoItem } from "../types";
import useTodoStore from "../store/store";

const TodoForm: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const title = inputRef.current?.value.trim() || "";

    if (!title) {
      toast.error("Please enter a todo");
      return;
    }

    const newTodo: TodoItem = {
      id: nanoid(),
      title,
      isCompleted: false,
    };

    addTodo(newTodo);
    inputRef.current!.value = "";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-dark-blue transition duration-300 rounded-md border-border shadow-default pl-5 min-h-[48px] md:min-h-[64px] md:pl-6"
    >
      <div className="flex items-center flex-1 gap-3 md:gap-6 ">
        <div className="w-5 h-5 border border-border rounded-full transition-colors duration-300 md:w-6 md:h-6"></div>
        <input
          className="flex-1"
          ref={inputRef}
          type="text"
          placeholder="Create a new todo..."
        />
      </div>
    </form>
  );
};

export default TodoForm;
