# React + TypeScript Starter

Modern and lightweight starter template for building React applications with Vite and TypeScript.

## 🚀 Features

- ⚡️ **Vite** - Lightning-fast build tool with Hot Module Replacement (HMR)
- ⚛️ **React 19** - Latest version of React with new features
- 🔷 **TypeScript** - Type-safe development experience
- 📏 **ESLint** - Code linting with [@antfu/eslint-config](https://github.com/antfu/eslint-config)
- 🏗️ **Rolldown** - Next-generation bundler for faster builds

## 📁 Project Structure

```
react-starter/
├── public/           # Static assets
├── src/
│   ├── App.tsx      # Main application component
│   ├── main.tsx     # Application entry point
│   └── index.css    # Global styles
├── index.html       # HTML template
├── vite.config.ts   # Vite configuration
├── tsconfig.json    # TypeScript configuration
└── eslint.config.js # ESLint configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 24+
- npm, yarn, pnpm or bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd react-starter
```

2. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Lint

Run ESLint to check and fix code:

```bash
npm run lint
```

## 🔧 Configuration

### TypeScript

The project uses three TypeScript configuration files:

- `tsconfig.json` - Base configuration
- `tsconfig.app.json` - Application code configuration
- `tsconfig.node.json` - Node.js code configuration (Vite config, etc.)

### ESLint

The project uses [@antfu/eslint-config](https://github.com/antfu/eslint-config) for a modern, opinionated ESLint setup with support for:

- TypeScript
- React and React Hooks
- JSX accessibility (a11y)
- Auto-fixing on save

### Vite

Vite is configured with:

- React plugin for Fast Refresh
- Rolldown bundler for improved performance

## 📝 Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Lint and fix code        |

## 🌟 Customization

### Adding React Compiler

The React Compiler is not enabled by default due to its impact on dev and build performance. To add it, see the [official documentation](https://react.dev/learn/react-compiler/installation).

### Type-Aware ESLint Rules

For production applications, you can enable stricter, type-aware lint rules by updating [eslint.config.js](eslint.config.ts).

## 📦 Technologies

- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Vite](https://vite.dev/) - Build tool
- [ESLint](https://eslint.org/) - Code linting
- [Rolldown](https://rolldown.rs/) - Fast bundler

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
