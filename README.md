# Portfolio Website

A modern portfolio website built with React, TypeScript, and Vite.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Deploy To GitHub Pages

1. Ensure this repository is pushed to GitHub.
2. In GitHub, go to **Settings -> Pages** and set:
   - **Source**: `Deploy from a branch`
   - **Branch**: `gh-pages` and `/ (root)`
3. From your project root, run:

```bash
npm run deploy
```

Your site will publish to:
`https://<your-github-username>.github.io/Portfolio_Website/`

## Project Structure

```
src/
  ├── pages/
  │   ├── Homepage.tsx      # Main homepage component
  │   ├── Homepage.css
  │   ├── Articles.tsx      # Articles page component
  │   └── Articles.css
  ├── App.tsx               # Main app component with routing
  ├── App.css
  ├── main.tsx              # Entry point
  └── index.css             # Global styles
```

## Customization

- Edit `src/pages/Homepage.tsx` to customize the homepage content
- Edit `src/pages/Articles.tsx` to add your articles
- Modify the CSS files to change the styling
- Update the navigation in `src/App.tsx` to add more pages

## License

MIT

