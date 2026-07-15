import { headers } from 'next/headers';
import {
  GraduationCap, Train, Calculator, Brain, Smile,
  Gamepad2, MessageSquare, ScanFace, Sparkles, ArrowUpRight, Globe,
} from 'lucide-react';

export const runtime = 'edge';

type Service = {
  name: string;
  url: string;
  desc: string;
  Icon: React.ComponentType<{ className?: string }>;
  feature?: boolean;
};

// Visitors from Korea — local Korean services.
const KR_SERVICES: Service[] = [
  { name: '지하철 정보', url: 'https://subway.mycorepick.com', desc: '실시간 열차 위치·도착 정보를 0.5초만에', Icon: Train },
  { name: '모두의 계산기', url: 'https://calc.mycorepick.com', desc: '필요한 모든 계산, 한 곳에서 빠르고 정확하게', Icon: Calculator },
  { name: 'MBTI 테스트', url: 'https://mbti.mycorepick.com', desc: '나를 발견하는 정교한 심리 분석', Icon: Brain },
  { name: 'AI 관상가', url: 'https://photoai.mycorepick.com', desc: '인공지능이 보는 당신의 관상과 운세', Icon: ScanFace },
  { name: '이모지 모음', url: 'https://emoji.mycorepick.com', desc: '예쁜 이모지·특수문자 복사', Icon: Smile },
  { name: '코어 게임', url: 'https://game.mycorepick.com', desc: '설치 없이 즐기는 캐주얼 웹게임', Icon: Gamepad2 },
  { name: '랜덤 채팅', url: 'https://chat.mycorepick.com', desc: '새로운 사람과 바로 연결', Icon: MessageSquare },
];

// Visitors from outside Korea — Korea-related & universal services, in English.
const GLOBAL_SERVICES: Service[] = [
  { name: 'Learn Korean', url: 'https://korean.mycorepick.com', desc: 'Free, step-by-step Korean lessons & quizzes — from hangul to fluency.', Icon: GraduationCap, feature: true },
  { name: 'AI Face Reading', url: 'https://photoai.mycorepick.com', desc: 'Discover what an AI sees in your face — the Korean art of gwansang.', Icon: ScanFace, feature: true },
  { name: 'Korea Subway', url: 'https://subway.mycorepick.com', desc: 'Real-time train locations across Korea — handy for travelers.', Icon: Train },
  { name: 'Everyday Calculator', url: 'https://calc.mycorepick.com', desc: 'Every calculation you need, in one fast place.', Icon: Calculator },
  { name: 'MBTI Test', url: 'https://mbti.mycorepick.com', desc: 'A refined personality assessment.', Icon: Brain },
  { name: 'Emoji Vibe', url: 'https://emoji.mycorepick.com', desc: 'Copy cute emojis & symbols instantly.', Icon: Smile },
  { name: 'Random Chat', url: 'https://chat.mycorepick.com', desc: 'Meet someone new, instantly.', Icon: MessageSquare },
];

const COPY = {
  kr: {
    badge: '일상의 핵심을 연결하는 허브',
    title: '필요한 모든 것을,',
    accent: '코어픽 한 곳에서.',
    subtitle: '지하철, 계산기, 심리테스트, 게임까지 — 매일 쓰는 서비스를 한곳에 모았습니다.',
    section: '서비스',
    other: 'For visitors from abroad',
    otherHref: '/?region=global',
  },
  global: {
    badge: 'Your gateway to Korea & beyond',
    title: 'Everything you need,',
    accent: 'in one place.',
    subtitle: 'Learn Korean, read sharp analysis, and explore handy tools — curated by CorePick.',
    section: 'Services',
    other: '한국에서 접속하셨나요?',
    otherHref: '/?region=kr',
  },
} as const;

export default async function HomePage({ searchParams }: { searchParams: Promise<{ region?: string }> }) {
  const sp = await searchParams;
  const country = (await headers()).get('cf-ipcountry') || '';
  const isKorea = sp?.region ? sp.region === 'kr' : country === 'KR';
  const region = isKorea ? 'kr' : 'global';
  const services = isKorea ? KR_SERVICES : GLOBAL_SERVICES;
  const c = COPY[region];

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-purple-100/50 rounded-full blur-[100px]" />
      </div>

      <header className="bg-white/70 backdrop-blur-xl border-b border-slate-200/60 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-black tracking-tight">COREPICK</span>
          </a>
          <a href={c.otherHref} className="flex items-center gap-1.5 text-[12px] font-bold text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-wider">
            <Globe className="w-4 h-4" /> {c.other}
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-14 md:py-20">
        <section className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <Sparkles className="w-3 h-3" /> {c.badge}
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tight mb-6">
            {c.title}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">{c.accent}</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">{c.subtitle}</p>
        </section>

        <div className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-5">{c.section}</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <a
              key={s.url}
              href={s.url}
              className={`group relative flex flex-col rounded-2xl border border-slate-200/70 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 hover:border-blue-200 ${s.feature ? 'ring-1 ring-blue-100' : ''}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <s.Icon className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 transition-colors" />
              </div>
              <h3 className="text-lg font-extrabold mb-1.5">{s.name}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
            </a>
          ))}
        </div>

        <footer className="mt-20 pt-8 border-t border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <span className="font-black tracking-tight text-slate-600">COREPICK</span>
          <span>© 2026 CorePick. All rights reserved.</span>
        </footer>
      </main>
    </div>
  );
}
