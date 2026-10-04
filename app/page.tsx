const trends=[
['Typed Decision Plane 强升温','Cloudflare Clef 提供 Jev 之外的独立验证，Decision Plane 已从单点产品变成 Runtime 类别。'],
['Governed Execution Surface 首次形成','VibeDefend、Monospace、Pi pod 把 Policy、Data/Action Capability、Execution Boundary 三层同时补齐。'],
['Human Operator → Attention Router','Dots、Offrun、GitBot、Polylane 都在把人工参与压缩到 approval、exception、review、failure 等关键节点。'],
['Capability Router 重新升温','Weave Router 2.0 从 W38 再次出现，HMM、任务分类、RL 与 cache cost 进入 routing。'],
['Ambient Context 集中出现','LUCI Desktop、Breadcrumb、Bracket 自动捕获屏幕、会议和工作上下文，但 recall 不能等同 authority。'],
['Independent Assurance 持续升温','iFixAi、Polylane、GitBot 把独立审计和 evidence 推进到真实 operational gate。']
];
const products=[
['Cloudflare Clef','Typed Decision Plane','独立 decision model 开始成为 Runtime System-1。'],
['Weave Router 2.0','Capability Router','跨周再次出现，Runtime Economics 进入执行路径。'],
['Monospace','Governed Data / Action','给 Agent live read-write data 加 caller/row/field 权限。'],
['Dots by OpenAI','Always-on Agent','长期 Agent 拥有独立 cloud computer/browser。'],
['iFixAi','Independent Assurance','对 AI Agent 做独立 audit 与 red teaming。'],
['Offrun','Human Operator','多 Agent workspace + needs-you + peer review。']
];
export default function Home(){return <main><section className="hero"><div className="shell"><div className="eyebrow">Weekly product observation</div><h1>AI Product Observatory</h1><p>每周对照历史记录，识别连续出现、同类爆发、首次形成、升温、降温和判断变化。</p></div></section><section className="section"><div className="shell"><div className="section-head"><h2>2026-W40</h2><div className="section-note">9 月 28 日—10 月 4 日</div></div><div className="signal-box"><strong>本周核心变化</strong><p>Typed Decision Plane 得到独立验证；执行治理扩展为 Policy + Data/Action Capability + Execution Boundary；Human Operator 从移动接管升级为 Attention Router。</p><a href="/weekly/2026-W40">阅读完整周报 →</a></div></div></section><section className="section" id="trends"><div className="shell"><div className="section-head"><h2>本周趋势变化</h2></div><div className="grid">{trends.map(t=><article className="card trend" key={t[0]}><h3>{t[0]}</h3><p>{t[1]}</p></article>)}</div></div></section><section className="section" id="products"><div className="shell"><div className="section-head"><h2>本周代表产品</h2></div><div className="grid">{products.map(p=><article className="card product" key={p[0]}><div className="meta">{p[1]}</div><h3>{p[0]}</h3><p>{p[2]}</p><a href="/weekly/2026-W40">查看周报 →</a></article>)}</div></div></section></main>}