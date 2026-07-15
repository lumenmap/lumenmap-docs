---
sidebar_position: 1
title: Getting Started
---

# Getting Started

Run LumenMap locally against Stellar mainnet activity from [Hubble](https://developers.stellar.org/docs/data/analytics/hubble) on BigQuery.

## Prerequisites

- Node.js 20+
- A Google Cloud project with the BigQuery API enabled
- A service account with the **BigQuery User** role

## Install and run

```bash
npm install
cp .env.example .env.local
npm run dev
```

Set GCP credentials in `.env.local`, then open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Description |
| --- | --- |
| `GOOGLE_APPLICATION_CREDENTIALS` | Path to a service account JSON file |
| `GCP_SERVICE_ACCOUNT_KEY` | Base64-encoded service account JSON (for deployment) |
| `CACHE_TTL_SECONDS` | Cache TTL in seconds. Default: `900` |

Setup guide: [Hubble BigQuery connection](https://developers.stellar.org/docs/data/analytics/hubble/developer-guide/connecting-to-bigquery).

Do not commit `gcp-sa.json` or `.env.local`. Both are gitignored. Each contributor needs their own GCP credentials.

### Example `.env.local`

```bash
GOOGLE_APPLICATION_CREDENTIALS=./gcp-sa.json
# CACHE_TTL_SECONDS=900
```

## Verify Hubble access

After credentials are in place:

```bash
npm run test:hubble
```

This runs a smoke test against the BigQuery queries used by the dashboard.

## Documentation site

This docs site is separate from the Next.js dashboard:

```bash
npm run docs:dev
npm run docs:build
npm run docs:preview
```

## Next steps

- [Using the Dashboard](./using-the-dashboard) — treemap, periods, KPIs
- [Architecture](./architecture) — data flow and queries
- [API reference](../api/activity) — `GET /api/activity`
