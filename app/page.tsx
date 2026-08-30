const trends=[
{name:'Agent Control Plane 正式成类',text:'Decawork 与 Traccia 同周直接以集中控制、policy、runtime control、audit 定义产品，连续六周治理信号开始产品类别化。'},
{name:'Verification → Independent Assurance',text:'Agnost、Lenz、PromptBrake 把验证从执行测试扩到生产失败发现、事实复核与发布 gate。'},
{name:'Context → 专业 Data Plane',text:'GitNexus、Flare、Firecrawl Developer Index 分别补 code graph、change graph 与 external developer evidence。'},
{name:'AI FinOps 重新升温',text:'Navigara 把 AI spend 绑定 roadmap item、capacity gain 与 maintenance burn，方向重新回到 outcome attribution。'},
{name:'Teach-by-demonstration 首次信号',text:'Caddi 通过一次 screenshare 学业务流程，值得观察 Demonstration 是否成为 Skill/Spec 的新输入方式。'},
{name:'Persistent Spec 暂不升级',text:'Huzzah 之后没有第二个等价样本；Agent Commerce 仅恢复到 watchlist，Browser Execution 继续作为 adapter。'}
];
const products=[
['Decawork','Agent Control Plane','IT 统一管理 company-owned Agent 的 access、oversight 与 retirement。'],
['Agnost AI','Production Agent Assurance','从真实生产会话发现 eval 没覆盖的失败。'],
['Navigara','AI FinOps','把 AI spend 直接映射到 roadmap 与 capacity gain。'],
['Traccia','Agent Control Plane','Vendor-neutral policy/runtime control + audit。'],
['GitNexus','Code Knowledge Graph','给 coding agents 提供 deterministic code graph。'],
['Lenz','Independent Verification','独立来源 + multi-model review 的事实验证 API/MCP。']
];
export default function Home(){return <main><section className="hero"><div className="shell"><div className="eyebrow">Weekly product observation</div><h1>AI Product Observatory</h1><p>每周对照历史记录，识别连续出现、同类爆发、首次形成、升温、降温和判断变化。</p></div></section><section className="section"><div className="shell"><div className="section-head"><h2>2026-W35</h2><div className="section-note">8 月 24 日—8 月 30 日</div></div><div className="signal-box"><strong>本周核心变化</strong><p>Agent Control Plane 正式成为产品类别；Verification 从可执行测试升级到 Independent Assurance；Context 从 Memory 继续分化成 code graph、change graph 与 external evidence 等专业 Data Plane。</p><a href="/weekly/2026-W35">阅读完整周报 →</a></div></div></section><section className="section" id="trends"><div className="shell"><div className="section-head"><h2>本周趋势变化</h2></div><div className="grid">{trends.map(t=><article className="card trend" key={t.name}><h3>{t.name}</h3><p>{t.text}</p></article>)}</div></div></section><section className="section" id="products"><div className="shell"><div className="section-head"><h2>本周代表产品</h2></div><div className="grid">{products.map(p=><article className="card product" key={p[0]}><div className="meta">{p[1]}</div><h3>{p[0]}</h3><p>{p[2]}</p><a href="/weekly/2026-W35">查看周报 →</a></article>)}</div></div></section></main>