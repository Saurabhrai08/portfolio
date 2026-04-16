"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, SendHorizonal, Sparkles, User, X } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const starterQuestions = [
  "Who are you?",
  "What are your skills?",
  "Tell me about your projects",
  "What is your experience?",
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Ask me about Saurabh Rai's skills, projects, experience, or education. I can answer from portfolio context even without an API key.",
    },
  ]);

  const canSend = useMemo(() => input.trim().length > 0 && !isLoading, [input, isLoading]);

  async function submitMessage(text: string) {
    const message = text.trim();

    if (!message) {
      return;
    }

    const nextMessages: Message[] = [...messages, { role: "user", content: message }];
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: nextMessages,
        }),
      });

      const data = (await response.json()) as { answer?: string };
      const answer =
        data.answer ??
        "I can help with questions about Saurabh Rai's AI/ML background, projects, experience, and education.";

      setMessages((current) => [...current, { role: "assistant", content: answer }]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "I could not reach the API right now, but Saurabh Rai is an aspiring AI/ML Engineer with experience in ML models, CNNs, and data preprocessing.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await submitMessage(input);
  }

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full border border-sky-300/20 bg-slate-950/85 px-5 py-3 text-sm font-medium text-white shadow-[0_20px_80px_rgba(59,130,246,0.25)] backdrop-blur-xl"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-300 to-orange-300 text-slate-950">
          {isOpen ? <X className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
        </div>
        AI Assistant
      </motion.button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-24 right-5 z-50 h-[min(70vh,640px)] w-[calc(100vw-2.5rem)] max-w-md overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/84 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
          >
            <div className="border-b border-white/10 bg-gradient-to-r from-sky-400/15 via-transparent to-orange-300/15 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-300 to-cyan-200 text-slate-950">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-sky-200/80">
                    Portfolio AI
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    Ask about skills, projects, experience, or education
                  </p>
                </div>
              </div>
            </div>

            <div className="flex h-[calc(100%-154px)] flex-col">
              <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
                {messages.map((message, index) => (
                  <div
                    key={`${message.role}-${index}`}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[86%] rounded-[22px] px-4 py-3 text-sm leading-7 ${
                        message.role === "user"
                          ? "bg-gradient-to-r from-sky-400 to-cyan-300 text-slate-950"
                          : "border border-white/10 bg-white/6 text-slate-200"
                      }`}
                    >
                      <div className="mb-2 flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] opacity-70">
                        {message.role === "user" ? (
                          <User className="h-3.5 w-3.5" />
                        ) : (
                          <Bot className="h-3.5 w-3.5" />
                        )}
                        {message.role}
                      </div>
                      {message.content}
                    </div>
                  </div>
                ))}

                {isLoading ? (
                  <div className="flex justify-start">
                    <div className="rounded-[22px] border border-white/10 bg-white/6 px-4 py-3 text-sm text-slate-300">
                      <div className="flex gap-1.5">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-sky-300" />
                        <span className="h-2 w-2 animate-pulse rounded-full bg-orange-300 [animation-delay:140ms]" />
                        <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-200 [animation-delay:280ms]" />
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="border-t border-white/10 px-5 py-4">
                <div className="mb-3 flex flex-wrap gap-2">
                  {starterQuestions.map((question) => (
                    <button
                      key={question}
                      type="button"
                      onClick={() => void submitMessage(question)}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 transition hover:border-sky-300/30 hover:bg-sky-300/10"
                    >
                      {question}
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="flex items-center gap-3">
                  <input
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    placeholder="Ask the AI assistant..."
                    className="h-12 flex-1 rounded-full border border-white/10 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-300/40"
                  />
                  <button
                    type="submit"
                    disabled={!canSend}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-orange-300 text-slate-950 transition disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <SendHorizonal className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
