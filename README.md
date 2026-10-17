# Fardosa Portfolio Frontend

A modern personal portfolio website built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion. It showcases a developer profile with a hero section, about content, skills, featured projects, and achievements.

## Overview

This project is designed as a responsive single-page portfolio for presenting:

- personal branding and introduction
- skills and technologies
- project highlights
- achievements and milestones
- navigation between sections

The app uses a component-driven structure and keeps portfolio content organized in local data files under `src/data`.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- ESLint
- Vitest

## Features

- Responsive layout for desktop and mobile screens
- Smooth section transitions and animation effects
- Clean portfolio sections: Hero, About, Skills, Projects, Achievements
- Reusable UI components and structured page layout
- Local portfolio data management for easy customization

## Prerequisites

Make sure you have the following installed:

- Node.js 18 or later
- npm 9 or later

## Getting Started

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   cd fardosa-portfolio-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local preview URL shown in the terminal, usually:

   ```bash
   http://localhost:5173
   ```

## Available Scripts

```bash
npm run dev
```
Starts the Vite development server with hot module reloading.

```bash
npm run build
```
Runs TypeScript checks and creates a production build in the `dist` folder.

```bash
npm run preview
```
Serves the production build locally for preview.

```bash
npm run lint
```
Runs ESLint to check code quality.

```bash
npm test
```
Runs the test suite with Vitest.

## Project Structure

```text
.
├── public/                 # Static assets and images
├── src/
│   ├── assets/            # Images and shared static assets
│   ├── components/        # Reusable UI components
│   ├── data/              # Portfolio content data
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions and theme config
│   ├── pages/             # Page-level components
│   ├── routes/            # App routing setup
│   ├── sections/          # Portfolio sections
│   ├── types/             # TypeScript types
│   ├── utils/             # Helper utilities
│   ├── App.tsx            # App root with router
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles and Tailwind setup
├── index.html             # HTML entry
├── package.json           # Scripts and dependencies
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
├── eslint.config.js       # ESLint configuration
├── README.md              # Project documentation
└── .gitignore             # Git ignore rules
```

## Customization

To personalize the portfolio:

- update profile details and content in `src/data/`
- edit layout and styling in `src/components/`, `src/sections/`, and `src/index.css`
- add or replace images in `public/images/`
- modify navigation items in `src/data/navigation.ts`

## Production Build

To generate the production build locally:

```bash
npm run build
```

Then preview it:

```bash
npm run preview
```

## Notes

- This is a frontend-only portfolio project.
- Portfolio content is static and stored locally in the app.
- The project is optimized for easy maintenance and content updates.

## License

This project is currently unlicensed unless you add a license file. If you plan to publish or share it publicly, consider adding a `LICENSE` file.

## Contributing

Contributions are welcome. If you want to improve the project:

1. create a feature branch
2. make your changes
3. run linting and tests
4. open a pull request with a clear summary

---


