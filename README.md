# TrustLists Data

Open trust-center directory data from TrustLists.

This repository contains a public snapshot of trust-center records plus a sync
script that fetches the latest data from the TrustLists public API.

## What is in this repo

- `data/trust-centers.json` - main trust-center dataset snapshot
- `data/stats.json` - total count and platform distribution snapshot
- `schema/trust-center.schema.json` - JSON schema for entries
- `scripts/sync-data.mjs` - refresh script for dataset snapshots

## Data shape

Each trust-center entry typically includes:

- `name` (string)
- `website` (string, URL)
- `trustCenter` (string, URL)
- `platform` (string)
- `iconUrl` (string, URL)
- `certifications` (optional string array)

See `schema/trust-center.schema.json` for validation details.

## Refresh data

Prerequisite: Node.js 18+

```bash
npm run sync
```

This command fetches:

- `https://trustlists.org/api/trust-centers.json`
- `https://trustlists.org/api/stats.json`

and writes snapshots into `data/`.

## Automation flow

- `trustlists/TrustLists` mirrors generated snapshots into this repository automatically.
- Merges that come from the mirror sync include `[skip-intake]` to prevent intake loops.
- Other data updates in this repository open an intake issue in `trustlists/TrustLists`
  for maintainer review and promotion.

### Required GitHub secrets

- In `trustlists/TrustLists`: `TRUSTLISTS_DATA_PUSH_TOKEN`
- In `trustlists/trustlists-data`: `TRUSTLISTS_MAIN_REPO_TOKEN`

### Optional GitHub variables

- In `trustlists/trustlists-data`: `INTAKE_DEFAULT_ASSIGNEES`  
  Comma-separated GitHub usernames to auto-assign on intake issues
  (example: `felixmichvels` or `felixmichvels,teammate`).

## Contributing

Please open an issue first for large structural changes.

For data corrections:

1. Open an issue with supporting source links.
2. Submit a PR with updates.
3. Keep entry formatting and field names consistent with schema.

See `CONTRIBUTING.md` for full details.

## License

Apache 2.0 - see `LICENSE.md`.
