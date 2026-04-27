# TrustLists Data

The largest open directory of company trust centers, security pages, and compliance documentation.

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
[![Trust Centers](https://img.shields.io/badge/trust%20centers-1400%2B-green.svg)](https://trustlists.org)

## Quick Start

```bash
# Fetch all trust centers
curl -s https://trustlists.org/api/trust-centers.json | jq '.data[:3]'

# Or clone this repo
git clone https://github.com/trustlists/trustlists-data.git
```

## Data Format

Each entry in `data/trust-centers.json` contains:

```json
{
  "name": "Stripe",
  "website": "https://stripe.com/",
  "trustCenter": "https://stripe.com/docs/security",
  "platform": "Self-hosted",
  "iconUrl": "https://...",
  "certifications": ["SOC 2 Type II", "ISO 27001", "PCI DSS Level 1"],
  "lastUpdated": "2026-04-27"
}
```

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Company name |
| `website` | string | Company website URL |
| `trustCenter` | string | Trust center or security page URL |
| `platform` | string | Trust center platform (Vanta, SafeBase, Drata, etc.) |
| `iconUrl` | string | Company logo/favicon URL |
| `certifications` | string[] | Security certifications (optional) |
| `lastUpdated` | string | Last verification date YYYY-MM-DD (optional) |
| `csaStar` | object | CSA STAR Registry data (optional) |

## API Endpoints

| Endpoint | Description |
|----------|-------------|
| [`/api/trust-centers.json`](https://trustlists.org/api/trust-centers.json) | Full directory of trust centers |
| [`/api/stats.json`](https://trustlists.org/api/stats.json) | Directory statistics by platform |

No API key required. No rate limits.

## Attribution Required

TrustLists is free to use under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). **In return, we require a visible dofollow link** on every page or application that uses this data.

### Add this to your footer

```html
<a href="https://trustlists.org">Data by TrustLists</a>
```

### Requirements

- ✅ Standard `<a>` hyperlink — visible to users, not hidden via CSS
- ✅ Dofollow link — no `rel="nofollow"`, `rel="sponsored"`, or `rel="ugc"`
- ✅ Placed in a visible area: footer, sidebar, or about/credits page
- ✅ Readable anchor text such as "Data by TrustLists" or "Powered by TrustLists"

⚠️ Non-compliant domains may be blocked without notice.

See the full [API documentation](https://trustlists.org/developers) for code examples and technical details.

## Contributing

We welcome contributions! You can:

1. **Submit a trust center** via [trustlists.org/submit](https://trustlists.org/submit)
2. **Report issues** via [GitHub Issues](https://github.com/trustlists/trustlists-data/issues)
3. **Contribute code** to the [main repository](https://github.com/trustlists/TrustLists)

## Data Updates

This repository is automatically synced from the main TrustLists directory. Data is updated:

- **Continuously** as new trust centers are discovered and submitted
- **Bi-weekly** for certification data refresh via automated scripts

## License

This data is licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).

---

**[trustlists.org](https://trustlists.org)** — The open directory for trust centers
