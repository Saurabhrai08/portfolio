"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const snippets = [
  {
    question: "Who are you?",
    answer:
      "I am Saurabh Rai, an aspiring AI/ML Engineer specializing in Machine Learning, Deep Learning, and Computer Vision.",
  },
  {
    question: "What are your strongest skills?",
    answer:
      "Python, ML, Deep Learning, TensorFlow, Scikit-learn, NumPy, Pandas, and OpenCV are central to my current work.",
  },
  {
    question: "What project stands out?",
    answer:
      "Skin Cancer Detection is a highlighted CNN project focused on image classification and practical evaluation workflows.",
  },
];

export function HeroChatPreview() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % snippets.length);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  const activeSnippet = snippets[index];

  return (
    <div className="glass-panel glow-ring relative overflow-hidden rounded-[32px] p-5 sm:p-6">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent" />
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-sky-200/75">
            AI Assistant
          </p>
          <h3 className="mt-2 text-lg font-medium text-white">
            Context-aware portfolio copilot
          </h3>
        </div>
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.9)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_16px_rgba(56,189,248,0.9)]" />
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="ml-auto max-w-sm rounded-[24px] border border-white/10 bg-white/6 px-4 py-3 text-sm text-slate-100 shadow-lg">
          {activeSnippet.question}
        </div>

        <div className="max-w-md rounded-[24px] border border-sky-300/15 bg-sky-400/10 px-4 py-3 text-sm leading-7 text-slate-200 shadow-[0_20px_50px_rgba(14,165,233,0.12)]">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeSnippet.answer}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {activeSnippet.answer}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-400">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-sky-300" />
            <span className="h-2 w-2 animate-pulse rounded-full bg-orange-300 [animation-delay:180ms]" />
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300 [animation-delay:320ms]" />
          </div>
          Responding with portfolio context and fallback knowledge
        </div>
      </div>
    </div>
  );
}
