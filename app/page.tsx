"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "motion/react";

const commandCells = [
  {
    id: "001",
    title: "Vault Status",
    value: "Private",
    detail: "Encrypted workspace active",
  },
  {
    id: "002",
    title: "Knowledge Indexed",
    value: "18,420",
    detail: "Docs, SOPs, policies, PDFs",
  },
  {
    id: "003",
    title: "Access Mode",
    value: "Aware",
    detail: "Answers follow team permissions",
  },
];

const sources = ["Documents", "Emails", "Notion", "PDFs", "Slack", "Files"];

const features = [
  ["Secure knowledge vault", "A private layer for company documents, policies, notes, and business data."],
  ["AI document search", "Ask natural questions and receive clear, sourced answers from trusted internal files."],
  ["Smart summaries", "Compress long documents into briefings, risks, next steps, and decision-ready context."],
  ["Permission-aware access", "Search results and AI answers stay aligned with teams, roles, and folders."],
  ["Team collaboration", "Share collections, preserve institutional memory, and keep teams working from the same source."],
  ["Audit logs", "Track uploads, searches, access changes, and answer history across the workspace."],
];

const useCases = [
  "HR policies",
  "Legal documents",
  "Customer support docs",
  "Internal SOPs",
  "Research archives",
];

const footerGroups = [
  ["Product", "AI Search", "Knowledge Vault", "Permissions", "Audit Logs"],
  ["Company", "About", "Customers", "Careers", "Contact"],
  ["Security", "Encryption", "Access Control", "Compliance", "Status"],
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 34, filter: "blur(14px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8 },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.25,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-50 h-[3px] w-full origin-left bg-violet-600"
      style={{ scaleX }}
    />
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2.4"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7m0 0H8m9 0v9" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3.75 5.25 6v5.35c0 4.21 2.7 7.94 6.75 9.15 4.05-1.21 6.75-4.94 6.75-9.15V6L12 3.75Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 12 1.5 1.5 3-3" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-4.35-4.35m1.1-5.15a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"
      />
    </svg>
  );
}

function VaultMonolith() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.35], [0, -90]);
  const rotate = useTransform(scrollYProgress, [0, 0.35], [0, 10]);
  const scale = useTransform(scrollYProgress, [0, 0.35], [1, 0.9]);

  return (
    <motion.div
      className="vault-stage"
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.92, filter: "blur(18px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 1.2, delay: 0.25 }}
      style={{ rotate, scale, y }}
    >
      <div className="vault-aura" />
      <div className="vault-monolith">
        <div className="vault-face vault-face-top" />
        <div className="vault-face vault-face-left" />
        <div className="vault-face vault-face-right" />
        <div className="vault-core">
          <div className="vault-ring" />
          <div className="vault-slot" />
        </div>
      </div>
    </motion.div>
  );
}

function MiniDashboard() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0.05, 0.45], [42, -36]);

  return (
    <motion.div
      className="glass-panel relative overflow-hidden p-4 sm:p-5"
      style={{ y }}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      <div className="scanline" />
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="mono-label text-zinc-500">AI SEARCH SESSION</p>
          <h3 className="mt-2 text-lg font-semibold text-zinc-950">Ask the vault</h3>
        </div>
        <div className="flex h-11 w-11 items-center justify-center border border-zinc-200 bg-white text-zinc-950">
          <SearchIcon />
        </div>
      </div>

      <div className="mt-6 border border-zinc-200 bg-white p-4 shadow-sm">
        <p className="text-sm text-zinc-800">
          What changed in our vendor security review process?
        </p>
        <div className="mt-4 border-l border-violet-500 pl-4">
          <p className="text-sm leading-6 text-zinc-600">
            Vendor reviews now require data-flow mapping, SOC 2 evidence, and
            legal approval before procurement. High-risk vendors need quarterly
            revalidation.
          </p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        {["98% match", "3 sources", "0 conflicts"].map((item) => (
          <div className="border border-zinc-200 bg-white px-2 py-3" key={item}>
            <p className="text-[11px] font-semibold text-zinc-950">{item}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="min-h-dvh overflow-hidden bg-[#fbfbfc] text-zinc-950">
      <ScrollProgress />
      <section className="liquid-field relative min-h-dvh w-full">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,24,27,0.06)_1px,transparent_1px),linear-gradient(0deg,rgba(24,24,27,0.045)_1px,transparent_1px)] bg-[size:96px_96px] opacity-60" />

        <motion.header
          className="relative z-20 flex items-center justify-between px-5 py-6 sm:px-8 lg:px-12"
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <a className="flex min-h-11 items-center gap-3" href="#" aria-label="Lumivault home">
            <span className="relative flex h-3 w-3 rounded-full bg-zinc-950">
              <span className="absolute inset-0 animate-ping rounded-full bg-violet-500 opacity-25" />
            </span>
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-zinc-950">
              Lumivault
            </span>
          </a>
          <nav className="hidden items-center gap-7 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500 md:flex">
            <a className="transition hover:text-zinc-950" href="#features">Features</a>
            <a className="transition hover:text-zinc-950" href="#security">Security</a>
            <a className="transition hover:text-zinc-950" href="#use-cases">Use Cases</a>
          </nav>
          <a
            className="inline-flex min-h-11 items-center gap-3 border border-zinc-300 bg-white/70 px-4 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-950 shadow-sm transition hover:border-zinc-950 hover:bg-zinc-950 hover:text-white"
            href="#cta"
          >
            Start Free
            <ArrowUpRightIcon />
          </a>
        </motion.header>

        <div className="relative z-10 grid min-h-[calc(100dvh-92px)] gap-10 px-5 pb-10 sm:px-8 lg:grid-cols-[minmax(0,1fr)_390px] lg:px-12">
          <motion.div
            className="flex min-w-0 flex-col justify-between gap-12 py-10 lg:py-14"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <div className="max-w-6xl">
              <motion.p className="mono-label mb-6 text-violet-700" variants={reveal}>
                SECURE AI KNOWLEDGE STORAGE FOR MODERN TEAMS
              </motion.p>
              <motion.h1
                className="hero-title text-[4rem] font-black uppercase leading-[0.84] text-zinc-950 sm:text-[6.8rem] lg:text-[9.2rem] xl:text-[10.8rem]"
                variants={reveal}
              >
                COMPANY
                <br />
                <span className="text-outline">KNOWLEDGE</span>
                <br />
                VAULT
              </motion.h1>
              <motion.p
                className="mt-8 max-w-xl font-mono text-[11px] uppercase leading-7 tracking-[0.28em] text-zinc-600"
                variants={reveal}
              >
                Turn scattered documents, files, and internal knowledge into a
                secure AI-powered vault that delivers clear answers on demand.
              </motion.p>
            </div>

            <motion.div className="flex flex-col gap-5 sm:flex-row sm:items-center" variants={reveal}>
              <a
                className="group inline-flex min-h-14 w-fit items-center gap-5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-950"
                href="#cta"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-zinc-300 bg-white transition duration-300 group-hover:border-zinc-950 group-hover:bg-zinc-950 group-hover:text-white">
                  <ArrowUpRightIcon />
                </span>
                Start Building Your Vault
              </a>
              <a
                className="inline-flex min-h-12 w-fit items-center border border-zinc-300 bg-white/70 px-5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-700 shadow-sm transition hover:border-zinc-950 hover:text-zinc-950"
                href="#demo"
              >
                See How It Works
              </a>
            </motion.div>
          </motion.div>

          <motion.aside
            className="relative z-20 flex flex-col justify-center gap-4 pb-10 lg:pb-0"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {commandCells.map((cell) => (
              <motion.div
                className="glass-panel command-cell p-5 sm:p-6"
                key={cell.id}
                variants={reveal}
              >
                <p className="mono-label text-zinc-500">
                  {cell.id}
                  {" // "}
                  {cell.title}
                </p>
                <div className="mt-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-3xl font-bold leading-none tracking-normal text-zinc-950">
                      {cell.value}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-zinc-600">{cell.detail}</p>
                  </div>
                  <div className="h-[2px] w-20 overflow-hidden bg-zinc-200">
                    <div className="h-full w-2/3 bg-zinc-950" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.aside>

          <VaultMonolith />
        </div>
      </section>

      <motion.section
        id="demo"
        className="relative border-y border-zinc-200 bg-white px-5 py-14 sm:px-8 lg:px-12"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mono-label text-violet-700">THE PROBLEM</p>
            <h2 className="mt-4 max-w-xl text-4xl font-black uppercase leading-none text-zinc-950 sm:text-6xl">
              Your team knowledge is everywhere
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-600">
              Documents, emails, Notion pages, PDFs, messages, and files all
              hold important context. Lumivault gives it a private intelligence
              layer without loosening control.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-[1fr_0.8fr]">
            <MiniDashboard />
            <div className="grid grid-cols-2 gap-3">
              {sources.map((source) => (
                <motion.div
                  className="glass-panel flex min-h-24 items-end p-4"
                  key={source}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55 }}
                >
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-700">
                    {source}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="features"
        className="relative bg-[#fbfbfc] px-5 py-20 sm:px-8 lg:px-12"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mono-label text-blue-700">FEATURES</p>
              <h2 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-none text-zinc-950 sm:text-6xl">
                Built for speed, governed for serious teams
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-zinc-600">
              Search, summarize, collaborate, and audit in one controlled vault.
            </p>
          </div>

          <div className="mt-12 grid border-t border-l border-zinc-200 bg-white md:grid-cols-2 lg:grid-cols-3">
            {features.map(([title, copy], index) => (
              <motion.article
                className="min-h-64 border-r border-b border-zinc-200 bg-white p-6 transition hover:bg-zinc-50"
                key={title}
                initial={{ opacity: 0, y: 42 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, delay: (index % 3) * 0.06 }}
              >
                <p className="mono-label text-zinc-400">0{index + 1}</p>
                <div className="mt-12 flex h-10 w-10 items-center justify-center border border-zinc-200 bg-zinc-50 text-violet-700">
                  <ShieldIcon />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-zinc-950">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-600">{copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="security"
        className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="mono-label text-violet-700">SECURITY POSTURE</p>
            <h2 className="mt-4 max-w-4xl text-5xl font-black uppercase leading-none text-zinc-950 sm:text-7xl">
              Private by design. Useful by default.
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-600">
              Lumivault combines encrypted storage, role-based access, private
              workspaces, and audit logs so teams can use AI without turning
              company knowledge into an uncontrolled surface.
            </p>
          </div>

          <motion.div
            className="glass-panel p-5 sm:p-7"
            initial={{ opacity: 0, x: 42 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75 }}
          >
            <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-700">
                Trust Matrix
              </p>
              <span className="border border-emerald-300 bg-emerald-50 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-700">
                Healthy
              </span>
            </div>
            {["Encrypted storage", "Role-based access", "Private team workspace", "Audit logs"].map((item) => (
              <div className="flex items-center justify-between border-b border-zinc-200 py-5" key={item}>
                <div className="flex items-center gap-3">
                  <span className="text-violet-700">
                    <ShieldIcon />
                  </span>
                  <span className="text-sm font-medium text-zinc-800">{item}</span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                  Active
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="use-cases"
        className="bg-[#fbfbfc] px-5 py-20 sm:px-8 lg:px-12"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mx-auto max-w-7xl">
          <p className="mono-label text-blue-700">USE CASES</p>
          <div className="mt-7 grid gap-4 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <h2 className="text-4xl font-black uppercase leading-none text-zinc-950 sm:text-6xl">
              Company answers, wherever they hide
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {useCases.map((item) => (
                <motion.div
                  className="glass-panel flex min-h-20 items-center justify-between p-4"
                  key={item}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.55 }}
                >
                  <span className="text-sm font-medium text-zinc-800">{item}</span>
                  <ArrowUpRightIcon />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="cta"
        className="liquid-field relative px-5 py-24 text-center sm:px-8 lg:px-12"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mono-label text-violet-700">START THE VAULT</p>
          <h2 className="mt-5 text-5xl font-black uppercase leading-none text-zinc-950 sm:text-7xl lg:text-8xl">
            Build your company brain with Lumivault
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-zinc-600">
            Secure your data, organize your knowledge, and search it with AI
            from one calm, private workspace.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              className="inline-flex min-h-14 items-center gap-4 bg-zinc-950 px-6 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-violet-700"
              href="mailto:hello@lumivault.ai"
            >
              Start for Free
              <ArrowUpRightIcon />
            </a>
            <a
              className="inline-flex min-h-14 items-center border border-zinc-300 bg-white/70 px-6 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-950 transition hover:border-zinc-950"
              href="#demo"
            >
              View Demo
            </a>
          </div>
        </div>
      </motion.section>

      <motion.footer
        className="border-t border-zinc-200 bg-white px-5 py-12 sm:px-8 lg:px-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75 }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr]">
            <div>
              <a className="flex min-h-11 items-center gap-3" href="#" aria-label="Lumivault home">
                <span className="flex h-9 w-9 items-center justify-center bg-zinc-950 text-white">
                  <ShieldIcon />
                </span>
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-zinc-950">
                  Lumivault
                </span>
              </a>
              <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-600">
                Secure AI knowledge storage for teams that need fast answers
                without losing control of private company context.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              {footerGroups.map(([heading, ...links]) => (
                <div key={heading}>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-950">
                    {heading}
                  </p>
                  <div className="mt-4 flex flex-col gap-3">
                    {links.map((link) => (
                      <a className="text-sm text-zinc-600 transition hover:text-zinc-950" href="#" key={link}>
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-zinc-200 pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Lumivault. All rights reserved.</p>
            <div className="flex gap-5">
              <a className="transition hover:text-zinc-950" href="#">Privacy</a>
              <a className="transition hover:text-zinc-950" href="#">Terms</a>
              <a className="transition hover:text-zinc-950" href="#">Security</a>
            </div>
          </div>
        </div>
      </motion.footer>
    </main>
  );
}
