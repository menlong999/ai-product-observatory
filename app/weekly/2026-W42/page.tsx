import fs from 'node:fs';
import path from 'node:path';
import Report from '../../../components/Report';
export default function Weekly() {
  const text = fs.readFileSync(path.join(process.cwd(), 'content/weekly/2026-W42.md'), 'utf8');
  return <main className="report shell"><Report text={text} /></main>;
}
