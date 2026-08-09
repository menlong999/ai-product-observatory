const trends=[
{name:'Agent Control Plane 从可见走向可执行',text:'Gateway、审批、运行恢复和成本结果开始成为真正的执行边界，控制面不再只是状态 Dashboard。'},
{name:'Skills 与 Context 开始合流',text:'Hexis 把 skills、tools、context 统一放入 Git-backed、可 Review、可授权的治理层。'},
{name:'AI FinOps 开始连接业务结果',text:'Rippling 把模型/员工成本与 GitHub PR、revision 等产出关联，验证成本统计必须继续向结果推进。'},
{name:'Autonomous Software Maintenance 首次成簇',text:'Coldtea.ai、Superlog Responder、Muse Code 把 Coding Agent 推向持续维护，但仍需要 Eval、审批与回滚。'},
{name:'Evals / Observability 基础设施化',text:'Progress 与 Armature 延续上周 Eval 热度，但基础 Trace/评分越来越像标配。'},
{name:'Agent Commerce rails 重新进入观察',text:'Cloudflare Wallets 与 UCP Radar 从支付与商品发现补底层协议，尚不足以判断 Commerce 已重新升温。'}
];
const products=[
['Hexis','Skills / Context Governance','Git-backed skills、tools、context 统一治理。'],
['AgentSky','Managed Agent Runtime','多 harness 长任务 Agent 的沙箱、快照、恢复和多渠道托管。'],
['AI Spend Console by Rippling','AI FinOps / Outcome','把 AI 成本与 GitHub 工程产出关联。'],
['Coldtea.ai','Autonomous Maintenance','把 Coding Agent 推向持续软件维护。'],
['ngrok AI Gateway','Private AI Gateway','统一公有与私有模型的访问控制、路由和可观测。'],
['Nightcrawler','On-device Agent','手机本地小模型完成 scope 受限的完整 Agent Loop。']
];
export default function Home(){return <main><section className="hero"><div className="shell"><div className="eyebrow">Weekly product observation</div><h1>AI Product Observatory</h1><p>每周对照历史记录，识别连续出现、同类爆发、首次形成、升温、降温和判断变化。</p></div></section><section className="section"><div className="shell"><div className="section-head"><h2>2026-W32</h2><div className="section-note">8 月 3 日—8 月 9 日</div></div><div className="signal-box"><strong>本周核心变化</strong><p>Agent Control Plane 从“可见”走向“可执行”；Skills 与 Context 开始合流；AI FinOps 开始连接工程产出。</p><a href="/weekly/2026-W32">阅读完整周报 →</a></div></div></section><section className="section" id="trends"><div className="shell"><div className="section-head"><h2>本周趋势变化</h2></div><div className="grid">{trends.map(t=><article className="card trend" key={t.name}><h3>{t.name}</h3><p>{t.text}</p></article>)}</div></div></section><section className="section" id="products"><div className="shell"><div className="section-head"><h2>本周代表产品</h2></div><div className="grid">{products.map(p=><article className="card product" key={p[0]}><div className="meta">{p[1]}</div><h3>{p[0]}</h3><p>{p[2]}</p><a href="/weekly/2026-W32">查看周报 →</a></article>)}</div></div></section></main>}