# Fardosa — Frontend Portfolio

A personal portfolio frontend built with Vite, React, and TypeScript. It showcases projects, skills, and contact information with responsive layouts, Tailwind CSS styling, and subtle Framer Motion animations.

## Tech stack

- Vite
- React 19 + TypeScript
- Tailwind CSS
- Framer Motion
- React Router

## Quick start

Prerequisites: Node.js (LTS) and npm.

Install dependencies:

```bash
npm install
```

Start dev server with HMR:

```bash
npm run dev
```

Build for production (note: `tsc -b` runs as part of the build):

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Other useful scripts:

- `npm run lint` — run ESLint
- `npm run test` — run unit tests (Vitest)

## Project structure

- `src/` — application source
  - `components/`, `layout/`, `sections/`, `ui/`, `data/`, `pages/`
- `public/` — static assets
- `index.html`, `vite.config.ts`, `tsconfig.*.json`

See the source in `src/` for components like `Navbar`, `Footer`, `ProjectCard`, and `SkillCard`.

## Contributing

Feel free to open issues or submit PRs. For local changes, run the dev server and ensure linting and tests pass before submitting.

## Notes

- The build script runs `tsc -b` followed by `vite build` (see `package.json`).
- The project is configured with Tailwind CSS and includes Framer Motion for UI transitions.

---

If you want, I can also:

- Add a short development checklist (pre-commit hooks, formatters)
- Create a `LICENSE` file
- Add deploy instructions (Netlify / Vercel / GitHub Pages)

Updated README for this workspace.
```
