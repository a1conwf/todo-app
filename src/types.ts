export type TodoItem = {
  id: string;
  title: string;
  isCompleted: boolean;
};

export type TodoFilterType = "all" | "active" | "completed";
