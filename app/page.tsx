const trends=[
['Capability Router 正式升级','Weave Router 2.0 补出第二个强样本；成本、quota、cache 与 confidence 开始成为 Runtime routing policy。'],
['Specialist Decision Model 首次出现','CUA-S1 与 Cactus Needle 3 同周把小模型放进狭窄动作决策层，但真实可靠性仍需验证。'],
['Evidence → Agent Interface Assurance','TryCase、NovaSynth、MCPJam、Ax-check 把验证对象扩到 change、agent behavior、tool interface 与 product onboarding。'],
['Software Factory → Stateful Workspace','Bitrise RDE 与 Kilo mobile 补齐独立 workspace、resume 和异步 human supervision / takeover。'],
['Context 拆成 Assembly + Source/Data','Twigg 管 raw history 的动态组装；Nimble 管外部来源、检索 procedure 与 source trust。'],
['Control Plane 进入 consolidation','PassControl 延续 identity/scope/budget/kill switch，但本周没有超过 per-action authority 的新强信号。']
];
const products=[
['Weave Router 2.0','Capability Router','按复杂度、quota 和 cache 成本路由 coding-agent 模型。'],
['CUA-S1','Specialist Decision Model','2.8MB 的 computer-use 专用动作决策模型。'],
['Bitrise RDE','Agent Workspace','给 Agent 独立、可恢复的云端 Mac/Linux workspace。'],
['TryCase','Executable Verification','PR 真实运行测试 + 视频/verdict evidence。'],
['NovaSynth','Voice Assurance','用真实 caller 条件批量压测 voice agent。'],
['Ax-check','Agent Experience','直接测试 Agent 能不能理解并自主接入一个产品。']
];
export default function Home(){return <main><section className="hero"><div className="shell"><div className="eyebrow">Weekly product observation</div><h1>AI Product Observatory</h1><p>每周对照历史记录，识别连续出现、同类爆发、首次形成、升温、降温和判断变化。</p></div></section><section className="section"><div className="shell"><div className="section-head"><h2>2026-W38</h2><div className="section-note">9 月 14—20 日</div></div><div className="signal-box"><strong>本周核心变化</strong><p>Capability Router 从 watchlist 正式升级；Evidence Spine 扩展成 Agent Interface Assurance；Agentic Software Factory 开始补齐 stateful workspace 与异步 human takeover。</p><a href="/weekly/2026-W38">阅读完整周报 →</a></div></div></section><section className="section" id="trends"><div className="shell"><div className="section-head"><h2>本周趋势变化</h2></div><div className="grid">{trends.map(t=><article className="card trend" key={t[0]}><h3>{t[0]}</h3><p>{t[1]}</p></article>)}</div></div></section><section className="section" id="products"><div className="shell"><div className="section-head"><h2>本周代表产品</h2></div><div className="grid">{products.map(p=><article className="card product" key={p[0]}><div className="meta">{p[1]}</div><h3>{p[0]}</h3><p>{p[2]}</p><a href="/weekly/2026-W38">查看周报 →</a></article>)}</div></div></section></main>}