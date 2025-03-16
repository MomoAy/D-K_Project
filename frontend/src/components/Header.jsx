import { FaBell, FaUser, FaBars, FaTimes } from 'react-icons/fa'

function Header({ username, onMenuClick, isSidebarOpen }) {
  return (
    <header className="bg-gray-800 bg-opacity-50 backdrop-blur-lg border-b border-gray-700 p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button 
            onClick={onMenuClick}
            className="md:hidden p-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div className="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Bienvenue, {username}
          </div>
        </div>
        <div className="flex items-center space-x-2 md:space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-700 transition-colors">
            <FaBell className="text-gray-300 hover:text-white w-4 h-4 md:w-5 md:h-5" />
          </button>
          <div className="flex items-center space-x-2 bg-gray-700 rounded-full px-3 py-1 md:px-4 md:py-2">
            <FaUser className="text-gray-300 w-4 h-4" />
            <span className="text-gray-300 hidden md:inline">{username}</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header