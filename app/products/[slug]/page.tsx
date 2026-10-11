import { notFound } from 'next/navigation';
import { getProducts } from '../../../lib/archive';

export function generateStaticParams() { return getProducts().map(p => ({ slug: p.id })); }
export const dynamicParams = false;
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProducts().find(product => product.id === slug);
  if (!p) notFound();
  const fields = [['产品与新增', p.description + ' ' + p.facts], ['Launch / Discussion Signals', p.signals], ['为什么重要（研究判断）', p.why], ['Creator Story', p.creator], ['可学习之处（研究判断）', p.learn], ['限制', p.limits]];
  return <main className="report shell"><div className="eyebrow">产品档案 · {p.first_seen} — {p.last_seen}</div><h1>{p.name}</h1><p>{p.category} · {p.date}</p><p>观察快照：{p.observed_at}。首次指本观察首次收录。</p>{fields.map(([title, value]) => <section key={title}><h2>{title}</h2><p>{value}</p></section>)}<h2>时间线</h2>{p.timeline.map((t, i) => <section key={i}><h3><a href={'/weekly/' + t.week}>{t.week}</a> · {t.event}</h3><p>{t.signal}</p></section>)}<h2>来源</h2><ul>{p.sources.map(s => <li key={s.url}><a href={s.url} target="_blank" rel="noreferrer">{s.platform}</a></li>)}</ul><p>Worth Writing About：{p.worth}。这是选题判断，不是投资或购买建议。</p><p><a href="/products">返回产品档案</a></p></main>;
}
