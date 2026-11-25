import * as fs from 'node:fs';

const entry = 'It entered 41 contests, won nothing, and still opens every morning convinced today is the day.';

if (entry.length === 0 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`entry must be 1-200 chars, got ${entry.length}`);
}

fs.mkdirSync('/output', { recursive: true });
fs.writeFileSync('/output/entry.txt', entry, { encoding: 'utf8' });
