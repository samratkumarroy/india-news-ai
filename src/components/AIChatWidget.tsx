import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Trash2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { useChat, ChatMessage } from "@/hooks/useChat";
import aiChatIcon from "@/assets/ai-chat-icon.png";

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, isLoading, sendMessage, clearChat } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;
    setInput("");
    sendMessage(trimmed);
  };

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full bg-ink text-paper flex items-center justify-center shadow-lg hover:bg-ink/90 transition-colors"
            aria-label="Open AI chat"
          >
            <img src={aiChatIcon} alt="AI Chat" width={32} height={32} className="drop-shadow-[0_0_8px_rgba(100,150,255,0.7)]" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 right-4 z-50 w-[340px] sm:w-[380px] h-[480px] flex flex-col rounded-lg border border-rule bg-paper shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-ink text-paper border-b border-rule">
              <div className="flex items-center gap-2">
                <img src={aiChatIcon} alt="AI" width={22} height={22} className="drop-shadow-[0_0_6px_rgba(100,150,255,0.7)]" />
                <span className="font-display text-sm font-bold">Ask India News AI</span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={clearChat}
                  className="p-1.5 rounded hover:bg-paper/10 transition-colors"
                  aria-label="Clear chat"
                  title="Clear chat"
                >
                  <Trash2 size={14} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded hover:bg-paper/10 transition-colors"
                  aria-label="Close chat"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
              {messages.length === 0 && (
                <div className="text-center text-news-muted text-xs mt-8 space-y-2">
                  <img src={aiChatIcon} alt="AI" width={40} height={40} className="mx-auto opacity-80 drop-shadow-[0_0_10px_rgba(100,150,255,0.6)]" />
                  <p className="font-display font-bold text-sm text-ink">Welcome!</p>
                  <p>Ask me anything about the latest news on India News AI.</p>
                  <div className="flex flex-wrap gap-1.5 justify-center mt-3">
                    {["What happened with GPT-5?", "Latest Delhi news", "IPL 2026 updates"].map(
                      (q) => (
                        <button
                          key={q}
                          onClick={() => sendMessage(q)}
                          className="text-[0.65rem] px-2 py-1 rounded-full border border-rule bg-paper-dark hover:bg-saffron/10 hover:border-saffron transition-colors text-ink"
                        >
                          {q}
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <MessageBubble key={i} message={msg} />
              ))}

              {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
                <div className="flex gap-1 px-3 py-2">
                  <span className="w-2 h-2 rounded-full bg-saffron animate-bounce [animation-delay:0ms]" />
                  <span className="w-2 h-2 rounded-full bg-saffron animate-bounce [animation-delay:150ms]" />
                  <span className="w-2 h-2 rounded-full bg-saffron animate-bounce [animation-delay:300ms]" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 px-3 py-2 border-t border-rule bg-paper-dark"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about the news..."
                className="flex-1 text-sm bg-transparent outline-none placeholder:text-news-muted text-ink"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="p-2 rounded-md bg-saffron text-paper disabled:opacity-40 hover:bg-saffron-dark transition-colors"
                aria-label="Send message"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
          isUser
            ? "bg-saffron text-paper rounded-br-sm"
            : "bg-paper-dark text-ink border border-rule rounded-bl-sm"
        }`}
      >
        {isUser ? (
          <p>{message.content}</p>
        ) : (
          <div className="prose prose-sm prose-stone max-w-none [&_p]:my-1 [&_ul]:my-1 [&_li]:my-0.5 [&_strong]:text-ink">
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
