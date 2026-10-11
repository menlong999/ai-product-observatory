import type { ReactNode } from 'react';

function inline(text: string): ReactNode[] {
  const pattern = /\*\*([^*]+)\*\*|`([^`]+)`|\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
  const nodes: ReactNode[] = [];
  let start = 0;
  for (const match of text.matchAll(pattern)) {
    if (match.index! > start) nodes.push(text.slice(start, match.index));
    const key = match.index;
    if (match[1]) nodes.push(<strong key={key}>{match[1]}</strong>);
    else if (match[2]) nodes.push(<code key={key}>{match[2]}</code>);
    else nodes.push(<a key={key} href={match[4]} target="_blank" rel="noreferrer">{match[3]}</a>);
    start = match.index! + match[0].length;
  }
  nodes.push(text.slice(start));
  return nodes;
}

export default function Report({ text }: { text: string }) {
  const lines = text.trim().split(/\r?\n/);
  const blocks: ReactNode[] = [];
  for (let i = 0; i < lines.length;) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }
    const heading = /^(#{1,3})\s+(.+)$/.exec(line);
    if (heading) {
      const content = inline(heading[2]);
      blocks.push(heading[1].length === 1 ? <h1 key={i}>{content}</h1> : heading[1].length === 2 ? <h2 key={i}>{content}</h2> : <h3 key={i}>{content}</h3>);
      i++; continue;
    }
    if (line.startsWith('|') && /^\|[\s:|-]+\|$/.test(lines[i + 1] || '')) {
      const key = i;
      const cells = (row: string) => row.split('|').slice(1, -1).map(cell => cell.trim());
      const headers = cells(line); i += 2;
      const rows: string[][] = [];
      while (i < lines.length && lines[i].startsWith('|')) rows.push(cells(lines[i++]));
      blocks.push(<div className="table-scroll" key={key}><table><thead><tr>{headers.map((cell, j) => <th key={j}>{inline(cell)}</th>)}</tr></thead><tbody>{rows.map((row, j) => <tr key={j}>{row.map((cell, k) => <td key={k}>{inline(cell)}</td>)}</tr>)}</tbody></table></div>);
      continue;
    }
    const ordered = /^\d+\.\s/.test(line);
    if (ordered || /^-\s/.test(line)) {
      const key = i;
      const items: ReactNode[] = [];
      const marker = ordered ? /^\d+\.\s/ : /^-\s/;
      while (i < lines.length && marker.test(lines[i])) items.push(<li key={i}>{inline(lines[i++].replace(marker, ''))}</li>);
      blocks.push(ordered ? <ol key={key}>{items}</ol> : <ul key={key}>{items}</ul>);
      continue;
    }
    const key = i;
    const paragraph: string[] = [];
    while (i < lines.length && lines[i].trim() && !/^(#{1,3}\s|-\s|\d+\.\s|\|)/.test(lines[i])) paragraph.push(lines[i++]);
    if (!paragraph.length) { paragraph.push(lines[i++]); }
    blocks.push(<p key={key}>{paragraph.map((part, j) => <span key={j}>{j > 0 && (paragraph[j - 1].endsWith('  ') ? <br /> : ' ')}{inline(part.trimEnd())}</span>)}</p>);
  }
  return <>{blocks}</>;
}
