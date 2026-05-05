export default function Contact() {
  return (
    <div className="flex flex-col gap-10">
      <section>
        <h1 className="text-3xl font-semibold text-warm-ink font-serif leading-tight">Contact</h1>
        <p className="mt-2 text-warm-muted">Get in touch or get support for my apps.</p>
      </section>

      <section className="flex flex-col gap-4 text-warm-muted leading-relaxed">
        <p>
          Whether you have a question, found a bug, or just want to say hi — feel free to reach out.
          This page also serves as the support contact for all apps I build.
        </p>
      </section>

      <section className="border border-warm-border rounded-xl overflow-hidden shadow-sm">
        <div className="bg-warm-surface p-6 flex flex-col gap-1">
          <span className="text-xs text-warm-faint uppercase tracking-widest">Email</span>
          <a
            href="mailto:mmaxyhl@gmail.com"
            className="text-warm-ink font-medium hover:text-warm-accent transition-colors duration-150"
          >
            mmaxyhl@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
}
