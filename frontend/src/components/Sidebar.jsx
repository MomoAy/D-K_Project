import { FaTasks, FaCheckCircle, FaRobot } from 'react-icons/fa'

function Sidebar({ activeTab, setActiveTab }) {
  return (
    <div className="w-64 h-full bg-gray-800 bg-opacity-50 backdrop-blur-lg border-r border-gray-700">
      <div className="p-6">
        <h1 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-8">
          Todo App
        </h1>
        <nav className="space-y-2">
          <button
            className={`flex items-center w-full p-3 rounded-xl transition-all duration-200 ${
              activeTab === 'todos'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'text-gray-300 hover:bg-gray-700'
            }`}
            onClick={() => setActiveTab('todos')}
          >
            <FaTasks className="mr-3" />
            <span className="text-sm md:text-base">Tâches à faire</span>
          </button>
          <button
            className={`flex items-center w-full p-3 rounded-xl transition-all duration-200 ${
              activeTab === 'completed'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'text-gray-300 hover:bg-gray-700'
            }`}
            onClick={() => setActiveTab('completed')}
          >
            <FaCheckCircle className="mr-3" />
            <span className="text-sm md:text-base">Tâches terminées</span>
          </button>
          <button
            className={`flex items-center w-full p-3 rounded-xl transition-all duration-200 ${
              activeTab === 'chatbot'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'text-gray-300 hover:bg-gray-700'
            }`}
            onClick={() => setActiveTab('chatbot')}
          >
            <FaRobot className="mr-3" />
            <span className="text-sm md:text-base">ChatBot</span>
          </button>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar