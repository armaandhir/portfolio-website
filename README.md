# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## Project Setup

This project was set up with the following technologies and configurations:

```bash
# 1. Initialize a Vite + React + TypeScript project using Yarn.
yarn create vite . --template react-ts

# 3. Install React 19.
yarn add react@latest react-dom@latest

# 4. Install and set up Tailwind CSS.
yarn add -D tailwindcss postcss autoprefixer @tailwindcss/postcss
# Create tailwind.config.js and postcss.config.js
# Add Tailwind directives to src/index.css

# 5. Install React Router for routing.
yarn add react-router-dom

# 6. Install Zod for schema validation.
yarn add zod

100| # 7. Install and configure Prettier for code formatting.
101| yarn add -D prettier
102| # Create .prettierrc
103|
104| # 8. Install and configure ESLint for code linting.
105| yarn add -D eslint eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier
106| # Create .eslintrc.cjs
107|
108| # 9. Start the development server to verify the setup.
109| yarn dev
110| ```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

```bash
# 1. Used this as steps to Roo code to setup the project
Initialize a Vite + React + TypeScript project using Yarn.
Install React 19.
Install and set up Tailwind CSS.
Install React Router for routing.
Install Zod for schema validation.
Install and configure Prettier for code formatting.
Install and configure ESLint for code linting.
Start the development server to verify the setup.
```
