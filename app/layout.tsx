import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Product Observatory',
  description: 'Long-term observation of AI products and emerging product signals.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <header className="site-header">
          <div className="shell header-inner">
            <a className="brand" href="/">AI Product Observatory</a>
            <nav><a href="/weekly/2026-W31">周报</a><a href="/#trends">趋势</a><a href="/#products">产品</a></nav>
          </div>
        </header>
        {children}
        <footer className="site-footer"><div className="shell">AI Product Observatory · 以周为单位，持续比较，而不是重复罗列。</div></footer>
      </body>
    </html>
  );
}
