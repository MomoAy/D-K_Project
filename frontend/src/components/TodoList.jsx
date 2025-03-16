import { FaTrash, FaCheck } from 'react-icons/fa'

function TodoList({ todos, newTodo, setNewTodo, addTodo, toggleTodo, deleteTodo }) {
  return (
    <div className="bg-gray-800 p-4 md:p-6 rounded-2xl shadow-xl backdrop-blur-lg bg-opacity-50">
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        Tâches à faire
      </h2>
      <form onSubmit={addTodo} className="mb-6">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Ajouter une nouvelle tâche"
            className="flex-1 p-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Ajouter
          </button>
        </div>
      </form>
      <ul className="space-y-3">
        {todos.map(todo => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-3 md:p-4 bg-gray-700 rounded-xl border border-gray-600"
          >
            <span className="text-white text-sm md:text-base break-all pr-4">{todo.text}</span>
            <div className="flex gap-2 shrink-0">
              <button
                onClick={() => toggleTodo(todo.id)}
                className="p-2 text-green-400 hover:text-green-300 transition-colors"
              >
                <FaCheck className="w-4 h-4" />
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="p-2 text-red-400 hover:text-red-300 transition-colors"
              >
                <FaTrash className="w-4 h-4" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList