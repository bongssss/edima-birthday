# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```


####################################################
Edima Birthday Website

This repository contains the source code for a birthday website built with ViteJS, TypeScript, TailwindCSS, GSAP, and Framer Motion. Below you'll find the installation instructions, setup steps, and how to get started with the project.

# Setup and Installation

## Prerequisites
Before you begin, make sure you have the following installed:

Node.js (version 16 or higher) - Download
npm (Node Package Manager) - Comes with Node.js installation
1. Clone the Repository
If you haven't already, clone the repository to your local machine:

git clone <repository-url>
cd edima-birthday
2. Install Project Dependencies
Now that you’re inside the project folder, let's install all dependencies:

Fix Permissions (macOS)

If you’re on macOS and facing permission issues during installation, reset the folder ownership first:

sudo chown -R $(whoami) edima-birthday
Install TailwindCSS, PostCSS, and Autoprefixer

Run the following command to install TailwindCSS, PostCSS, and Autoprefixer:

sudo npm install -D tailwindcss@3.4.1 postcss autoprefixer
This command will install the required CSS libraries.

3. Initialize TailwindCSS
Once the dependencies are installed, initialize TailwindCSS configuration:

npx tailwindcss init -p
This will generate the following files:

tailwind.config.js
postcss.config.js
4. Set Up TailwindCSS in the Project
Create the main.css File

In src/styles/, create a main.css file and add the following lines to set up Tailwind:

@tailwind base;
@tailwind components;
@tailwind utilities;
Import main.css in Your Entry File

In your src/main.tsx (or src/main.ts if using plain TS), import the newly created main.css file:

import './styles/main.css';
5. Run the Development Server
Now that everything is set up, you can run the development server:

npm run dev
The app should now be running at http://localhost:3000.

# Troubleshooting

Permission Issues (macOS): If you encounter any permissions errors (EACCES), make sure your project folder is owned by your user account. You can reset folder permissions with:
sudo chown -R $(whoami) <project-folder>
Missing Tailwind Binary: If npx tailwindcss init -p doesn’t work or you don't see tailwindcss in the node_modules/.bin folder, try the following:
rm -rf node_modules package-lock.json
npm cache clean --force
npm install -D tailwindcss@3.4.1 postcss autoprefixer
npx tailwindcss init -p
This should resolve the issue.
