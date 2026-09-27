const trends=[
['Typed Decision Plane 正式升级','Jev + AgentRun 让“专用小模型”升级成 Runtime Decision Plane：开放式规划与受限概率判断开始拆开。'],
['Control Plane 重新升温','Arcjet + Drop 把执行治理拆成动作前 Policy 与独立 Execution Boundary 两层。'],
['Agent-owned Compute 成形','Solid、Sai 延续 OpenComputer/Bitrise：长期 Agent 开始拥有持续机器、账号、预算与 fleet。'],
['Mobile Operator Surface 升级','Superset Mobile 独立重复 W38 Kilo 的模式，手机 review/approval/takeover 不再只是附属功能。'],
['Context 继续分层','NOAN 是 Authoritative Facts，Hemory 是 Episodic Memory；再加 Source/Provenance 与 Assembly Policy。'],
['Eval → Production Health','AgentScore 延续 OpenObserve：Eval 正并入 production health / SLO，而不是消失。']
];
const products=[
['Jev','Typed Decision Plane','结构化概率判断进入 Runtime。'],
['Arcjet','Runtime Governance','动作执行前的策略与授权。'],
['Solid','Agent-owned Compute','Agent 拥有机器、账号与预算。'],
['Superset Mobile','Agent Operator','手机管理 coding agents 与 workspace。'],
['NOAN','Fact Layer','verified/versioned company facts。'],
['AgentScore','Production Health','持续观察生产 Agent 的多维质量。']
];
export default function Home(){return <main><section className="hero"><div className="shell"><div className="eyebrow">Weekly product observation</div><h1>AI Product Observatory</h1><p>每周对照历史记录，识别连续出现、同类爆发、首次形成、升温、降温和判断变化。</p></div></section><section className="section"><div className="shell"><div className="section-head"><h2>2026-W39</h2><div className="section-note">9 月 21—27 日</div></div><div className="signal-box"><strong>本周核心变化</strong><p>Typed Decision Plane 正式升级；Control Plane 拆成 Policy + Execution Boundary 并重新升温；Agent-owned Compute 与 Mobile Operator Surface 连续形成。</p><a href="/weekly/2026-W39">阅读完整周报 →</a></div></div></section><section className="section" id="trends"><div className="shell"><div className="section-head"><h2>本周趋势变化</h2></div><div className="grid">{trends.map(t=><article className="card trend" key={t[0]}><h3>{t[0]}</h3><p>{t[1]}</p></article>)}</div></div></section><section className="section" id="products"><div className="shell"><div className="section-head"><h2>本周代表产品</h2></div><div className="grid">{products.map(p=><article className="card product" key={p[0]}><div className="meta">{p[1]}</div><h3>{p[0]}</h3><p>{p[2]}</p><a href="/weekly/2026-W39">查看周报 →</a></article>)}</div></div></section></main>}