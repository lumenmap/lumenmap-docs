---
sidebar_position: 1
title: GET /api/activity
---

# GET /api/activity

Returns KPI summaries and treemap trees for Stellar mainnet activity over a selected period.

## Request

```http
GET /api/activity?period=1d
```

### Query parameters

| Param | Values | Default |
| --- | --- | --- |
| `period` | `1d`, `7d`, `30d`, `month` | `1d` |

## Response

```json
{
  "period": "1d",
  "kpis": {
    "totalOps": 1234567,
    "sorobanShare": 0.42,
    "topCategory": "soroban",
    "activeContracts": 89
  },
  "treemaps": {
    "events": {
      "name": "Network Activity",
      "children": []
    },
    "actors": {
      "name": "Accounts & Contracts",
      "children": []
    }
  }
}
```

The response also includes `categories`, `contracts`, `accounts`, `sorobanFunctions`, and `sorobanFunctionContracts`.

| Field | Description |
| --- | --- |
| `period` | Echo of the requested period |
| `kpis` | Dashboard KPI card values |
| `treemaps.events` | Operation Types tree (category → type/function → actor) |
| `treemaps.actors` | Accounts & Contracts tree |
| `categories` | Per-category aggregates |
| `contracts` / `accounts` | Ranked lists used for labeling and drill-down |
| `sorobanFunctions` / `sorobanFunctionContracts` | Function-level Soroban breakdowns |

## Caching

Responses are cached in memory for **15 minutes** by default. Override with `CACHE_TTL_SECONDS`.

## Errors

If BigQuery credentials are missing or queries fail, the route returns an HTTP error. Locally, confirm `.env.local` and run `npm run test:hubble`.

## Planned endpoints

Versioned public API surface planned for later phases:

| Endpoint | Description |
| --- | --- |
| `GET /api/v1/activity` | Versioned activity and treemap data |
| `GET /api/v1/timeseries` | Operations and active wallets over time |
| `GET /api/v1/dapps` | Top contracts by protocol |

See the [roadmap](../roadmap) for timing.
