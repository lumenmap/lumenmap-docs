---
sidebar_position: 4
title: Entity Registry
---

# Entity Registry

Known wallets and contracts are labeled so the treemap shows human-readable names instead of raw addresses.

## Sources

Labels are resolved from three sources (in combination):

1. Local registry: [`data/entities.json`](https://github.com/lumenmap/lumenmap/blob/main/data/entities.json)
2. Stellar Expert directory (via `npm run sync:directory`)
3. Hubble account metadata (`home_domain`)

## `entities.json` format

```json
{
  "CA4HEQTL2WPEUYKYKCDOHCDNIV4QHNJ7EL4J4NQ6VADP7SYHVRYZ7AW2": {
    "name": "Soroswap",
    "category": "defi",
    "protocol": "Soroswap"
  }
}
```

| Field | Description |
| --- | --- |
| Key | Stellar account or contract address (G… or C…) |
| `name` | Display label on the treemap and detail panel |
| `category` | High-level category (e.g. `defi`, `anchor`) |
| `protocol` | Protocol or product name for grouping |

Add rows to label more actors in the treemap. Entity label PRs should include a verifiable on-chain address tied to a real protocol or wallet.

## Sync from Stellar Expert

```bash
npm run sync:directory
```

This script pulls directory entries and updates local labels. Review the diff before committing.

## Why it matters

Without labels, top tiles show opaque addresses. With a growing registry, Accounts & Contracts becomes a readable dApp and wallet leaderboard — a foundation for the protocol-grouped rankings on the [roadmap](../roadmap).
