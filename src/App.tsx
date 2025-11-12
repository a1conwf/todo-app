import { ThemeProvider } from "./providers/ThemeProvider";
import { Toaster } from "react-hot-toast";
import { TodoForm, Header, TodoList } from "./components";

import "./App.css";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Toaster />
      <Header />
      <main>
        <div className="container mx-auto px-6 pt-12 pb-10 max-w-[541px] md:pt-17 md:px-0">
          <TodoForm />
          <TodoList />
        </div>
      </main>
    </ThemeProvider>
  );
};

export default App;
