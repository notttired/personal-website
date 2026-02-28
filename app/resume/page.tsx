export default function Resume() {
  return (
    <div className="flex flex-col gap-10">
      {/* Experience */}
      <section>
        <h2 className="text-xs uppercase tracking-widest text-warm-faint mb-5 pb-2 border-b border-warm-border-light">Experience</h2>
        <div className="flex flex-col gap-6">
          <div>
            <div className="flex items-baseline justify-between">
              <span className="text-warm-ink font-medium">Huawei Technologies Canada · Software Engineer Intern (HCI R&D)</span>
              <span className="text-sm text-warm-faint font-mono shrink-0 ml-4">Jan 2026 – Present</span>
            </div>
            <ul className="mt-2 flex flex-col gap-1">
              <li className="text-sm text-warm-muted leading-relaxed">– Engineered data and validation pipelines using Python, Pandas for feature discovery and edge-case testing for LightGBM-based cross-device gesture detection</li>
              <li className="text-sm text-warm-muted leading-relaxed">– Increased recall from 97% to 99% and reduced false positives by 52% for commercialization across millions of devices</li>
              <li className="text-sm text-warm-muted leading-relaxed">– Built a low-latency multimodal tutorial agent using Python, asyncio, multiprocessing, and WebSockets to stream audio/video and generate real-time feedback via open-source LLMs</li>
            </ul>
          </div>
          <div>
            <div className="flex items-baseline justify-between">
              <span className="text-warm-ink font-medium">Huawei Technologies Canada · Software Engineer Intern (HCI R&D)</span>
              <span className="text-sm text-warm-faint font-mono shrink-0 ml-4">Sep – Dec 2025</span>
            </div>
            <ul className="mt-2 flex flex-col gap-1">
              <li className="text-sm text-warm-muted leading-relaxed">– Engineered multimodal LLM workflows for mobile proactive agents with concurrent prompt processing</li>
              <li className="text-sm text-warm-muted leading-relaxed">– Built a real-time proactive mobile audio agent with RAG in Kotlin and Python</li>
              <li className="text-sm text-warm-muted leading-relaxed">– Optimized a map recognition service using Flask, OpenCV with parallelization to reduce latency by 31%, built React frontend for visualization</li>
              <li className="text-sm text-warm-muted leading-relaxed">– Built Android communication infrastructure in Java/Kotlin integrating HTTP and WebSockets, reducing duplicate code and accelerating prototyping speed 3×</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Other Experience */}
      <section>
        <h2 className="text-xs uppercase tracking-widest text-warm-faint mb-5 pb-2 border-b border-warm-border-light">Other Experience</h2>
        <div className="flex flex-col gap-6">
          <div>
            <div className="flex items-baseline justify-between">
              <span className="text-warm-ink font-medium">Glenforest CS Club · Algorithms & Data Structures Instructor</span>
              <span className="text-sm text-warm-faint font-mono shrink-0 ml-4">2021 – 2024</span>
            </div>
            <ul className="mt-2 flex flex-col gap-1">
              <li className="text-sm text-warm-muted leading-relaxed">– Competed in inter-school and national programming contests</li>
              <li className="text-sm text-warm-muted leading-relaxed">– Trained 20+ members through weekly Python lectures and group projects</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-xs uppercase tracking-widest text-warm-faint mb-5 pb-2 border-b border-warm-border-light">Education</h2>
        <div className="flex flex-col gap-4">
          <div>
            <div className="flex items-baseline justify-between">
              <span className="text-warm-ink font-medium">University of Waterloo · B.CS Computer Science (Co-op)</span>
              <span className="text-sm text-warm-faint font-mono shrink-0 ml-4">Expected 2028</span>
            </div>
            <p className="mt-1 text-sm text-warm-muted">GPA: 3.89</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-xs uppercase tracking-widest text-warm-faint mb-5 pb-2 border-b border-warm-border-light">Skills</h2>
        <div className="flex flex-col gap-2">
          {[
            { category: "Languages", items: "Python, Java, Kotlin, TypeScript, Go, C, C++, Bash, HTML/CSS, SQL" },
            { category: "Frontend", items: "React, Next.js, Tailwind CSS, Jetpack Compose, ArkTS" },
            { category: "Backend", items: "Spring Boot, FastAPI, Node.js, Flask, gRPC, REST" },
            { category: "Data / ML", items: "Pandas, NumPy, PyTorch, LightGBM" },
            { category: "Infra", items: "Docker, Kubernetes, AWS, GCP, GitHub Actions, RabbitMQ, Redis" },
            { category: "Databases", items: "PostgreSQL, MongoDB, MySQL" },
          ].map(({ category, items }) => (
            <div key={category} className="flex text-sm">
              <span className="w-24 shrink-0 text-warm-faint">{category}</span>
              <span className="text-warm-muted">{items}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
