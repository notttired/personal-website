const projects = [
  {
    title: "Notification Service",
    description:
      "A distributed notification service using FastAPI, deployed on a local Kubernetes cluster with RabbitMQ for backpressure and KEDA for event-driven scaling to 1,000+ msgs/sec.",
    tech: ["Python", "RabbitMQ", "Docker", "Kubernetes", "FastAPI"],
    repo: "https://github.com/notttired",
  },
  {
    title: "Aire — Flight Scraper",
    description:
      "A scalable flight scraper with React, FastAPI, and Playwright to scrape airline sources concurrently. Uses Redis rate-limiting and RabbitMQ for async job queuing, deployed on GCE and Vercel.",
    tech: ["Python", "Playwright", "Redis", "RabbitMQ", "PostgreSQL", "React"],
    repo: "https://github.com/notttired",
  },
  {
    title: "Cartly — Web Scraping API",
    description:
      "A web-scraping API orchestrator in Java with scheduled scraping and notification services in Go, supporting async updates and real-time alerts.",
    tech: ["Java", "Spring Boot", "Selenium", "Go", "Gin"],
    repo: "https://github.com/notttired",
  },
];

export default function Projects() {
  return (
    <div>
      <div className="border border-warm-border rounded-xl overflow-hidden grid grid-cols-1 sm:grid-cols-2 gap-px bg-warm-border-light shadow-sm">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-warm-surface hover:bg-warm-surface-hover transition-colors duration-200 p-6 flex flex-col"
          >
            <h2 className="text-warm-ink font-semibold text-sm font-serif">{project.title}</h2>
            <p className="mt-2 text-sm text-warm-muted leading-relaxed">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs text-warm-faint border border-warm-border rounded-full px-2 py-0.5"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-auto pt-4 flex gap-4">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-warm-faint hover:text-warm-accent transition-colors duration-200"
                >
                  Repo ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
