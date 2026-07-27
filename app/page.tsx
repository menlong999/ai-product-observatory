const trends=[
{status:'持续升温',className:'up',name:'Coding Agent 值守层',text:'Heard、Pushary、Openbase、Remux 连续出现。瓶颈从生成能力转向注意力、审批与远程控制。'},
{status:'形成赛道',className:'up',name:'Agent Security',text:'Kastra、OneCLI 等开始把授权、凭据和审计从 Prompt 中剥离，形成独立控制层。'},
{status:'突发信号',className:'new',name:'专用中间语言',text:'Migma、Manifest、ditto.site 都在减少自由生成，用 DSL、Action Schema 和确定性编译保证稳定输出。'},
{status:'持续升温',className:'up',name:'Enterprise Context',text:'Glean、Fluree、CodeAlmanac 把企业知识从 RAG 推向来源、权限、关系与长期记忆。'},
{status:'稳定增长',className:'up',name:'Local-first',text:'Bento、Imagin RAW、FluentDB、Second Brain 强调本地数据、单文件交付和用户自有基础设施。'},
{status:'开始分化',className:'down',name:'AI Video',text:'通用视频生成趋同，真正的新意转向时间线、角色状态、镜头实体和可继续编辑的专业工作流。'}];
const products=[
['Bento','Show HN · Local-first','一个约 560KB 的 HTML 文件，装下编辑、演示、打印和实时协作。','/weekly/2026-W30#bento'],
['OneCLI','Show HN · Agent Security','让 Agent 调用服务但看不到真实密钥，凭据只在网关注入。','/weekly/2026-W30#onecli'],
['CodeAlmanac','Show HN · Coding Memory','从 Codex、Claude Code 对话中提取架构决策，沉淀为可审阅的项目 Wiki。','/weekly/2026-W30#codealmanac'],
['Migma AI','Product Hunt · Marketing SaaS','模型先生成专用邮件 DSL，再编译为跨客户端稳定 HTML。','/weekly/2026-W30#migma'],
['Palmier Pro','Show HN · AI Video','让人和 Coding Agent 编辑同一个真实视频时间线。','/weekly/2026-W30#palmier'],
['AI Toolbox','Indie Hackers · Extension','两人团队依靠平台分发和极简架构做到五位数 MRR。','/weekly/2026-W30#aitoolbox']
];
export default function Home(){return <main><section className="hero"><div className="shell"><div className="eyebrow">Weekly signal intelligence</div><h1>不是产品榜单，<br/>而是 AI 产品生态的长期观测。</h1><p>每周对照历史记录，识别连续出现、同类爆发、突然分化和判断修正。公开站展示事实与趋势，私有 Lab 保留机会与个人判断。</p></div></section><section className="section"><div className="shell grid"><div className="card metric"><strong>26</strong><span>本周观察产品</span></div><div className="card metric"><strong>10</strong><span>进入周榜</span></div><div className="card metric"><strong>6</strong><span>长期趋势变化</span></div><div className="card metric"><strong>3</strong><span>首次出现信号</span></div></div></section><section className="section" id="trends"><div className="shell"><div className="section-head"><h2>本周最大的变化</h2><div className="section-note">2026-W30 · 7月20日—7月26日</div></div><div className="grid">{trends.map(t=><article className="card trend" key={t.name}><div className={`status ${t.className}`}>{t.status}</div><h3>{t.name}</h3><p>{t.text}</p></article>)}</div></div></section><section className="section" id="products"><div className="shell"><div className="section-head"><h2>本周代表产品</h2><div className="section-note">按长期价值而非单日排名选择</div></div><div className="grid">{products.map(p=><article className="card product" key={p[0]}><div className="meta">{p[1]}</div><h3>{p[0]}</h3><p>{p[2]}</p><a href={p[3]}>查看周报中的分析 →</a></article>)}</div></div></section><section className="section"><div className="shell"><div className="cta-panel"><div><strong>2026-W30 周报已经发布</strong><p>Top 10、历史对比、连续信号、突发类型与中国机会。</p></div><a className="cta-button" href="/weekly/2026-W30">阅读完整周报</a></div></div></section></main>}
