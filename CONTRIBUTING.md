# Contributing to TrustLists Data

Thanks for helping improve the TrustLists open dataset.

## Ways to contribute

- Report incorrect trust-center URLs
- Suggest missing companies
- Improve normalization consistency
- Improve schema/docs

## Data contribution guidelines

- Keep field names and casing consistent with `schema/trust-center.schema.json`.
- Use canonical HTTPS URLs when possible.
- Avoid adding tracking query params to URLs.
- Keep `platform` values human-readable (for example: `Vanta`, `SafeBase`,
  `Self-hosted`).
- Add `certifications` only when publicly visible from trusted sources.

## Pull request checklist

- [ ] Data validates against schema
- [ ] URLs are reachable and formatted correctly
- [ ] No duplicate entries for the same trust-center URL
- [ ] Changes are focused and described clearly

## Reporting an issue

Please include:

- Company name
- Current value in dataset (if present)
- Proposed update
- Source URL(s) supporting the change
