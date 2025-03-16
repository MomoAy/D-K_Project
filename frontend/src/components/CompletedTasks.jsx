import { FaTrash, FaUndo } from 'react-icons/fa'

function CompletedTasks({ completedTodos, toggleTodo, deleteTodo }) {
  return (
    <div className="bg-gray-800 p-4 md:p-6 rounded-2xl shadow-xl backdrop-blur-lg bg-opacity-50">
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        Tâches terminées
      </h2>
      <ul className="space-y-3">
        {completedTodos.map(todo => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-3 md:p-4 bg-gray-700 rounded-xl border border-gray-600"
          >
            <span className="line-through text-gray-400 text-sm md:text-base break-all pr-4">{todo.text}</span>
            <div className="flex gap-2 shrink-0">
              <button
                onClick={() => toggleTodo(todo.id)}
                className="p-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <FaUndo className="w-4 h-4" />
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

export default CompletedTasks