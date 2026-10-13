# AGENTS.md

## 1. Project Purpose & Mission
This repository houses an elite, high-craft developer portfolio and interactive terminal system built under the design philosophy of **Technical Brutalism meets Ultra-Minimalism**. The overarching goal is to present a surgical, precise, unyielding, and quiet interface tailored for software engineers, systems architects, and technical leaders, emphasizing functional clarity, typography tension (Space Grotesk and JetBrains Mono), and zero decorative noise.

## 2. General Architecture & Tech Stack
- **Framework & UI Library**: React 18+ with TypeScript (`tsx`), bundled via Vite.
- **Styling**: Vanilla CSS with custom design tokens, layout grids, and component-specific stylesheets mirroring design constraints.
- **Language**: TypeScript (`tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`).
- **Package Management**: `pnpm` (`pnpm-lock.yaml`).
- **Environment Requirements**: Node.js runtime (LTS recommended) and standard web development tooling.

## 3. Data Flow
1. **User Trigger**: The user visits the web application or interacts with UI components (e.g., project cards, command modules, contact interfaces).
2. **State & Rendering**: React mounts the top-level `App` component within `src/main.tsx`, rendering modular components (`Header`, `Hero`, `ProjectsSection`, `Stack`, `Contacts`, `CommandModule`, `AnimatedBackground`) wrapped by the `site-shell`.
3. **Asset & Style Integration**: Static elements load public assets (such as profile pictures) while CSS modules inject layout parameters, strict 0px geometry, and high-contrast dark-mode terminal palettes derived from `DESIGN.md`.
4. **Output Interface**: The DOM updates dynamically to provide responsive grid rearrangements, hover state transitions, and interactive terminal responses.

## 4. External APIs & Integrations
- Currently, this repository functions primarily as a static frontend client or interactive terminal interface. 
- Future or secondary integrations (such as backend telemetry, webhooks, or API proxies) must be explicitly mapped here with designated endpoints, expected payload structures, and required authentication headers (e.g., Bearer tokens or API keys injected strictly via secure runtime environment variables).

## 5. Agent Overview & Operating Guidelines
- **Available UI/Component Agents & Modules**:
  - `CommandModule.tsx`: Handles specialized terminal interactions or command inputs.
  - `ProjectsSection.tsx` & `ProjectCard.tsx`: Renders project portfolios with technical metadata.
  - `Stack.tsx` & `TechnologyCard.tsx`: Displays technology stacks and architectural competencies.
  - `Contacts.tsx`: Manages communication conduits and links.
  - `AnimatedBackground.tsx`: Controls ambient visual telemetry without violating minimalist brutality.
- **Rules of Engagement**:
  - **Branching Policy**: All modifications, features, and fixes must be implemented on dedicated development branches. Direct commits to production/main branches are strictly prohibited.
  - **Commit Message Format**: Follow conventional commit specifications (e.g., `feat(components): add terminal command parser`, `fix(styles): enforce 0px border-radius standard`).
  - **File-Writing Protocols**: Adhere strictly to the established design token system. Do not introduce curved borders, soft drop shadows, or unapproved gradients. Maintain strict adherence to TypeScript typings and ESLint rules (`eslint.config.js`).

## 6. Security & Guardrails
- **Command Whitelisting**: Autonomous agents are restricted to running safe development scripts (e.g., `pnpm install`, `pnpm run dev`, `pnpm run build`, `pnpm run lint`).
- **Shell Execution Restrictions**: Arbitrary shell execution, modification of system-level configurations outside the repository boundaries, and execution of unverified network requests are strictly forbidden.
- **Environment Hardening**: Secrets, API keys, and credentials must never be hardcoded into source files. Any configuration adjustments must respect local `.env` boundaries.

## 7. File Map
```text
.
├── .gitignore
├── DESIGN.md
├── IMPLEMENTATION.md
├── README.md
├── design-reference/
│   ├── assets/
│   │   └── code.html
│   ├── code.html
│   └── screenshots/
│       ├── Screenshot 2026-10-07 alle 16.16.16.png
│       └── screen.png
├── eslint.config.js
├── index.html
├── package.json
├── pnpm-lock.yaml
├── public/
│   └── profile_pic.jpeg
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── components/
│   │   ├── AnimatedBackground.tsx
│   │   ├── CommandModule.tsx
│   │   ├── Contacts.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── Stack.tsx
│   │   └── TechnologyCard.tsx
│   ├── index.css
│   ├── main.tsx
│   └── styles/
│       └── AnimatedBackground.css
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```