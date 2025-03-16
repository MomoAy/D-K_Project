import { useState } from "react";
import Sidebar from "./components/Sidebar";
import TodoList from "./components/TodoList";
import CompletedTasks from "./components/CompletedTasks";
import Chatbot from "./components/Chatbot";
import Header from "./components/Header";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import useAuthStore from "./store/authStore";

function App() {
  const [activeTab, setActiveTab] = useState("todos");
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [date, setDate] = useState(new Date());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const user = useAuthStore((state) => state.user);

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const renderMainContent = () => {
    switch (activeTab) {
      case "todos":
        return (
          <TodoList
            todos={todos.filter((todo) => !todo.completed)}
            newTodo={newTodo}
            setNewTodo={setNewTodo}
            addTodo={addTodo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      case "completed":
        return (
          <CompletedTasks
            completedTodos={todos.filter((todo) => todo.completed)}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      case "chatbot":
        return <Chatbot />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out z-30`}
      >
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <div className="flex-1 flex flex-col w-full">
        <Header
          username={isLoggedIn ? user.last_name : "Invité"}
          onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
          isSidebarOpen={isSidebarOpen}
        />
        <div className="flex-1 p-4 md:p-8 overflow-auto">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            <div className="flex-1">{renderMainContent()}</div>
            <div className="w-full lg:w-80">
              <div className="bg-gray-800 p-4 rounded-2xl shadow-xl backdrop-blur-lg bg-opacity-50">
                <Calendar
                  onChange={setDate}
                  value={date}
                  className="rounded-xl border-0 shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay pour fermer le sidebar sur mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default App;