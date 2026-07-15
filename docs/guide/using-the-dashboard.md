---
sidebar_position: 2
title: Using the Dashboard
---

# Using the Dashboard

LumenMap is a single-page Stellar mainnet activity dashboard. The treemap is the main surface; KPI cards and period filters frame the view.

## Period filters

Switch between:

| Period | Meaning |
| --- | --- |
| **1d** | Last 1 day |
| **7d** | Last 7 days |
| **30d** | Last 30 days |
| **Month** | Current calendar month |

Changing the period refetches aggregated activity from the API and rebuilds both treemap trees.

## KPI cards

The home view opens with four summary metrics:

| KPI | What it shows |
| --- | --- |
| Total operations | Operation count for the selected period |
| Soroban share | Fraction of ops that are Soroban-related |
| Top category | Highest-volume category (payments, DEX, Soroban, …) |
| Active contracts | Distinct Soroban contracts seen in the period |

## Treemap views

Two views are available. Use the view selector to switch.

### Operation Types

Walks **category → operation type (or Soroban function) → actor**.

Tile size reflects that segment's share of network activity. Click a tile to drill down. Breadcrumbs show where you are and let you jump back up.

Typical path:

1. Category (e.g. Soroban, Payments)
2. Operation type or Soroban function name
3. Account or contract that drove that activity

### Accounts & Contracts

Ranks the busiest wallets and Soroban contracts on the network for the selected period. Drill into an actor to inspect how its activity breaks down.

## Category colors

Tile color maps to category:

| Category | Color | Typical operation types |
| --- | --- | --- |
| <span class="category-swatch soroban"></span> Soroban | `#7B61FF` | `invoke_host_function`, `extend_footprint_ttl`, `restore_footprint` |
| <span class="category-swatch payments"></span> Payments | `#14B8A6` | `payment`, path payments, `create_account` |
| <span class="category-swatch dex"></span> DEX | `#F59E0B` | manage offers, liquidity pool deposit/withdraw |
| <span class="category-swatch trustlines"></span> Trustlines | `#3B82F6` | `change_trust` |
| <span class="category-swatch account"></span> Account | `#EC4899` | `set_options`, `manage_data`, sponsorship ops |
| <span class="category-swatch other"></span> Other | `#6B7280` | Remaining types |

## Detail panel

Selecting a tile opens a detail panel with:

- Share of activity
- Operation count
- Protocol (when known)
- Address (wallet or contract)

Known addresses get human-readable labels from the [entity registry](./entities), Stellar Expert, and Hubble `home_domain` metadata.

## Data freshness

- Hubble refreshes in intraday batches. Numbers can lag behind live chain state.
- API responses are cached for **15 minutes** by default (`CACHE_TTL_SECONDS`).

Operation count is available today. Payment volume in XLM / USDC is on the [roadmap](../roadmap).
