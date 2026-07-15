---
sidebar_position: 3
title: Architecture
---

# Architecture

LumenMap is a Next.js app. The browser talks to a single activity API; the server queries Hubble on BigQuery, caches results, and builds treemap trees.

## Data flow

```text
Browser
  → GET /api/activity?period=1d|7d|30d|month
  → lib/hubble/activity.ts
      → BigQuery queries
      → in-memory cache, 15 min TTL
      → lib/entities/build-treemap.ts
  → labels from entities.json, Stellar Expert, Hubble home_domain
```

Dataset: `crypto-stellar.crypto_stellar_dbt`

## Tech stack

| Layer | Technology |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org/) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Treemap | [d3-hierarchy](https://github.com/d3/d3-hierarchy) |
| Data fetching | [TanStack Query](https://tanstack.com/query) |
| Analytics | [Hubble](https://developers.stellar.org/docs/data/analytics/hubble) / BigQuery |

## Project structure

```text
app/
  page.tsx
  api/activity/route.ts
components/dashboard/
lib/hubble/
lib/entities/
data/entities.json
website/              # this Docusaurus site
scripts/
```

## Queries today

| Query | Output |
| --- | --- |
| Operations by type | Counts per `type_string` |
| Top accounts | Most active wallets per operation type |
| Top contracts | Most invoked Soroban contracts |
| Soroban functions | Counts per function and per contract |

Queries use date filters and top-N limits to keep BigQuery cost down.

## Queries planned

| Metric | Source |
| --- | --- |
| Daily operation time series | Hubble hourly aggregates |
| Unique active wallets | `enriched_history_operations` |
| dApps by protocol | `entities.json` and contract grouping |
| Payment volume | Hubble amount fields |

## Caching

Results are held in an in-memory server cache with a default TTL of 900 seconds. A production Redis / KV cache is planned for Phase 5 — see the [roadmap](../roadmap).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Next.js development server |
| `npm run build` | Production build |
| `npm run start` | Production server |
| `npm run lint` | ESLint |
| `npm run test:hubble` | BigQuery query smoke test |
| `npm run sync:directory` | Sync labels from Stellar Expert |
| `npm run docs:dev` | Docusaurus docs (this site) |
| `npm run docs:build` | Build static docs |
