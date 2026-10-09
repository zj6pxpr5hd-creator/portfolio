import TechnologyCard, { type Technology } from "./TechnologyCard";

const technologies: Technology[] = [
  {
    name: "HTML, CSS and JavaScript",
    category: "Universal and Foundational",
    description:
      "The first programming languages I learned by myself following my passion to see things appear on screen after writing a line of code.",
    accent: "fuchsia",
    path: "/index.html",
    code: `<button id="btn">Light Mode</button>
  <style> 
    #btn {cursor: pointer;}  .dark {color: #fff;} 
  </style>
  <script> 
    btn.onclick = () => btn.textContent = btn.classList.toggle('dark') ? 'Dark Mode' : 
    'Light Mode';
  </script>`,
    strength: "Extremely fast feedback loop, Clean separation of concerns, Massive ecosystem and accessibility.",
    tradeoff: "Debugging CSS, Global scope Bleed, Client performance bloat.",
    wide: true
  },



  {
    name: "TypeScript & React",
    category: "Full-stack interface",
    description:
      "My first framework and the one I still use to build responsive, strongly typed frontend interfaces with predictable state machines and zero runtime surprises.",
    accent: "cobalt",
    path: "client/contracts.schema.ts",
    code: `export interface ChatMessage {
  role: 'user' | 'assistant' | 'info';
  content: string;}

const updatedMessages: ChatMessage[] = 
  [...messages, { role: 'user' as const, 
  content: value }];

setMessages(updatedMessages);
`,
    strength: "Type-Safe component contracts, Refactoring confidence.",
    tradeoff: "Boilerplate and verbosity increases code size, No built-in runtime safety.",
  },

  {
    name: "Express.js",
    category: "Minimalist Backend",
    description:
      "The bare-bones, middleware-driven microframework that established the standard for HTTP routing and API development in Node.js.",
    accent: "amber",
    path: "signalboard/server/index.js",
    code: `import express from 'express';
const app = express();

app.get('/api', (req, res) => res.json({ status: 'ok' }));
app.listen(3000);`,
    strength: "Extreme architectural freedom, Rapid prototyping and a Small learning curve.",
    tradeoff: "Lack of strict conventions, Async error handling complexity.",

  },

  {
    name: "PostgreSQL & SQL",
    category: "Data architecture",
    description:
      "Understanding relational algebra, query planners, indexing trade-offs, and ACID transaction durability guarantees.",
    accent: "lime",
    path: "db/schema.sql",
    code: `CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);`,
    strength: "Durable relational guarantees, expressive queries, transparent plans.",
    tradeoff: "Connection pooling and migrations require operational discipline.",
  },



  {
    name: "Docker & Linux",
    category: "Deployment",
    description:
      "Used to containerize applications and managing them in a Linux environment.",
    accent: "purple",
    path: "aurora_prot/Dockerfile",
    code: `  FROM node:22-alpine AS frontend-builder

  RUN corepack enable && corepack prepare 
  pnpm@12.9.1 --activate
  
  WORKDIR /app`,
    strength: "Containerized deployment, Reproducible builds, and Linux command-line proficiency.",
    tradeoff: "Disk and layer bloat, Persistent storage management, and Linux learning curve.",
  },




];

function Stack() {
  return (
    <section className="stack" id="stack" aria-labelledby="stack-title">
      <header className="section-heading">
        <div>
          <span className="section-heading__eyebrow section-heading__eyebrow--amber mono-label">
            <span aria-hidden="true" /> Craft &amp; learning radar
          </span>
          <h2 id="stack-title">Technologies I Study &amp; Build With</h2>
        </div>
        <span className="section-heading__aside mono-label">
          Systems primitives · annotated
        </span>
      </header>
      <div className="technology-grid">
        {technologies.map((technology) => (
          <TechnologyCard key={technology.name} technology={technology} />
        ))}
      </div>
    </section>
  );
}

export default Stack;
