# LumenMap Docs

Official documentation site for **[LumenMap](https://github.com/lumenmap/lumenmap)** — a Stellar network activity dashboard built on Hubble / BigQuery.

**Live site:** [https://lumenmap.github.io/lumenmap/](https://lumenmap.github.io/lumenmap/)

## What this covers

| Section | Contents |
| --- | --- |
| [Overview](docs/intro.md) | Product positioning and v0.1 capabilities |
| [Guide](docs/guide/getting-started.md) | Local setup, dashboard usage, architecture, entities, contributing |
| [API](docs/api/activity.md) | `GET /api/activity` reference |
| [Roadmap](docs/roadmap.md) | Planned charts, volume metrics, and public API |

## Stack

- [Docusaurus 3](https://docusaurus.io/) (classic preset)
- React 19 + TypeScript
- Deployed to GitHub Pages from the main LumenMap repo

## Local development

Requires **Node.js 20+**.

```bash
npm install
npm start
```

Open [http://localhost:3000/](http://localhost:3000/). Hot reload is enabled.

From the **parent LumenMap monorepo** you can also use:

```bash
npm run docs:dev
npm run docs:build
npm run docs:preview
```

## Scripts

| Command | Description |
| --- | --- |
| `npm start` | Dev server with live reload |
| `npm run build` | Production static build → `build/` |
| `npm run serve` | Preview the production build |
| `npm run clear` | Clear Docusaurus cache |
| `npm run typecheck` | TypeScript check |

## Project layout

```text
docs/           # Markdown / MDX documentation
src/pages/      # Landing page
src/css/        # Brand theme
static/img/     # Logo and favicon
sidebars.ts     # Sidebar navigation
docusaurus.config.ts
```

## Contributing

Docs live in this folder. Prefer short, task-oriented pages. When you change API shapes or setup steps, update the matching doc in the same PR.

See [Contributing](docs/guide/contributing.md) for dashboard and entity-label contributions.

## License

MIT — same as [LumenMap](https://github.com/lumenmap/lumenmap).
