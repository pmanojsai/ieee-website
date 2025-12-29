import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send } from 'lucide-react';

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! I am Gemini AI. How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput('');
    // Gemini API integration placeholder
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { from: 'bot', text: 'This is a Gemini AI response (API integration needed).' },
      ]);
    }, 1000);
  };

  return (
    <>
      <button
        className="fixed bottom-6 right-6 z-50 bg-blue-700 hover:bg-blue-800 text-white rounded-full p-4 shadow-lg focus:outline-none"
        onClick={() => setOpen(true)}
        aria-label="Open chatbot"
        style={{ display: open ? 'none' : 'block' }}
      >
        <Bot size={28} />
      </button>
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-80 max-w-[95vw] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden border border-blue-100">
          <div className="flex items-center justify-between bg-blue-700 text-white px-4 py-2">
            <span className="font-semibold">Gemini AI Chat</span>
            <button onClick={() => setOpen(false)} aria-label="Close chatbot">
              <X size={20} />
            </button>
          </div>
          <div className="flex-1 p-3 overflow-y-auto max-h-72 bg-blue-50">
            {messages.map((msg, i) => (
              <div key={i} className={`mb-2 flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`px-3 py-2 rounded-lg text-sm max-w-[80%] ${msg.from === 'user' ? 'bg-blue-700 text-white' : 'bg-white text-blue-800 border'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <form onSubmit={handleSend} className="flex items-center border-t border-blue-100 bg-white px-2 py-2 gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            />
            <button type="submit" className="text-blue-700 hover:text-blue-900 p-1" aria-label="Send">
              <Send size={20} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot; 