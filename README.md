<h1 align="center">React Starter</h1>

<p align="center">
React + Vite starter, powered by <a href="https://oxc.rs">Oxc</a>
</p>

<br>

> This is my personal template. Opinionated, minimal, and tuned to how I like to start projects — feel free to fork it and make it yours.

## Features

- ⚡️ [Vite 8](https://vitejs.dev/) - instant dev server, native `@/*` alias resolution, no config needed
- ⚛️ [React 19](https://react.dev/) - just React, nothing bolted on top
- 🦀 [Oxlint](https://oxc.rs) + [Oxfmt](https://oxc.rs) - lint & format in Rust, ESLint and Prettier are not invited
- 📘 [TypeScript 7](https://www.typescriptlang.org/) - strict, split into app/node configs so each sees only what it needs
- 🍞 [Bun](https://bun.sh) - fast installs, `bun.lock` committed

## Try it now!

```bash
npx degit FantomStudy/react-starter my-app
cd my-app
bun i
```

## Usage

### Development

Just run and visit http://localhost:5173

```bash
bun dev
```

### Build

To build the app, run

```bash
bun build
```

This type-checks the project (`tsc -b`) and outputs the production build to `dist`, ready to be served.

### Preview

Preview the production build locally

```bash
bun preview
```

### Lint & Format

```bash
bun lint # oxlint --fix
bun fmt  # oxfmt
```

## Why Oxc instead of ESLint/Prettier?

Because a Rust toolchain lints and formats in a fraction of the time, and `oxlint-tsgolint` gives type-aware rules without a separate `tsc` pass slowing everything down. Less waiting, same guarantees. See [oxc.rs](https://oxc.rs) if you're curious.

## License

[MIT](./LICENSE) © [FantomStudy](https://github.com/FantomStudy)
