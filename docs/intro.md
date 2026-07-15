---
sidebar_position: 1
title: Overview
---

# LumenMap

**Stellar network activity dashboard.** Block explorers list transactions one by one. LumenMap shows what the network is doing as a whole — daily volume, active wallets, top dApps, and how activity splits across payments, DEX, Soroban, and more.

## What you see

| Question | Answer in LumenMap |
| --- | --- |
| How busy is the network? | Total operations for the day, week, or month |
| What is happening on chain? | Share of payments, DEX, Soroban, trustlines, and account ops |
| Which wallets are active? | Top accounts by volume, with known names where available |
| Which dApps are used most? | Top Soroban contracts and protocols, ranked and drillable |
| What does this address mean? | Labels from the entity registry, Stellar Expert, and Hubble metadata |

The treemap is the center of the product. Tile size is share of activity. Color is category. Click to go from broad categories down to specific wallets and contracts.

## Why not just use an explorer?

Explorers are built to look up a single address or transaction. LumenMap is built to read the network at a glance and then zoom in. It groups raw operations into categories, ranks the actors behind them, and surfaces the few numbers that matter before you ever open a block detail page.

## Current version

**v0.1** — single-page dashboard. Available now:

- Hierarchical treemap with D3 squarified layout, drill-down, and breadcrumbs
- Two views: **Operation Types** and **Accounts & Contracts**
- Period filters: 1 day, 7 days, 30 days, calendar month
- KPI cards: total operations, Soroban share, top category, active contracts
- Entity labels and detail panel
- Responsive dark layout

Operation count is available today. Payment volume is not.

See the [roadmap](./roadmap.md) for what comes next.

## Start here

- [Getting Started](./guide/getting-started.md) — install and run locally
- [Using the Dashboard](./guide/using-the-dashboard.md) — treemap, periods, KPIs
- [API reference](./api/activity.md) — `GET /api/activity`
