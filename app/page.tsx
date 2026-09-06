const trends=[
['Agent Learning Loop 首次成簇','Reflexio 与 Blume.codes 同周把 corrections、failures、successes 转成可测试、可逆的 behavior、rules、skills。'],
['Control Plane 下沉到执行路径','Doberman 与 Aegisora 2.0 都在 action 真正发生前执行 policy，而不是只做观测和 Dashboard。'],
['Assurance → Evidence-native Requirement','Airtop、HyperProbe、Basedash 把真实验证、生产 evidence、query receipts 直接放进主工作流。'],
['Agent-native SDLC 继续升温','GitWarren、HyperProbe、Blume 将焦点推进到 review、production debugging、session learning。'],
['MCP 产品类别降温','协议继续扩散，但支持 MCP 本身不再是差异；Monid 把价值上移到 capability routing 与 economics。'],
['FinOps / Demonstration 暂缓','FinOps 缺第二个强样本；Teach-by-demonstration 本周也没有第二个直接实现。']
];
const products=[
['Reflexio','Agent Behavioral Learning','把真实运行反馈转成可复用行为。'],
['Doberman','Runtime Authorization','在 coding agent 的 tool execution 前执行本地 policy。'],
['Agent Builder by Airtop','Self-healing Automation','自动修复后用真实 test run 验证。'],
['Monid','Agent Tool Router','一个 key 连接 1,800+ APIs，runtime discover/run/pay。'],
['HyperProbe','Production Debugging','无需 redeploy 获取运行中服务的只读 evidence。'],
['Blume.codes','Coding Agent Learning','从重复 correction 维护 rules 与 skills。']
];
export default function Home(){return <main><section className="hero"><div className="shell"><div className="eyebrow">Weekly product observation</div><h1>AI Product Observatory</h1><p>每周对照历史记录，识别连续出现、同类爆发、首次形成、升温、降温和判断变化。</p></div></section><section className="section"><div className="shell"><div className="section-head"><h2>2026-W36</h2><div className="section-note">8 月 31 日—9 月 6 日</div></div><div className="signal-box"><strong>本周核心变化</strong><p>Agent Learning Loop 首次形成产品簇；Control Plane 下沉到 execution-path enforcement；Independent Assurance 正从独立工具变成高风险 Agent 的 Evidence-native 产品要求。</p><a href="/weekly/2026-W36">阅读完整周报 →</a></div></div></section><section className="section" id="trends"><div className="shell"><div className="section-head"><h2>本周趋势变化</h2></div><div className="grid">{trends.map(t=><article className="card trend" key={t[0]}><h3>{t[0]}</h3><p>{t[1]}</p></article>)}</div></div></section><section className="section" id="products"><div className="shell"><div className="section-head"><h2>本周代表产品</h2></div><div className="grid">{products.map(p=><article className="card product" key={p[0]}><div className="meta">{p[1]}</div><h3>{p[0]}</h3><p>{p[2]}</p><a href="/weekly/2026-W36">查看周报 →</a></article>)}</div></div></section></main>}