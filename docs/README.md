# FullHeightLayer Component Library - README

This repository contains a Next.js component library featuring a full-height page layer.

## Setup

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd fullHeightLayer
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

## Folder Structure

```
fullHeightLayer/
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js App Router pages and layout
│   │   ├── PageLayout/  # Main page layout component
│   │   ├── FullHeightLayer/ # The right-side full-height layer
│   │   └── ui/          # shadcn/ui components
│   ├── lib/             # Utility functions (e.g., shadcn utils)
│   └── views/           # Example page views demonstrating components
├── docs/
│   ├── README.md        # This file
│   └── components/      # Component-specific documentation
│       ├── PageLayout.mdx
│       ├── FullHeightLayer.mdx
│       └── ExamplePage.mdx
├── .env                 # Environment variables (if any)
├── .eslintrc.json       # ESLint configuration
├── .gitignore           # Git ignore rules
├── components.json      # shadcn/ui configuration
├── next.config.mjs      # Next.js configuration
├── package.json         # Project dependencies and scripts
├── postcss.config.mjs   # PostCSS configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Available Scripts

*   `npm run dev`: Runs the app in development mode.
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
*   `npm run build`: Builds the app for production.
*   `npm run start`: Starts the production server.
*   `npm run lint`: Lints the codebase using ESLint.

## Component Documentation

Detailed documentation for each component can be found in the `docs/components/` directory:

*   [`PageLayout.mdx`](./components/PageLayout.mdx)
*   [`FullHeightLayer.mdx`](./components/FullHeightLayer.mdx)
*   [`ExamplePage.mdx`](./components/ExamplePage.mdx)

## Deployment

This project is optimized for deployment on Vercel. See `vercel.json` for configuration details. 