import Image from "next/image";
import Link from "next/link";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const projects = [
    {
      title: "Choice-game",
      image: "/choice-game.PNG",
      description:
        "A lightweight browser game with branching choices and replayability—built to demo rapid prototyping and clean component design.",
      live: "https://choice-game.vercel.app/",
      github: "https://github.com/Saar-engflow/choice-game",
    },
    {
      title: "Weather-app website",
      image: "/weather-app.PNG",
      description:
        "weather app that provides users with real-time weather information for their location. It includes features such as current weather, hourly and daily forecasts, and weather alerts.",
      live: "https://weather-app-puce-theta-80.vercel.app/",
      github: "https://github.com/Saar-engflow/weather-app",
    },
    {
      title: "Coffee-shop website",
      image: "/Coffee-shop.PNG",
      description:
        "A sleek, conversion-focused cafe site featuring dynamic menus, location highlights and fast ordering to grow foot traffic and online sales.",
      live: "https://coffee-website-bice-one.vercel.app/",
      github: "https://github.com/Saar-engflow/coffee-website",
    },
    {
      title: "Photographer-portfolio website",
      image: "/Photographer-portfolio.PNG",
      description:
        "A minimalist, high-impact portfolio that showcases galleries beautifully, loads fast, and helps book more shoots with clear CTAs.",
      live: "https://photographer-portfolio-website-zeta.vercel.app/",
      github: "https://github.com/Saar-engflow/photographer-portfolio-website",
    }

  ];

  const skills: { name: string; level: number }[] = [
    { name: "HTML", level: 100 },
    { name: "CSS", level: 100 },
    { name: "JavaScript", level: 100 },
    { name: "Tailwind CSS", level: 80 },
    { name: "React", level: 80 },
    { name: "Next.js", level: 10 },
    // { name: "Node.js", level: 50 },
    // { name: "Express.js", level: 50 },
    // { name: "MongoDB", level: 50 },
    // { name: "Directus", level: 80 },
    // { name: "Docker", level: 50 },
    // { name: "Superset", level: 50 },
    { name: "Git & GitHub", level: 80 },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-zinc-200/60 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-black/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
          <Link href="#home" className="text-xl font-semibold tracking-tight">
            Robins Banda
          </Link>
          <nav className="hidden gap-6 text-sm font-medium sm:flex">
            <a href="#home" className="nav-link hover:text-zinc-600 dark:hover:text-zinc-300">
              Home
            </a>
            <a href="#projects" className="nav-link hover:text-zinc-600 dark:hover:text-zinc-300">
              Projects
            </a>
            <a href="#skills" className="nav-link hover:text-zinc-600 dark:hover:text-zinc-300">
              Skills
            </a>
            <a href="#contact" className="nav-link hover:text-zinc-600 dark:hover:text-zinc-300">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* HERO */}
        <section id="home" className="grid scroll-mt-20 grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:py-28 opacity-0 translate-y-4 transition-all duration-700">
          {/* Left: image with hover popup */}
          <div className="order-2 md:order-1">
            <div className="group relative mx-auto w-full max-w-lg">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-zinc-200 shadow-md dark:border-zinc-800">
                <Image
                  src="/hero.png"
                  alt="Robins Banda portrait"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  fill
                  sizes="(max-width: 768px) 100vw, 640px"
                  priority
                />
              </div>
              {/* Hover popup */}
              <div className="pointer-events-none absolute -right-6 -top-6 hidden w-60 translate-y-2 scale-95 rounded-xl border border-zinc-200 bg-white p-4 text-sm opacity-0 shadow-xl ring-1 ring-black/5 transition-all duration-200 group-hover:block group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-900">
                <p className="mb-2 text-xs uppercase tracking-wide text-zinc-500">Hi, I&apos;m</p>
                <p className="text-base font-semibold">Robins Banda</p>
                <p className="text-zinc-500">Frontend | React Developer</p>
              </div>
            </div>
          </div>

          {/* Right: heading */}
          <div className="order-1 space-y-5 md:order-2">
            <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              I build front-end experiences that make websites intuitive, fast, and visually consistent.
            </h1>
            <p className="max-w-prose text-lg text-zinc-600 dark:text-zinc-400">
              Turning design into seamless user interactions.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-zinc-800 active:translate-y-px dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-20 py-16 md:py-24 opacity-0 translate-y-4 transition-all duration-700">
          <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">Projects</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="flex grow flex-col gap-3 p-5">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{p.description}</p>
                  <div className="mt-3 flex gap-3">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-xs font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200"
                    >
                      Live Demo
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-4 py-2 text-xs font-medium hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="scroll-mt-20 py-16 md:py-24 opacity-0 translate-y-4 transition-all duration-700">
          <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">Skills</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((s) => (
              <div key={s.name} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 font-medium">
                    <SkillBadge abbr={s.name.substring(0, 2).toUpperCase()} />
                    {s.name}
                  </span>
                  <span className="text-zinc-500">{s.level}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-zinc-200 dark:bg-zinc-800">
                  <div
                    className="h-2 rounded-full bg-zinc-900 transition-[width] duration-500 ease-out dark:bg-zinc-100"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-20 py-16 md:py-24 opacity-0 translate-y-4 transition-all duration-700">
          <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">Contact</h2>
          <div className="grid gap-10 md:grid-cols-2">
            {/* Form using mailto (opens email client) */}
            <ContactForm />

            {/* Alternative links */}
            <div className="space-y-5">
              <div>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                  Reach me directly
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      className="group inline-flex items-center gap-2 rounded-lg p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                      href="tel:+260968112350"
                    >
                      {PhoneIcon}
                      <span>+260 774654642</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="group inline-flex items-center gap-2 rounded-lg p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                      href="mailto:robinsdev2@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {MailIcon}
                      <span>robinsdev2@gmail.com</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="group inline-flex items-center gap-2 rounded-lg p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                      href="https://wa.me/+260771011966"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {WhatsAppIcon}
                      <span>WhatsApp</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                  Socials
                </h3>
                <ul className="flex flex-wrap gap-3 text-sm">
                  <li>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-zinc-300 px-3 py-1.5 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900"
                      href="https://www.linkedin.com/in/robins-banda-b60693390?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {LinkedInIcon}
                      <span>LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-zinc-300 px-3 py-1.5 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900"
                      href="https://github.com/Saar-engflow"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {GitHubIcon}
                      <span>GitHub</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="group inline-flex items-center gap-2 rounded-full border border-zinc-300 px-3 py-1.5 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900"
                      href="https://www.upwork.com/freelancers/~0175fe3906258a41c4"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {UpworkIcon}
                      <span>Upwork</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <script dangerouslySetInnerHTML={{
        __html: `
        (() => {
          const links = Array.from(document.querySelectorAll('a.nav-link'));
          const sections = links.map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);
          if ("scrollBehavior" in document.documentElement.style) {
            document.documentElement.style.scrollBehavior = 'smooth';
          }
          const setActive = (id) => {
            links.forEach(a => {
              if (a.getAttribute('href') === '#' + id) {
                a.classList.add('text-zinc-900','dark:text-zinc-100');
              } else {
                a.classList.remove('text-zinc-900','dark:text-zinc-100');
              }
            });
          };
          const obs = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                setActive(e.target.id);
                e.target.classList.add('opacity-100','translate-y-0');
                e.target.classList.remove('opacity-0','translate-y-4');
              }
            });
          }, { rootMargin: '-30% 0px -60% 0px', threshold: [0, 0.25, 0.5, 1]});
          sections.forEach((s) => s && obs.observe(s));
        })();
      `}} />

      <footer className="border-t border-zinc-200 py-10 text-center text-sm text-zinc-500 dark:border-zinc-800">
        © {new Date().getFullYear()} Robins Banda. All rights reserved.
      </footer>
    </div>
  );
}

/* Utility SVG badge for skills */
const SkillBadge = ({ abbr }: { abbr: string }) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 text-zinc-700 dark:text-zinc-300" aria-hidden>
    <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.1" />
    <text x="12" y="16" textAnchor="middle" fontSize="10" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fill="currentColor">
      {abbr}
    </text>
  </svg>
);

/* Simple inline SVG icons (vector) */
const iconBase = "h-5 w-5 text-zinc-700 dark:text-zinc-300";

const GitHubIcon = (
  <svg viewBox="0 0 24 24" className={iconBase} aria-hidden>
    <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.1" />
    <path
      d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.69c-2.78.61-3.37-1.34-3.37-1.34-.46-1.15-1.12-1.46-1.12-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.9 1.54 2.36 1.1 2.94.84.09-.66.35-1.1.64-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.84c.85 0 1.7.11 2.5.33 1.9-1.29 2.74-1.02 2.74-1.02.56 1.38.21 2.4.11 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.35 4.7-4.59 4.95.36.31.68.92.68 1.86l-.01 2.76c0 .27.18.58.69.48A10 10 0 0012 2z"
      fill="currentColor"
    />
  </svg>
);

const LinkedInIcon = (
  <svg viewBox="0 0 24 24" className={iconBase} aria-hidden>
    <rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" opacity="0.1" />
    <text x="7" y="17" fontSize="11" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fill="currentColor">
      in
    </text>
  </svg>
);

const WhatsAppIcon = (
  <svg viewBox="0 0 24 24" className={iconBase} aria-hidden>
    <path d="M12 2a10 10 0 00-8.66 15l-1.12 4.08 4.19-1.1A10 10 0 1012 2z" fill="currentColor" opacity="0.1" />
    <path
      d="M16.35 13.5c-.24-.12-1.38-.68-1.6-.76-.22-.08-.38-.12-.53.12-.16.24-.61.76-.75.92-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.21-1.43-1.35-1.67-.14-.24-.02-.37.1-.49.1-.1.24-.26.36-.4.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.53-1.28-.73-1.76-.2-.48-.39-.42-.53-.43-.14-.01-.3-.01-.46-.01s-.42.06-.64.3c-.22.24-.84.82-.84 2.02 0 1.2.86 2.36.98 2.52.12.16 1.7 2.6 4.12 3.54.58.25 1.04.4 1.4.51.59.19 1.12.16 1.54.1.47-.07 1.38-.56 1.58-1.1.2-.54.2-1 .14-1.1-.06-.1-.22-.16-.46-.28z"
      fill="currentColor"
    />
  </svg>
);

const MailIcon = (
  <svg viewBox="0 0 24 24" className={iconBase} aria-hidden>
    <rect x="3" y="5" width="18" height="14" rx="2" fill="currentColor" opacity="0.1" />
    <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </svg>
);

const PhoneIcon = (
  <svg viewBox="0 0 24 24" className={iconBase} aria-hidden>
    <path d="M6 2h4l1 4-3 2a14 14 0 006 6l2-3 4 1v4c0 1.1-.9 2-2 2A16 16 0 014 6c0-1.1.9-2 2-2z" fill="currentColor" />
  </svg>
);

const UpworkIcon = (
  <svg viewBox="0 0 24 24" className={iconBase} aria-hidden>
    <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.1" />
    <text x="6" y="14" fontSize="7" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fill="currentColor">
      Up
    </text>
  </svg>
);
