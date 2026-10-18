import fs from 'node:fs';
import path from 'node:path';

export type Product = {
  id: string; name: string; category: string; date: string; description: string;
  facts: string; signals: string; why: string; creator: string; learn: string;
  limits: string; worth: string; observed_at: string; first_seen: string; last_seen: string;
  weeks: string[]; sources: { platform: string; url: string }[];
  source_details?: { label: string; url: string; source_date: string | null; kind: string; observed_on: string }[];
  timeline: { week: string; event: string; signal: string }[];
};
export function getProducts(): Product[] {
  return fs.readdirSync(path.join(process.cwd(), 'products')).filter(name => name.endsWith('.json')).map(name => JSON.parse(fs.readFileSync(path.join(process.cwd(), 'products', name), 'utf8')) as Product);
}
