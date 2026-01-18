import React, { useState, useRef, useEffect } from 'react';
import { getDesignConsultation } from '../services/geminiService';
import { ConciergeState, ChatMessage } from '../types';
import { Sparkles, X, Send, ArrowUp } from 'lucide-react';

export const Concierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Welcome to Palak Sahni Interiors. How may I assist you?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [state, setState] = useState<ConciergeState>(ConciergeState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || state === ConciergeState.THINKING) return;

    const userText = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setState(ConciergeState.THINKING);

    try {
      const responseText = await getDesignConsultation(userText);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
      setState(ConciergeState.IDLE);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Connection error. Please try again." }]);
      setState(ConciergeState.ERROR);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 transform ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <div className="bg-luxury-black text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
          <Sparkles className="w-5 h-5" />
        </div>
      </button>

      <div 
        className={`fixed bottom-6 right-6 z-50 w-[350px] bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 border border-gray-100 ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <div className="p-4 bg-luxury-offwhite flex justify-between items-center border-b border-gray-100">
          <span className="font-semibold text-sm text-luxury-black">Concierge</span>
          <button onClick={() => setIsOpen(false)} className="text-luxury-gray hover:text-luxury-black">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="h-80 overflow-y-auto p-4 bg-white space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[85%] px-4 py-2 text-sm rounded-2xl ${
                  msg.role === 'user' 
                    ? 'bg-luxury-black text-white' 
                    : 'bg-luxury-offwhite text-luxury-black'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {state === ConciergeState.THINKING && (
            <div className="text-xs text-luxury-gray ml-2">Thinking...</div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask anything..."
            className="flex-1 bg-luxury-offwhite rounded-full px-4 py-2 text-sm focus:outline-none"
          />
          <button 
            onClick={handleSend}
            disabled={!inputValue.trim()}
            className="w-8 h-8 flex items-center justify-center bg-luxury-black text-white rounded-full disabled:opacity-50"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
};