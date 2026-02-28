export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      {/* Hero */}
      <section>
        <h1 className="text-3xl font-semibold text-warm-ink font-serif leading-tight">Max Li</h1>
        <p className="mt-2 text-warm-muted">Computer Science @ University of Waterloo</p>
      </section>

      {/* Bio */}
      <section className="flex flex-col gap-4 text-warm-muted leading-relaxed">
        <p>
          I build things for the web and beyond. Currently a Software Engineer Intern at Huawei Technologies Canada,
          working on HCI R&D — from cross-device gesture detection to multimodal LLM agents.
        </p>
        <p>
          I&apos;m interested in distributed systems, developer tooling, and building things that scale.
        </p>
      </section>

      {/* Links */}
      <section className="flex gap-6">
        <a
          href="https://github.com/notttired"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-warm-faint hover:text-warm-accent transition-colors duration-200"
        >
          GitHub ↗
        </a>
        <a
          href="https://www.linkedin.com/in/max-li-286557258"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-warm-faint hover:text-warm-accent transition-colors duration-200"
        >
          LinkedIn ↗
        </a>
        <a
          href="mailto:mmaxyhl@gmail.com"
          className="text-sm text-warm-faint hover:text-warm-accent transition-colors duration-200"
        >
          Email ↗
        </a>
      </section>
    </div>
  );
}
