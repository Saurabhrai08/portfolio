import { ArrowUpRight, BrainCircuit, BriefcaseBusiness, GraduationCap, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { Chatbot } from "@/components/chatbot";
import { Hero } from "@/components/hero";
import { ResumeSection } from "@/components/ResumeSection";
import { SectionHeading } from "@/components/section-heading";
import { getProjects } from "@/lib/github";
import { education, experience, personalData, skills, summary } from "@/lib/portfolio-data";

const stats = [
  { label: "Current Focus", value: "AI/ML Internships" },
  { label: "Specialization", value: "ML + Deep Learning" },
  { label: "Domain", value: "Computer Vision" },
];

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="relative overflow-hidden pb-20">
      <div className="absolute left-0 right-0 top-0 -z-10 h-[720px] bg-[radial-gradient(circle_at_20%_0%,rgba(82,182,255,0.22),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(255,140,66,0.18),transparent_30%)]" />

      <Hero />

      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-6 sm:px-10 lg:px-14">
        <AnimatedSection
          id="about"
          className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="glass-panel glow-ring rounded-[32px] p-8 sm:p-10">
            <SectionHeading
              eyebrow="About"
              title="Engineering AI experiences with practical ML foundations"
              description={summary}
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[24px] border border-white/10 bg-white/6 p-4"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-slate-500">
                    {stat.label}
                  </p>
                  <p className="mt-3 text-base font-medium text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {[
              { icon: MapPin, label: "Location", value: personalData.location },
              { icon: Mail, label: "Email", value: personalData.email, href: `mailto:${personalData.email}` },
              { icon: Phone, label: "Phone", value: personalData.phone, href: `tel:${personalData.phone}` },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href ?? "#"}
                className="glass-panel rounded-[28px] p-6 transition hover:-translate-y-1 hover:border-sky-300/25"
              >
                <item.icon className="h-5 w-5 text-sky-300" />
                <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.3em] text-slate-500">
                  {item.label}
                </p>
                <p className="mt-3 text-base text-slate-100">{item.value}</p>
              </Link>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="skills" className="space-y-10">
          <SectionHeading
            eyebrow="Core Stack"
            title="Glow cards for the AI/ML toolkit"
            description="The stack reflects a machine-learning workflow spanning experimentation, preprocessing, classical ML, deep learning, and computer vision."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="glass-panel group rounded-[28px] p-5 transition duration-300 hover:-translate-y-1 hover:border-sky-300/25"
              >
                <div className="flex items-center justify-between">
                  <Sparkles className="h-4 w-4 text-orange-300" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-slate-500">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-10 text-lg font-medium text-white">{skill}</h3>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/6">
                  <div className="h-full w-full rounded-full bg-gradient-to-r from-sky-300 via-cyan-300 to-orange-300" />
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="experience" className="grid gap-8 lg:grid-cols-2">
          <div className="glass-panel glow-ring rounded-[32px] p-8 sm:p-10">
            <SectionHeading
              eyebrow="Experience"
              title="Applied machine learning experience"
              description="Hands-on internship work built around model experimentation, data pipelines, and practical accuracy improvements."
            />

            <div className="mt-10 space-y-5">
              {experience.map((item) => (
                <div
                  key={item.company}
                  className="rounded-[28px] border border-white/10 bg-white/6 p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <BriefcaseBusiness className="h-5 w-5 text-sky-300" />
                        <h3 className="text-xl font-medium text-white">{item.role}</h3>
                      </div>
                      <p className="mt-2 text-slate-300">{item.company}</p>
                    </div>
                    <span className="rounded-full border border-orange-300/15 bg-orange-300/10 px-3 py-1 text-xs text-orange-200">
                      {item.duration}
                    </span>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {item.responsibilities.map((responsibility) => (
                      <div
                        key={responsibility}
                        className="rounded-[20px] border border-white/8 bg-slate-950/40 px-4 py-3 text-sm text-slate-300"
                      >
                        {responsibility}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-[32px] p-8 sm:p-10">
            <SectionHeading
              eyebrow="Education"
              title="Academic track in AI & ML"
              description="Formal education aligned with machine learning specialization and foundational science studies."
            />

            <div className="mt-10 space-y-5">
              {education.map((item) => (
                <div
                  key={item.institute}
                  className="rounded-[28px] border border-white/10 bg-white/6 p-6"
                >
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-orange-300" />
                    <h3 className="text-lg font-medium text-white">{item.institute}</h3>
                  </div>
                  <p className="mt-3 text-slate-200">{item.program}</p>
                  {item.duration ? (
                    <p className="mt-2 font-mono text-xs uppercase tracking-[0.3em] text-slate-500">
                      {item.duration}
                    </p>
                  ) : null}
                </div>
              ))}

              <div className="rounded-[28px] border border-sky-300/12 bg-gradient-to-br from-sky-400/10 to-orange-300/8 p-6">
                <div className="flex items-center gap-3">
                  <BrainCircuit className="h-5 w-5 text-cyan-200" />
                  <p className="text-lg font-medium text-white">Open to AI/ML internships</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Seeking opportunities in AI/ML and Data Science with a focus on real-world models, automation, and applied problem solving.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="projects" className="space-y-10">
          <SectionHeading
            eyebrow="Projects"
            title="GitHub-backed work, led by featured AI builds"
            description="Highlighted projects stay pinned to the top, while public GitHub repositories extend the portfolio with current work and experimentation."
          />

          <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={`${project.title}-${project.github}`}
                className={`glass-panel group rounded-[30px] p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-300/25 ${
                  project.featured ? "xl:col-span-1" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-slate-500">
                      {project.featured ? "Featured Build" : "GitHub Project"}
                    </p>
                    <h3 className="mt-3 text-2xl font-medium text-white">
                      {project.title}
                    </h3>
                  </div>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-slate-200 transition group-hover:border-orange-300/30 group-hover:bg-orange-300/10"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-300">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-sky-300/15 bg-sky-400/8 px-3 py-1 text-xs text-sky-100/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </AnimatedSection>

        <ResumeSection />

        <AnimatedSection className="glass-panel glow-ring rounded-[32px] p-8 sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-sky-300/80">
                Contact
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Let&apos;s build AI systems with product-level polish
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300/75">
                Reach out for internship opportunities, AI/ML collaboration, or portfolio discussions.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href={`mailto:${personalData.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-orange-300 px-6 py-3.5 text-sm font-semibold text-slate-950"
              >
                Email Saurabh
                <Mail className="h-4 w-4" />
              </Link>
              <Link
                href={personalData.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/6 px-6 py-3.5 text-sm font-medium text-white"
              >
                View GitHub
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <Chatbot />
    </main>
  );
}
