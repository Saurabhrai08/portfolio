"use client";

import { motion } from "framer-motion";
import { Eye, FileText } from "lucide-react";

const resumeHref = "/Saurabh_Rai_Resume.pdf";
const downloadFileName = "Saurabh_Rai_Resume.pdf";

export function ResumeSection() {
  return (
    <motion.section
      id="resume"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="relative"
    >
      <div className="glass-panel glow-ring relative overflow-hidden rounded-[32px] px-6 py-8 sm:px-10 sm:py-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,182,255,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(255,140,66,0.16),transparent_34%)]" />
        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/55 to-transparent" />
        <div className="pointer-events-none absolute inset-x-16 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-300/45 to-transparent" />

        <div className="relative mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="inline-flex items-center gap-2 rounded-full border border-sky-300/15 bg-sky-400/8 px-4 py-2 text-xs uppercase tracking-[0.32em] text-sky-100/85 shadow-[0_0_30px_rgba(82,182,255,0.12)]"
          >
            <FileText className="h-4 w-4" />
            Resume
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.12 }}
            className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            My Resume
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.18 }}
            className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300/78 sm:text-lg"
          >
            Download my resume to learn more about my experience, skills, and
            projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.24 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.a
              href={resumeHref}
              download={downloadFileName}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-sky-400 via-cyan-300 to-orange-300 px-6 py-4 text-sm font-semibold text-slate-950 shadow-[0_18px_60px_rgba(82,182,255,0.28),0_0_32px_rgba(255,140,66,0.18)] transition duration-300 hover:shadow-[0_24px_80px_rgba(82,182,255,0.38),0_0_40px_rgba(255,140,66,0.26)] sm:w-auto"
            >
              <FileText className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              Download Resume
            </motion.a>

            <motion.a
              href={resumeHref}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-white/14 bg-white/5 px-6 py-4 text-sm font-medium text-white backdrop-blur-xl transition duration-300 hover:border-white/0 hover:bg-white hover:text-slate-950 sm:w-auto"
            >
              <Eye className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              View Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="mt-8 flex items-center justify-center"
          >
            <div className="rounded-[24px] border border-white/10 bg-slate-950/35 px-4 py-3 text-sm text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <span className="font-mono uppercase tracking-[0.24em] text-slate-500">
                PDF
              </span>
              <span className="mx-3 text-slate-600">/</span>
              Ready for download and quick preview
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
