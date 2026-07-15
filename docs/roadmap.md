---
sidebar_position: 99
title: Roadmap
---

# Roadmap

Current version is **0.1**: a single-page dashboard with treemap, KPIs, period filters, and entity labels. Operation count is available today. Payment volume is not.

## Coming next

- Daily and hourly operation trend charts
- Unique active wallet counts
- dApp leaderboard grouped by protocol
- Search by address, contract, or protocol
- Payment volume in XLM and USDC
- Public API

## Phase 1: Activity charts

- Operation and transaction counts over time
- Soroban vs classic share trends
- Sparklines on KPI cards
- `GET /api/v1/timeseries`

## Phase 2: Wallets and dApps

- Unique active accounts per period
- Top senders and receivers
- Soroban contracts grouped and labeled by protocol
- Search and filter
- Links out to Stellar Expert and Stellarscan

## Phase 3: Treemap depth

- Larger entity registry via `sync:directory` and manual entries
- Payment volume next to operation counts
- Soroban function breakdown per contract
- Testnet support

## Phase 4: Product polish

- Pages: Overview, Activity, Charts
- Headline summary: today's tx count, active wallets, top dApp
- Public `/api/v1/activity` and `/api/v1/timeseries` with documentation

## Phase 5: Production

- Redis or KV cache instead of in-memory server cache
- BigQuery cost tuning
- Broader protocol coverage for anchors, DeFi, and issuers

## Feedback

Open an issue or PR on [github.com/lumenmap/lumenmap](https://github.com/lumenmap/lumenmap). See [Contributing](./guide/contributing).
