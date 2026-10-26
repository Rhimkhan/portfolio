'use client';

import { useState, useRef, useEffect } from 'react';

const QUICK_ACTIONS = [
  { label: '⚡ 30-sec Summary', prompt: 'Give me a 30-second summary of Rhim Khan' },
  { label: '🚀 Projects', prompt: 'Tell me about his projects' },
  { label: '🛠️ Skills', prompt: 'What are his technical skills?' },
  { label: '🎓 Education', prompt: 'What is his educational background?' },
  { label: '📬 Contact', prompt: 'How can I contact Rhim Khan?' },
];

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hey! I'm Rex 🤖 — Rhim Khan's portfolio assistant. Ask me anything about his skills, projects, or experience!",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMessage: Message = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: data.content || "I couldn't fetch a response right now. Please try again in a moment.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, kuch error aa gaya! Thodi der baad try karo. 😅',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AI Assistant Rex"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer"
        style={{
          background: 'linear-gradient(135deg, #2563eb, #00ffe0)',
          boxShadow: '0 8px 24px rgba(0, 255, 224, 0.35)',
        }}
      >
        {isOpen ? (
          <span className="text-white text-xl font-bold">✕</span>
        ) : (
          <span className="text-white text-2xl">🤖</span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-50 w-80 md:w-96 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--border)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            height: '490px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
          }}
        >
          {/* Header */}
          <div
            className="p-4 flex items-center justify-between"
            style={{
              background: 'linear-gradient(135deg, rgba(37,99,235,0.15), rgba(0,255,224,0.15))',
              borderBottom: '1px solid var(--border)',
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-md"
                style={{ background: 'linear-gradient(135deg, #2563eb, #00ffe0)' }}
              >
                🤖
              </div>
              <div>
                <p className="font-bold text-sm tracking-wide" style={{ color: 'var(--text-primary)' }}>
                  Rex
                </p>
                <p className="text-xs flex items-center gap-1 font-mono-technical" style={{ color: 'var(--accent)' }}>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                  Rhim&apos;s AI Assistant
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-xs opacity-60 hover:opacity-100 p-1 cursor-pointer"
              style={{ color: 'var(--text-primary)' }}
            >
              ✕
            </button>
          </div>

          {/* Quick Actions */}
          <div
            className="p-2.5 flex gap-1.5 flex-wrap overflow-x-auto"
            style={{ borderBottom: '1px solid var(--border)' }}
          >
            {QUICK_ACTIONS.map((action) => (
              <button
                key={action.label}
                onClick={() => sendMessage(action.prompt)}
                disabled={loading}
                className="text-[11px] px-2.5 py-1 rounded-full transition-all hover:scale-105 cursor-pointer disabled:opacity-50"
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border)',
                  color: 'var(--accent)',
                }}
              >
                {action.label}
              </button>
            ))}
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className="max-w-[85%] px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-wrap"
                  style={{
                    background:
                      msg.role === 'user'
                        ? 'linear-gradient(135deg, #2563eb, #00ffe0)'
                        : 'var(--card-bg)',
                    color: msg.role === 'user' ? '#ffffff' : 'var(--text-primary)',
                    border: msg.role === 'assistant' ? '1px solid var(--border)' : 'none',
                    boxShadow:
                      msg.role === 'user'
                        ? '0 4px 14px rgba(37,99,235,0.25)'
                        : '0 2px 8px rgba(0,0,0,0.04)',
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div
                  className="px-3.5 py-2 rounded-2xl text-xs flex items-center gap-2"
                  style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  <span className="animate-pulse" style={{ color: 'var(--accent)' }}>
                    Rex is thinking...
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 flex gap-2" style={{ borderTop: '1px solid var(--border)' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
              placeholder="Ask about Rhim Khan..."
              disabled={loading}
              className="flex-1 px-4 py-2 rounded-full text-xs outline-none"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border)',
                color: 'var(--text-primary)',
              }}
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={loading || !input.trim()}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110 disabled:opacity-50 cursor-pointer shadow-md"
              style={{ background: 'linear-gradient(135deg, #2563eb, #00ffe0)' }}
            >
              <span className="text-white text-sm font-bold">→</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
