"use client";

import { ArrowUpRight, BadgeCheck, Bot, FileText, Globe2, Mail, MapPin, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { personalData } from "@/lib/portfolio-data";
import { HeroChatPreview } from "@/components/hero-chat-preview";

const rotatingLines = [
  "Machine Learning systems for real-world problems",
  "Deep learning workflows with premium product thinking",
  "Computer vision, automation, and AI-first engineering",
];

const navPillClasses =
  "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition duration-300";

export function Hero() {
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLineIndex((current) => (current + 1) % rotatingLines.length);
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-18 pt-6 sm:px-10 lg:px-14"
    >
      <div className="glass-panel glow-ring mx-auto max-w-7xl rounded-[36px] px-5 py-5 sm:px-8 sm:py-6">
        <nav className="flex flex-col gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-sky-300/85">
              {personalData.name}
            </p>
            <p className="mt-2 text-sm text-slate-300/75">{personalData.role}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-200/80">
            <Link
              href="#about"
              className={`${navPillClasses} hover:border-sky-300/30 hover:bg-sky-300/10 hover:shadow-[0_0_20px_rgba(56,189,248,0.18)]`}
            >
              About
            </Link>
            <Link
              href="#projects"
              className={`${navPillClasses} hover:border-sky-300/30 hover:bg-sky-300/10 hover:shadow-[0_0_20px_rgba(56,189,248,0.18)]`}
            >
              Projects
            </Link>
            <Link
              href={personalData.github}
              target="_blank"
              rel="noreferrer"
              className={`${navPillClasses} hover:border-orange-300/30 hover:bg-orange-300/10 hover:shadow-[0_0_20px_rgba(251,146,60,0.2)]`}
            >
              GitHub
            </Link>
            <a
              href="/Saurabh_Rai_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className={`${navPillClasses} border-transparent bg-[linear-gradient(rgb(15,23,42),rgb(15,23,42))_padding-box,linear-gradient(135deg,rgba(56,189,248,0.45),rgba(251,146,60,0.45))_border-box] hover:bg-[linear-gradient(rgb(15,23,42),rgb(15,23,42))_padding-box,linear-gradient(135deg,rgba(56,189,248,0.8),rgba(251,146,60,0.85))_border-box] hover:shadow-[0_0_24px_rgba(56,189,248,0.18),0_0_32px_rgba(251,146,60,0.12)]`}
            >
              <FileText className="h-4 w-4 text-sky-200" />
              Resume
            </a>
          </div>
        </nav>

        <div className="grid gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border border-sky-300/15 bg-sky-400/8 px-4 py-2 text-xs text-sky-100/90 shadow-[0_0_32px_rgba(56,189,248,0.12)]"
            >
              <Sparkles className="h-4 w-4" />
              AI portfolio engineered with Next.js, Tailwind, and motion-first UI
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="mt-8 max-w-3xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl"
            >
              Automate Your Ideas with <span className="text-gradient">AI & Code</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mt-8 max-w-2xl text-lg leading-8 text-slate-300/78"
            >
              Saurabh Rai builds ML-driven experiences with a product mindset, combining
              machine learning fundamentals, deep learning experimentation, and polished UI delivery.
            </motion.p>

            <div className="mt-6 min-h-[32px] font-mono text-sm text-cyan-200/85">
              <motion.span
                key={rotatingLines[lineIndex]}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                {rotatingLines[lineIndex]}
              </motion.span>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-orange-300 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_18px_60px_rgba(82,182,255,0.35)] transition hover:scale-[1.02]"
              >
                Explore Projects
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href={personalData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/6 px-6 py-3.5 text-sm font-medium text-white transition hover:border-orange-300/35 hover:bg-orange-300/10"
              >
                Connect on LinkedIn
                <BadgeCheck className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                { icon: Bot, label: "Role", value: personalData.role },
                { icon: MapPin, label: "Location", value: personalData.location },
                {
                  icon: Mail,
                  label: "Email",
                  value: personalData.email,
                  href: `mailto:${personalData.email}`,
                },
                {
                  icon: Globe2,
                  label: "GitHub",
                  value: "Saurabhrai08",
                  href: personalData.github,
                },
              ].map((item) => {
                const card = (
                  <>
                    <item.icon className="h-4 w-4 text-sky-300" />
                    <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.3em] text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-2 break-words text-sm leading-6 text-slate-200">{item.value}</p>
                  </>
                );

                return item.href ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="rounded-[24px] border border-white/10 bg-white/5 px-4 py-4 shadow-[0_18px_45px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:border-sky-300/25 hover:bg-sky-400/10"
                  >
                    {card}
                  </Link>
                ) : (
                  <div
                    key={item.label}
                    className="rounded-[24px] border border-white/10 bg-white/5 px-4 py-4 shadow-[0_18px_45px_rgba(0,0,0,0.18)]"
                  >
                    {card}
                  </div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-xs backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-4 shadow-2xl">
              <div className="relative w-full h-auto">
                <Image
                  src="/images/profile_image.jpeg"
                  alt="Saurabh Rai Profile"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover rounded-xl"
                />
                <div className="absolute bottom-4 right-4 inline-flex items-center gap-1 rounded-full bg-sky-400/90 backdrop-blur-md px-3 py-1.5 text-xs font-semibold text-slate-950 shadow-lg">
                  <span className="h-2 w-2 rounded-full bg-green-300" />
                  Available
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
