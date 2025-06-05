# minimalist Birthday webapp using React + TypeScript + Vite



<p>This repository contains the source code for a birthday website built with ViteJS, TypeScript, TailwindCSS, GSAP, and Framer Motion. Below you'll find the installation instructions, setup steps, and how to get started with the project.</p>

# Setup and Installation

## Prerequisites
Before you begin, make sure you have the following installed:

<p>Node.js (version 16 or higher) - Download
npm (Node Package Manager) - Comes with Node.js installation</p>
- 1. Clone the Repository:
If you haven't already, clone the repository to your local machine:

git clone <repository-url>
cd edima-birthday
- 2. Install Project Dependencies
Now that you’re inside the project folder, let's install all dependencies:

<strong>Fix Permissions (macOS)</strong>

If you’re on macOS and facing permission issues during installation, reset the folder ownership first:
```bash
sudo chown -R $(whoami) edima-birthday
```
<strong>Install TailwindCSS, PostCSS, and Autoprefixer</strong>

Run the following command to install TailwindCSS, PostCSS, and Autoprefixer:
```bash
sudo npm install -D tailwindcss@3.4.1 postcss autoprefixer
This command will install the required CSS libraries.
```
- 3. Initialize TailwindCSS
Once the dependencies are installed, initialize TailwindCSS configuration:
```bash
npx tailwindcss init -p
```
This will generate the following files:
```
tailwind.config.js
postcss.config.js
```
- 4. Set Up TailwindCSS in the Project
Create the main.css File

In `src/styles/`, create a main.css file and add the following lines to set up Tailwind:
`
@tailwind base;
@tailwind components;
@tailwind utilities;
Import main.css in Your Entry File
`
In your src/main.tsx (or src/main.ts if using plain TS), import the newly created main.css file:
`
import './styles/main.css';
`
- 5. Run the Development Server:
<br>
Now that everything is set up, you can run the development server:
```bash
npm run dev
```
The app should now be running at

[localhost](http://localhost:3000).

# Troubleshooting

Permission Issues (macOS): If you encounter any permissions errors (EACCES), make sure your project folder is owned by your user account. You can reset folder permissions with:
```bash
sudo chown -R $(whoami) <project-folder>
```

Missing Tailwind Binary: If npx tailwindcss init -p doesn’t work or you don't see tailwindcss in the node_modules/.bin folder, try the following:

```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install -D tailwindcss@3.4.1 postcss autoprefixer
npx tailwindcss init -p
```
This should resolve the issue.
