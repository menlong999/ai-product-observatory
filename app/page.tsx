const trends=[
{name:'Agent-native SDLC 首次形成',text:'Origin、Proliferate、Clears、Epho、Checksum 开始一起重做 Git forge、worktree、runtime、delivery 与 verification。'},
{name:'Executable Verification 集中爆发',text:'Checksum、Replay QA、Superflow AI 连续出现，验证从 Eval 高级功能变成 Agent-native delivery 的固定阶段。'},
{name:'Control Plane 连续第五周升温',text:'OneCLI 从 W30 再次出现，Plow Latch 把 scoped access 下沉到 Mac endpoint。'},
{name:'Context → Shared Agent Data Plane',text:'OzBrain 与 Supernova 把共享知识和 live business data 同时带入多个 Agent。'},
{name:'Intent-as-Source 首次强信号',text:'Huzzah 用持久声明式 Spec 保存人的意图，但大型代码库可行性仍待验证。'},
{name:'Runtime FinOps 本周降温',text:'缺少与 W33 同级的连续产品簇，降回观察；Agent Commerce 继续退出核心趋势。'}
];
const products=[
['Origin by Cursor','Agent-native Git Forge','Git forge 开始为 coding agents 重做。'],
['Checksum AI','Continuous Verification','每个 PR 自动生成、执行并维护验证。'],
['OneCLI','Agent Control Plane','W30 → W34 再次出现，扩展到 secured sandboxed employee agent。'],
['Huzzah','Persistent Specification','把 human intent 做成持久、声明式 repo 工件。'],
['Proliferate','Open Agent Workspace','多 Agent + 独立 worktree + self-hosted control plane。'],
['OzBrain','Shared Agent Context','多个 Agent 与团队共用一套可读写知识层。']
];
export default function Home(){return <main><section className="hero"><div className="shell"><div className="eyebrow">Weekly product observation</div><h1>AI Product Observatory</h1><p>每周对照历史记录，识别连续出现、同类爆发、首次形成、升温、降温和判断变化。</p></div></section><section className="section"><div className="shell"><div className="section-head"><h2>2026-W34</h2><div className="section-note">8 月 17 日—8 月 23 日</div></div><div className="signal-box"><strong>本周核心变化</strong><p>Agent-native SDLC 首次形成；Executable Verification 从趋势变成集中产品簇；Agent Context 正继续演进成跨 Agent 的 Shared Data Plane。</p><a href="/weekly/2026-W34">阅读完整周报 →</a></div></div></section><section className="section" id="trends"><div className="shell"><div className="section-head"><h2>本周趋势变化</h2></div><div className="grid">{trends.map(t=><article className="card trend" key={t.name}><h3>{t.name}</h3><p>{t.text}</p></article>)}</div></div></section><section className="section" id="products"><div className="shell"><div className="section-head"><h2>本周代表产品</h2></div><div className="grid">{products.map(p=><article className="card product" key={p[0]}><div className="meta">{p[1]}</div><h3>{p[0]}</h3><p>{p[2]}</p><a href="/weekly/2026-W34">查看周报 →</a></article>)}</div></div></section></main>}