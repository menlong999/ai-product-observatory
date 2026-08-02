const trends=[
{name:'Coding Agent 基础设施进入 Control Plane',text:'从凭据、持续运行和远程监督，推进到 Skill 版本、线上评测、决策门禁、成本归因和数据授权。'},
{name:'Context Lifecycle 判断得到验证',text:'MemoryCustodian、Greplica 等继续强调 Repo-owned、选择性加载、来源和审查，而不是单纯存储更多内容。'},
{name:'Agent Evaluation 首次形成产品组',text:'Prefactor、Cekura、TraceLLM 覆盖 Trace、评分、根因定位、修正和回归验证。'},
{name:'Skill 供应链与 MCP 运营层出现',text:'Skill 开始需要分发、版本和权限；MCP 开始需要身份、限流和计费。'},
{name:'Agent 监督转向可见工作区',text:'MarbleOS 把任务、文件、工具和输出放进同一工作台，监督方式从通知走向状态可见。'},
{name:'Agent Commerce 与 AI 视频降温',text:'本周缺少售后、订单身份和真实可编辑时间线的新验证，暂时退出核心趋势。'}
];
const products=[
['localskills.sh','Agent Skills / Governance','统一分发多种 Coding Agent 使用的 Skills 与 Rules。'],
['Prefactor','Agent Evaluation','对生产中的每次 Agent Run 做实时评分和回归检测。'],
['MarbleOS','Agent Workspace','用文件、任务、工具和输出构成可见工作区。'],
['Prelint','Decision Governance','依据 ADR、产品文档和历史决策审查 PR。'],
['MemoryCustodian','Repo-owned Context','把决策和约束保存为仓库内、可选择加载的 Markdown。'],
['Rivault','Agent Security','对敏感数据进行逐次授权和最小暴露。']
];
export default function Home(){return <main><section className="hero"><div className="shell"><div className="eyebrow">Weekly product observation</div><h1>AI Product Observatory</h1><p>每周对照历史记录，识别连续出现、同类爆发、首次形成、升温、降温和判断变化。</p></div></section><section className="section"><div className="shell"><div className="section-head"><h2>2026-W31</h2><div className="section-note">7 月 27 日—8 月 2 日</div></div><div className="signal-box"><strong>本周核心变化</strong><p>Coding Agent 基础设施进入 Control Plane；Agent Evaluation 首次形成产品组；Context / Memory 进一步拆成可维护的生命周期。</p><a href="/weekly/2026-W31">阅读完整周报 →</a></div></div></section><section className="section" id="trends"><div className="shell"><div className="section-head"><h2>本周趋势变化</h2></div><div className="grid">{trends.map(t=><article className="card trend" key={t.name}><h3>{t.name}</h3><p>{t.text}</p></article>)}</div></div></section><section className="section" id="products"><div className="shell"><div className="section-head"><h2>本周代表产品</h2></div><div className="grid">{products.map(p=><article className="card product" key={p[0]}><div className="meta">{p[1]}</div><h3>{p[0]}</h3><p>{p[2]}</p><a href="/weekly/2026-W31">查看周报 →</a></article>)}</div></div></section></main>}