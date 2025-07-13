import React, { useState, useEffect, useRef, useCallback } from "react";

const ChatRoom = ({ isOpen, toggleOpen, buttonRef }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [tempUsername, setTempUsername] = useState("");
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const chatRef = useRef(null);

  const handleClickOutside = useCallback((event) => {
    if (
      chatRef.current &&
      !chatRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      toggleOpen(false);
    }
  }, [toggleOpen, buttonRef]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { sender: username || "Guest", message }]);
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const saveUsername = () => {
    if (tempUsername.trim().length >= 3) {
      setUsername(tempUsername);
      localStorage.setItem("username", tempUsername);
    } else {
      alert("Please enter at least 3 characters for your name.");
    }
  };

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-20 right-6 z-50">
      <div
        ref={chatRef}
        className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} w-80 rounded-xl shadow-2xl border border-gray-300 p-4 relative`}
      >
        {/* Theme Toggle */}
        <button
          className="absolute top-2 right-2 px-2 py-1 text-xs rounded-full border"
          onClick={toggleTheme}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {!username ? (
          <div className="mt-6 text-center">
            <h2 className="text-lg font-semibold mb-2">Enter Your Name</h2>
            <input
              type="text"
              className={`${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-200 border-gray-300 text-black"} w-full px-3 py-2 rounded-lg border focus:outline-none`}
              placeholder="Min 3 characters"
              value={tempUsername}
              onChange={(e) => setTempUsername(e.target.value)}
            />
            <button
              className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
              onClick={saveUsername}
            >
              Save Name
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-md font-semibold text-center mb-2">Hello, {username}</h3>
            <div
              className={`${darkMode ? "bg-gray-700" : "bg-gray-100"} h-48 overflow-y-auto p-3 rounded-lg border mb-2`}
            >
              {messages.length === 0 ? (
                <p className="text-sm text-gray-400 text-center">Start chatting...</p>
              ) : (
                messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.sender === username ? "justify-end" : "justify-start"} mb-1`}
                  >
                    <div
                      className={`${darkMode ? "bg-gray-600" : "bg-white"} p-2 px-3 rounded-xl max-w-[70%] shadow`}
                    >
                      <span className="block text-xs text-blue-400 font-semibold">
                        {msg.sender}
                      </span>
                      <span className="block text-sm">{msg.message}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="flex">
              <input
                className={`${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-black"} flex-grow px-3 py-2 rounded-l-lg border focus:outline-none`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type..."
              />
              <button
                className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-r-lg"
                onClick={sendMessage}
              >
                Send
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatRoom;
