import Link from "next/link";

const sections = {
  hero: {
    id: "hero",
    title: "AI-Powered Inclusive Learning for Every Student",
    subtitle:
      "Learn in your language. Improve your weak areas. Get career-ready.",
  },
  problem: {
    id: "problem",
    title: "Why EduBridge AI?",
  },
  features: {
    id: "features",
    title: "Built for Inclusive, Data-Driven Learning",
  },
  impact: {
    id: "impact",
    title: "Proven Impact",
  },
};

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-20 px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-10">
      <header className="flex items-center justify-between gap-4 rounded-2xl border border-slate-800/80 bg-slate-900/70 px-4 py-3 backdrop-blur lg:px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[--color-primary] text-lg font-bold text-slate-50">
            EB
          </div>
          <div>
            <p className="text-sm font-semibold tracking-tight text-slate-50">
              EduBridge AI
            </p>
            <p className="text-xs text-slate-400">
              Inclusive Learning Platform
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
          <a href={`#${sections.problem.id}`} className="hover:text-teal-300">
            Problem
          </a>
          <a href={`#${sections.features.id}`} className="hover:text-teal-300">
            Features
          </a>
          <a href={`#${sections.impact.id}`} className="hover:text-teal-300">
            Impact
          </a>
          <Link
            href="/auth/teacher"
            className="rounded-full border border-slate-700 px-4 py-1.5 text-xs font-semibold text-slate-100 hover:border-teal-400 hover:text-teal-300"
          >
            For Teachers
          </Link>
          <Link
            href="/auth/student"
            className="rounded-full bg-[--color-accent] px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-sm hover:bg-amber-400"
          >
            Start as Student
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-3 py-1 text-xs font-medium text-slate-100"
          >
            <span role="img" aria-label="language">
              🌐
            </span>
            <span>EN</span>
          </button>
        </div>
      </header>

      <section
        id={sections.hero.id}
        aria-labelledby="hero-heading"
        className="grid gap-10 rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 px-5 py-10 shadow-xl shadow-slate-950/60 md:grid-cols-[1.3fr,1fr] md:px-10"
      >
        <div className="flex flex-col gap-6">
          <div className="inline-flex max-w-max items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-200">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
            Accessible, multilingual & AI-first
          </div>

          <div>
            <h1
              id="hero-heading"
              className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl"
            >
              {sections.hero.title}
            </h1>
            <p className="mt-4 max-w-xl text-balance text-sm text-slate-300 sm:text-base">
              {sections.hero.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/auth/student"
              className="inline-flex items-center justify-center rounded-full bg-[--color-primary] px-6 py-2 text-sm font-semibold text-slate-50 shadow-lg shadow-blue-900/60 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Start as Student
            </Link>
            <Link
              href="/auth/teacher"
              className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/60 px-5 py-2 text-sm font-semibold text-slate-100 hover:border-teal-400 hover:text-teal-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Login as Teacher
            </Link>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-200"
            >
              <span role="img" aria-label="language toggle">
                🌐
              </span>
              <span>English · తెలుగు · हिंदी</span>
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-200"
            >
              <span role="img" aria-label="audio">
                🔊
              </span>
              <span>Listen to this page</span>
            </button>
          </div>

          <dl className="mt-2 grid gap-4 text-xs text-slate-300 sm:grid-cols-2 sm:text-sm">
            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 px-4 py-3">
              <dt className="text-slate-400">For Students</dt>
              <dd className="mt-1 font-medium text-slate-100">
                Simplified notes, adaptive quizzes, career roadmap.
              </dd>
            </div>
            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 px-4 py-3">
              <dt className="text-slate-400">For Teachers</dt>
              <dd className="mt-1 font-medium text-slate-100">
                Class analytics, weak-topic alerts, AI remedial plans.
              </dd>
            </div>
          </dl>
        </div>

        <div className="flex flex-col justify-between gap-6 rounded-3xl border border-slate-800/80 bg-slate-950/60 p-5 shadow-inner shadow-slate-950/80">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/80 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-300">
                  Student Snapshot
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-50">
                  Asha · Grade 10 · Telugu
                </p>
              </div>
              <span className="rounded-full bg-teal-500/20 px-3 py-1 text-xs font-semibold text-teal-300">
                72% mastery
              </span>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
              <div className="rounded-xl bg-slate-950/80 p-3">
                <p className="text-slate-400">Streak</p>
                <p className="mt-1 text-lg font-semibold text-amber-300">7</p>
                <p className="text-[11px] text-slate-500">days active</p>
              </div>
              <div className="rounded-xl bg-slate-950/80 p-3">
                <p className="text-slate-400">Weak Topics</p>
                <p className="mt-1 text-sm font-semibold text-rose-300">
                  Algebra, Optics
                </p>
                <p className="text-[11px] text-slate-500">AI study plan ready</p>
              </div>
              <div className="rounded-xl bg-slate-950/80 p-3">
                <p className="text-slate-400">Upcoming</p>
                <p className="mt-1 text-sm font-semibold text-teal-300">
                  Physics quiz
                </p>
                <p className="text-[11px] text-slate-500">Today · 7:00 PM</p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 text-xs text-slate-300">
            <div className="flex items-center justify-between rounded-2xl border border-slate-800/80 bg-slate-900/80 px-3 py-2.5">
              <div className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-500/20 text-base"
                >
                  🧠
                </span>
                <div>
                  <p className="text-xs font-semibold text-slate-100">
                    AI Simplifier
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Converts textbook paragraphs into bilingual simple notes.
                  </p>
                </div>
              </div>
              <span className="text-[11px] text-emerald-300">
                40% faster understanding
              </span>
            </div>

            <div className="flex items-center justify-between rounded-2xl border border-slate-800/80 bg-slate-900/80 px-3 py-2.5">
              <div className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-teal-500/20 text-base"
                >
                  📊
                </span>
                <div>
                  <p className="text-xs font-semibold text-slate-100">
                    Adaptive Quiz
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Questions change based on confidence and performance.
                  </p>
                </div>
              </div>
              <span className="text-[11px] text-sky-300">
                30% score improvement
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        id={sections.problem.id}
        className="grid gap-8 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 md:grid-cols-2 md:p-8"
        aria-labelledby="problem-heading"
      >
        <div className="flex flex-col justify-between gap-6">
          <div>
            <h2
              id="problem-heading"
              className="text-2xl font-semibold tracking-tight text-slate-50"
            >
              Learning gaps widen when content ignores context.
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Many students, especially from rural and multilingual backgrounds,
              have the potential but lack the right medium and support. Teachers
              also struggle to get granular insights on who needs help and
              where.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Common Barriers
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-slate-200">
              <li>• Textbook English is too complex.</li>
              <li>• No real-time feedback on weak topics.</li>
              <li>• Limited digital lab access in rural schools.</li>
              <li>• Teachers lack time for personalized remedials.</li>
            </ul>
          </div>
        </div>

        <div className="grid gap-4 text-sm">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/80 p-4">
            <p className="text-xs font-medium text-slate-400">
              Rural Student · Language Barrier
            </p>
            <p className="mt-2 text-sm text-slate-200">
              “I understand concepts when someone explains in Telugu, but exam
              questions are in English, and I freeze.”
            </p>
            <div className="mt-4 h-20 rounded-xl bg-gradient-to-r from-rose-500/30 via-amber-400/20 to-emerald-400/30 p-3">
              <p className="text-[11px] font-medium text-slate-950">
                Before EduBridge AI
              </p>
              <div className="mt-2 flex items-end gap-1">
                <div className="h-6 w-4 rounded-full bg-rose-500/80" />
                <div className="h-10 w-4 rounded-full bg-amber-400/80" />
                <div className="h-4 w-4 rounded-full bg-emerald-400/80" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-dashed border-teal-500/60 bg-slate-900/60 p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-teal-300">
              EduBridge AI Solves This With
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-slate-100">
              <li>• AI Simplifier with bilingual explanations.</li>
              <li>• Adaptive quizzes that start simple, then go deeper.</li>
              <li>• Teacher dashboards with weak-topic heatmaps.</li>
              <li>• Virtual labs that run on low bandwidth.</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id={sections.features.id}
        className="space-y-6 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 md:p-8"
        aria-labelledby="features-heading"
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2
              id="features-heading"
              className="text-2xl font-semibold tracking-tight text-slate-50"
            >
              {sections.features.title}
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-300">
              Every feature is built with accessibility, multilingual support,
              and measurable outcomes at the core.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-[11px]">
            <span className="rounded-full border border-emerald-500/50 bg-emerald-500/10 px-2.5 py-1 font-semibold uppercase tracking-wide text-emerald-300">
              High Contrast
            </span>
            <span className="rounded-full border border-sky-500/50 bg-sky-500/10 px-2.5 py-1 font-semibold uppercase tracking-wide text-sky-300">
              Screen Reader Friendly
            </span>
            <span className="rounded-full border border-amber-500/50 bg-amber-500/10 px-2.5 py-1 font-semibold uppercase tracking-wide text-amber-300">
              Low Cognitive Load
            </span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3">
          {[
            {
              icon: "🧠",
              title: "AI Simplifier",
              description:
                "Turn complex textbook paragraphs into language-friendly summaries with examples.",
            },
            {
              icon: "🌐",
              title: "Multilingual Support",
              description:
                "Switch between English, Telugu and Hindi for content, hints, and explanations.",
            },
            {
              icon: "📝",
              title: "Adaptive Quizzes",
              description:
                "AI adjusts question difficulty based on confidence and previous answers.",
            },
            {
              icon: "📊",
              title: "Performance Analytics",
              description:
                "Track progress by subject, topic, and concept-level mastery over time.",
            },
            {
              icon: "🧪",
              title: "Virtual Labs",
              description:
                "Run interactive physics and science experiments even with limited hardware.",
            },
            {
              icon: "🎯",
              title: "Career Roadmap Generator",
              description:
                "Map strengths and interests to courses, projects and internships.",
            },
          ].map((card) => (
            <article
              key={card.title}
              className="flex flex-col gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/70 p-4 transition-transform hover:-translate-y-0.5 hover:border-teal-400/80"
            >
              <div className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800/80 text-lg"
                >
                  {card.icon}
                </span>
                <h3 className="text-sm font-semibold text-slate-50">
                  {card.title}
                </h3>
              </div>
              <p className="text-xs text-slate-300">{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id={sections.impact.id}
        className="grid gap-6 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 md:grid-cols-[1.2fr,1fr] md:p-8"
        aria-labelledby="impact-heading"
      >
        <div>
          <h2
            id="impact-heading"
            className="text-2xl font-semibold tracking-tight text-slate-50"
          >
            Measurable impact for students and schools.
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-300">
            EduBridge AI tracks learning speed, retention, and performance
            across languages—so you can prove outcomes, not just usage.
          </p>

          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-4">
              <dt className="text-xs font-medium text-emerald-200">
                Faster Understanding
              </dt>
              <dd className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-semibold text-emerald-300">
                  40%
                </span>
                <span className="text-xs text-emerald-100">
                  faster concept grasp vs. textbook-only.
                </span>
              </dd>
            </div>
            <div className="rounded-2xl border border-sky-500/40 bg-sky-500/10 p-4">
              <dt className="text-xs font-medium text-sky-200">
                Score Improvement
              </dt>
              <dd className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-semibold text-sky-300">30%</span>
                <span className="text-xs text-sky-100">
                  average increase after 6 weeks of use.
                </span>
              </dd>
            </div>
          </dl>

          <dl className="mt-4 grid gap-3 text-xs text-slate-200 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/70 p-3">
              <dt className="text-slate-400">Multi-language support</dt>
              <dd className="mt-1 font-semibold text-slate-100">
                English · తెలుగు · हिंदी
              </dd>
            </div>
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/70 p-3">
              <dt className="text-slate-400">24/7 AI Assistant</dt>
              <dd className="mt-1 font-semibold text-slate-100">
                Homework, doubts & revision.
              </dd>
            </div>
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/70 p-3">
              <dt className="text-slate-400">Security</dt>
              <dd className="mt-1 font-semibold text-slate-100">
                Role-based, encrypted & anonymized analytics.
              </dd>
            </div>
          </dl>
        </div>

        <div className="flex flex-col justify-between gap-4">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/80 p-4 text-xs text-slate-200">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
              System Flow
            </p>
            <ol className="mt-3 space-y-2">
              <li className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-[11px]">
                  1
                </span>
                <span>Student or Teacher logs in from web or mobile.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-[11px]">
                  2
                </span>
                <span>Frontend captures context, preferences and activity.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-[11px]">
                  3
                </span>
                <span>
                  Backend orchestrates AI APIs for simplification, quizzes and
                  analytics.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-[11px]">
                  4
                </span>
                <span>
                  Aggregated data is stored securely in the database and shown
                  in dashboards.
                </span>
              </li>
            </ol>
          </div>

          <div className="rounded-2xl border border-dashed border-amber-500/60 bg-amber-500/10 p-4 text-xs text-amber-50">
            <p className="text-[11px] font-semibold uppercase tracking-wide">
              Advanced Features (Roadmap)
            </p>
            <ul className="mt-2 space-y-1.5">
              <li>• Offline sync mode for low-connectivity schools.</li>
              <li>• Voice-based navigation for hands-free learning.</li>
              <li>• AI Study Buddy chat tuned to syllabus & context.</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="mt-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 px-4 py-4 text-xs text-slate-300 sm:px-6 sm:py-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-slate-100">
              EduBridge AI
            </p>
            <p className="max-w-md text-xs text-slate-400">
              Accessibility-first learning platform bridging rural and urban
              learners through AI, multilingual content and data-driven
              insights.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 sm:justify-end">
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-semibold text-slate-400">
                Product
              </span>
              <Link href="/about" className="hover:text-teal-300">
                About
              </Link>
              <Link href="/contact" className="hover:text-teal-300">
                Contact
              </Link>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-semibold text-slate-400">
                Legal
              </span>
              <Link href="/privacy" className="hover:text-teal-300">
                Privacy
              </Link>
              <button
                type="button"
                className="text-left text-slate-300 hover:text-teal-300"
              >
                Accessibility statement
              </button>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-semibold text-slate-400">
                Social
              </span>
              <a href="#" className="hover:text-teal-300">
                LinkedIn
              </a>
              <a href="#" className="hover:text-teal-300">
                YouTube
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-800/80 pt-3 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} EduBridge AI. All rights reserved.</p>
          <p>Built with accessibility-first UI principles.</p>
        </div>
      </footer>
    </main>
  );
}
