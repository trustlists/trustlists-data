import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const TRUST_CENTERS_URL = 'https://trustlists.org/api/trust-centers.json';
const STATS_URL = 'https://trustlists.org/api/stats.json';

async function fetchJson(url) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'trustlists-data-sync',
      Accept: 'application/json',
    },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status}`);
  }
  return res.json();
}

async function main() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const root = path.resolve(__dirname, '..');
  const dataDir = path.join(root, 'data');

  await mkdir(dataDir, { recursive: true });

  const [trustCenters, stats] = await Promise.all([
    fetchJson(TRUST_CENTERS_URL),
    fetchJson(STATS_URL),
  ]);

  const now = new Date().toISOString();
  const trustCentersOut = {
    ...trustCenters,
    syncedAt: now,
    source: TRUST_CENTERS_URL,
  };
  const statsOut = {
    ...stats,
    syncedAt: now,
    source: STATS_URL,
  };

  await writeFile(
    path.join(dataDir, 'trust-centers.json'),
    `${JSON.stringify(trustCentersOut, null, 2)}\n`,
    'utf8',
  );
  await writeFile(
    path.join(dataDir, 'stats.json'),
    `${JSON.stringify(statsOut, null, 2)}\n`,
    'utf8',
  );

  const total = Array.isArray(trustCenters?.data) ? trustCenters.data.length : 0;
  console.log(`Synced ${total} trust centers.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
