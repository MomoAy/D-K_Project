import { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'

function Chatbot() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Bonjour! Je suis votre assistant. Comment puis-je vous aider?", isBot: true }
  ])
  const [newMessage, setNewMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    setMessages(prev => [...prev, { id: Date.now(), text: newMessage, isBot: false }])
    setNewMessage('')

    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: "Je suis désolé, je suis encore en développement. Je ne peux pas vraiment vous aider pour le moment.",
        isBot: true
      }])
    }, 1000)
  }

  return (
    <div className="bg-gray-800 p-4 md:p-6 rounded-2xl shadow-xl backdrop-blur-lg bg-opacity-50 h-[500px] md:h-[600px] flex flex-col">
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        ChatBot Assistant
      </h2>
      <div className="flex-1 overflow-auto mb-4 space-y-4">
        {messages.map(message => (
          <div
            key={message.id}
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-xl text-sm md:text-base ${
                message.isBot
                  ? 'bg-gray-700 text-white'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Écrivez votre message..."
          className="flex-1 p-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:opacity-90 transition-opacity"
        >
          <FaPaperPlane className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </form>
    </div>
  )
}

export default Chatbot