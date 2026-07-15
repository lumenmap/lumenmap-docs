---
sidebar_position: 5
title: Contributing
---

# Contributing

Contributions are welcome at [github.com/lumenmap/lumenmap](https://github.com/lumenmap/lumenmap).

## How to contribute

1. Fork the repository and create a branch.
2. Make your changes. Run `npm run lint` before opening a pull request.
3. If you change Hubble queries, run `npm run test:hubble` with valid GCP credentials.
4. Open a pull request with a short description of what changed and why.

## Good first issues

Beginner-friendly tasks are labeled `good first issue` — mostly entity labels and small UI work that does not require GCP access.

To add wallet or dApp labels, edit [`data/entities.json`](https://github.com/lumenmap/lumenmap/blob/main/data/entities.json) or run `npm run sync:directory`. See [Entity Registry](./entities).

## Contribution areas

Issues stay focused on three areas:

| Area | Examples |
| --- | --- |
| Hubble queries | New aggregates, cost tuning, smoke tests |
| Dashboard features | Charts, filters, search, layout |
| Entity labels | `entities.json` entries with verifiable addresses |

## Expectations

- Pull requests are reviewed before merge and must pass lint.
- Entity label tasks require a verifiable on-chain address tied to a real protocol or wallet.
- Scoped issues include setup steps, files to touch, and acceptance criteria.

## Local setup

See [Getting Started](./getting-started) for Node.js, GCP credentials, and `npm run dev`.

## License

LumenMap is released under the [MIT License](https://github.com/lumenmap/lumenmap/blob/main/LICENSE).
