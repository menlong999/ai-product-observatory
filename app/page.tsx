const trends=[
['Agentic Software Factory','Mastra Factory 把 issue、persistent agents、repo workspaces、review、release 和 production monitoring 收进同一长期工作系统。'],
['Control Plane → Per-action Authority','Harden、Relaticle、StareBrain 把授权推进到 side effect 真正发生的那一刻。'],
['Evidence Spine','EasySpecs、PR Lens、Replay、QApilot、OpenObserve 让证据贯穿 Spec、Review、Test、Security、Production。'],
['Persistent Spec 重新升温','Spec 开始同时承担 context、intent、acceptance criteria 与 regression contract。'],
['Shared Data Plane 继续扩展','Thousand 强化 ACL；Mireye 把 Agent Data Plane 首次明显延伸到 physical world。'],
['FinOps / Behavior Learning 降温','成本更可能被 Observability 吸收；Behavior Learning 本周缺第三个直接样本。']
];
const products=[
['Mastra Factory','Agentic Software Factory','从 issue 到 production 的 persistent-agent 软件交付环境。'],
['Harden','Runtime Security','tool call 执行前做本地风险判断。'],
['easyspecs.ai','Spec / Verification','把 codebase spec 与 validators、Oracles、Rubrics 绑定。'],
['PR Lens','Architecture Review','用 architecture/data-flow 图解释 codebase 与 PR 变化。'],
['OpenObserve AI Observability','Agent Observability','把 trace、cost、quality、failure 与 online eval 放在一起。'],
['Replay QA Security Scan','Executable Verification','对 AI-built app 运行真实 penetration test 并保留 evidence。']
];
export default function Home(){return <main><section className="hero"><div className="shell"><div className="eyebrow">Weekly product observation</div><h1>AI Product Observatory</h1><p>每周对照历史记录，识别连续出现、同类爆发、首次形成、升温、降温和判断变化。</p></div></section><section className="section"><div className="shell"><div className="section-head"><h2>2026-W37</h2><div className="section-note">9 月 7—13 日</div></div><div className="signal-box"><strong>本周核心变化</strong><p>Agent-native SDLC 升级成 Agentic Software Factory；Control Plane 进入 per-action authority；Evidence-native requirement 开始形成贯穿完整生命周期的 Evidence Spine。</p><a href="/weekly/2026-W37">阅读完整周报 →</a></div></div></section><section className="section" id="trends"><div className="shell"><div className="section-head"><h2>本周趋势变化</h2></div><div className="grid">{trends.map(t=><article className="card trend" key={t[0]}><h3>{t[0]}</h3><p>{t[1]}</p></article>)}</div></div></section><section className="section" id="products"><div className="shell"><div className="section-head"><h2>本周代表产品</h2></div><div className="grid">{products.map(p=><article className="card product" key={p[0]}><div className="meta">{p[1]}</div><h3>{p[0]}</h3><p>{p[2]}</p><a href="/weekly/2026-W37">查看周报 →</a></article>)}</div></div></section></main>}