# Module Federation for a monorepo built with Vite, React, and React Router

This repository demonstrates how to wire up Module Federation inside a Vite-based monorepo that uses React and React Router. It relies on the [official Module Federation Vite plugin](https://module-federation.io/guide/build-plugins/plugins-vite.html) alongside the [Module Federation React bridge plugin](https://module-federation.io/practice/bridge/react-bridge/getting-started.html) to keep routing and shared modules synchronized. The workspace is split into a `host` application and a `remote` application that share routing context at runtime. The remote bundle can be consumed by the host over HTTP or launched on its own for isolated development.

## What this repository shows

- Configuring Vite with `@module-federation/vite` to expose React routes from a remote build.
- Loading federated modules at runtime with the bridge router so shared navigation works between host and remote.
- Running both apps side by side through npm workspaces for a smooth local developer experience.

## Test the demo with `npm run dev`

From the repository root:

```bash
npm install
npm run dev
```

The command starts both applications in parallel:

- Host UI: `http://localhost:2000/` renders the shell and lazy-loads the remote routes.
- Remote UI: `http://localhost:2001/remote` loads the standalone remote application. (The root path `http://localhost:2001/` is not used.)

With both servers running you can validate host-driven navigation as well as the remote in isolation.

## Other commands

- `npm run build` – build host and remote production bundles.
- `npm run preview` – build then launch both preview servers.
- `npm run host:dev` / `npm run remote:dev` – start just one app in dev mode.
- `npm run host:build` / `npm run remote:build` – build either app individually.
- `npm run host:preview` / `npm run remote:preview` – preview either app on its own.
