const trends=[
{name:'Agent Control Plane → Least-privilege Execution',text:'Tines 3B、Cynative 把控制面推进到 sandbox、secret proxy、action gate、fail-closed policy 与 audit evidence。'},
{name:'Executable Verification 正在升温',text:'Ito、Kane CLI、oqoqo 同周把 Eval 从 Trace/Score 推进到真实环境执行和可审查 evidence。'},
{name:'Context 进入 Runtime Economics',text:'Xirp 把组织 context、skills、sessions 合流，Paritok 又把 context 变成运行成本与 session longevity 问题。'},
{name:'Runtime FinOps 首次形成',text:'成本治理从统计花费、连接结果，继续推进到一次 Agent Run 内主动减少无效输入。'},
{name:'Open Agent Infrastructure 商品化加速',text:'Dograh 等开源产品继续压低基础 Agent stack 门槛，价值向领域语义、可靠性、治理和交付迁移。'},
{name:'Autonomous Maintenance / Commerce 降温',text:'本周缺少连续强证据，两个方向都退回长期观察。'}
];
const products=[
['Ito','Executable Code Review','实际运行 PR 影响流程，用 evidence 而不是模型判断完成审查。'],
['Tines 3B','Enterprise Agent Runtime','隔离执行、runtime secret injection、权限与审计。'],
['Xirp','Agentic Development Workspace','Spotify 的组织 context、skills、active sessions 统一工作面。'],
['Paritok','Runtime FinOps / Context','压缩 coding agent 上下文，降低运行成本并延长 session。'],
['Kane CLI','Browser Verification','自然语言测试真实 Chrome，返回 pass/fail、视频与 trace。'],
['Cynative','Least-privilege Agent','把只读 action gate 和 fail-closed 权限边界放在模型之外。']
];
export default function Home(){return <main><section className="hero"><div className="shell"><div className="eyebrow">Weekly product observation</div><h1>AI Product Observatory</h1><p>每周对照历史记录，识别连续出现、同类爆发、首次形成、升温、降温和判断变化。</p></div></section><section className="section"><div className="shell"><div className="section-head"><h2>2026-W33</h2><div className="section-note">8 月 10 日—8 月 16 日</div></div><div className="signal-box"><strong>本周核心变化</strong><p>Agent Control Plane 进入 least-privilege execution；Generic Eval 商品化，但 Executable Verification 明显升温；Context 开始同时成为组织治理与 Runtime FinOps 问题。</p><a href="/weekly/2026-W33">阅读完整周报 →</a></div></div></section><section className="section" id="trends"><div className="shell"><div className="section-head"><h2>本周趋势变化</h2></div><div className="grid">{trends.map(t=><article className="card trend" key={t.name}><h3>{t.name}</h3><p>{t.text}</p></article>)}</div></div></section><section className="section" id="products"><div className="shell"><div className="section-head"><h2>本周代表产品</h2></div><div className="grid">{products.map(p=><article className="card product" key={p[0]}><div className="meta">{p[1]}</div><h3>{p[0]}</h3><p>{p[2]}</p><a href="/weekly/2026-W33">查看周报 →</a></article>)}</div></div></section></main>}