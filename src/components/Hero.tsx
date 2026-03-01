const HERO_NAME = "Shreyas Guha Neogi";
const HERO_TITLE = "Frontend Developer & UI Engineer";
const HERO_ONELINER = "I build fast, accessible, and beautiful web experiences.";

const CTAS = [
  { label: "View My Work", href: "#projects", primary: true },
  { label: "Download Resume", href: "/resume.pdf", primary: false },
];

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero introduction"
      className="min-h-screen w-full flex items-center justify-center bg-white dark:bg-zinc-950 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-2xl py-24 md:py-32 lg:py-40 flex flex-col items-center md:items-start gap-8">
        <div className="space-y-4 w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {HERO_NAME}
          </h1>

          <p
            role="doc-subtitle"
            className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-medium"
          >
            {HERO_TITLE}
          </p>

          <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-300 max-w-prose leading-relaxed">
            {HERO_ONELINER}
          </p>
        </div>

        <div
          role="group"
          aria-label="Call to action buttons"
          className="flex flex-col sm:flex-row gap-4 pt-4"
        >
          {CTAS.map((cta) => (
            <a
              key={cta.label}
              href={cta.href}
              aria-label={
                cta.primary
                  ? "View my portfolio projects"
                  : "Download resume as PDF"
              }
              download={!cta.primary ? true : undefined}
              className={
                cta.primary
                  ? "px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold rounded-lg transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950"
                  : "px-6 py-3 border-2 border-zinc-900 dark:border-white text-zinc-900 dark:text-white font-semibold rounded-lg transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950"
              }
            >
              {cta.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
