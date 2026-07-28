const trends=[
{name:'Coding Agent 周边基础设施集中爆发',text:'OneCLI、Kastra、Pushary、Heard、Openbase、Capsomnia、Claude-thermos、Remux、Palmier Pro、CodeAlmanac 在一周内连续出现。'},
{name:'Enterprise Context / Memory 持续升温',text:'CodeAlmanac、Moxie Docs、Fluree AI、PromptQL、Second Brain 开始共同强调来源、权限、更新、冲突、删除和审查。'},
{name:'Agent 值守首次形成产品组',text:'Pushary、Heard、Openbase、Capsomnia 集中解决长任务和多 Agent 并行后的注意力与监督问题。'},
{name:'AI 视频开始分化',text:'单次生成继续同质化，Palmier Pro、Buzzy 代表的真实时间线与项目状态获得更强持续信号。'},
{name:'通用 Wrapper 降温',text:'数量仍多，但本周缺少新的技术或商业信号；单点网页复制工具暂时只保留在观察名单。'}
];
const products=[
['OneCLI','Agent Security','真实密钥不进入 Agent Context，在网络层临时注入。'],
['Bento','Local-first Productivity','一个 HTML 文件同时是文档、编辑器、播放器和数据载体。'],
['AI Toolbox','Indie SaaS','两人团队做到 35,000+ 活跃用户和五位数 MRR。'],
['Palmier Pro','AI Video / MCP','让人和 Coding Agent 编辑同一条真实视频时间线。'],
['CodeAlmanac','Coding Context','把 Coding Agent 对话沉淀为可审查的项目 Wiki。'],
['Migma AI','Domain DSL','模型先生成邮件 DSL，再编译为兼容 HTML。']
];
export default function Home(){return <main><section className="hero"><div className="shell"><div className="eyebrow">Weekly product observation</div><h1>AI Product Observatory</h1><p>每周对照历史记录，识别连续出现、同类爆发、首次形成、升温、降温和判断变化。</p></div></section><section className="section"><div className="shell"><div className="section-head"><h2>2026-W30</h2><div className="section-note">7 月 20—26 日</div></div><div className="signal-box"><strong>本周核心变化</strong><p>Coding Agent 周边基础设施集中爆发；Enterprise Context 持续升温；Agent 值守首次形成独立类型。</p><a href="/weekly/2026-W30">阅读完整周报 →</a></div></div></section><section className="section" id="trends"><div className="shell"><div className="section-head"><h2>本周趋势变化</h2></div><div className="grid">{trends.map(t=><article className="card trend" key={t.name}><h3>{t.name}</h3><p>{t.text}</p></article>)}</div></div></section><section className="section" id="products"><div className="shell"><div className="section-head"><h2>本周代表产品</h2></div><div className="grid">{products.map(p=><article className="card product" key={p[0]}><div className="meta">{p[1]}</div><h3>{p[0]}</h3><p>{p[2]}</p><a href="/weekly/2026-W30">查看周报 →</a></article>)}</div></div></section></main>}