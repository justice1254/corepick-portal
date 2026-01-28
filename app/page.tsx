import React from 'react';
import { 
  Search, ExternalLink, TrendingUp, Grid, ShoppingBag, 
  MessageSquare, Train, Smile, Brain, Heart, Zap, 
  Award, Gamepad2, Rocket, ArrowRight, Sparkles, Monitor
} from 'lucide-react';

const services = [
  { id: 1, name: '코어 쇼핑', url: 'https://shopping.mycorepick.com', icon: ShoppingBag, desc: 'AI가 분석한 실시간 최저가 큐레이션', category: 'Smart Shopping', size: 'large', color: 'blue' },
  { id: 9, name: '플래시 게임', url: 'https://flash-erb.pages.dev', icon: Rocket, desc: '설치 없이 즐기는 추억의 명작선', category: 'Classic Games', size: 'medium', color: 'orange' },
  { id: 2, name: '코어 이슈', url: 'https://now.mycorepick.com', icon: TrendingUp, desc: '데이터로 읽는 지금 가장 뜨거운 화제', category: 'Real-time News', size: 'medium', color: 'red' },
  { id: 4, name: 'MBTI 테스트', url: 'https://mbti.mycorepick.com', icon: Brain, desc: '나를 발견하는 가장 정교한 심리 분석', category: 'Psychology', size: 'small', color: 'purple' },
  { id: 3, name: '지하철 정보', url: 'https://subway.mycorepick.com', icon: Train, desc: '오차 없는 실시간 도착 및 최적 경로', category: 'Utility', size: 'small', color: 'emerald' },
  { id: 10, name: '코어 게임', url: 'https://game.mycorepick.com', icon: Gamepad2, desc: '킬링타임용 고퀄리티 웹 게임 모음', category: 'Arcade', size: 'small', color: 'pink' },
  { id: 6, name: 'AI 엔조이', url: 'https://enjoyai.mycorepick.com', icon: Grid, desc: '일상의 혁신을 만드는 AI 도구 체험', category: 'AI Tools', size: 'small', color: 'indigo' },
  { id: 7, name: '랜덤 채팅', url: 'https://chat.mycorepick.com', icon: MessageSquare, desc: '전 세계 누구와든 소통하는 자유로운 공간', category: 'Community', size: 'small', color: 'amber' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Dynamic Background Blur Objects */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-purple-100/50 rounded-full blur-[100px]" />
      </div>

      {/* Header */}
      <header className="bg-white/70 backdrop-blur-xl border-b border-slate-200/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center shadow-xl shadow-slate-200">
              <Zap className="w-5 h-5 text-white fill-current" />
            </div>
            <span className="text-xl font-[900] tracking-tight text-slate-900">COREPICK</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-bold text-slate-500 uppercase tracking-widest">
            <a href="#" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Trends</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Community</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="text-[13px] font-bold text-slate-400 hover:text-slate-900 transition-colors">Sign In</button>
            <button className="h-10 px-5 bg-slate-900 text-white rounded-full text-xs font-black hover:bg-blue-600 transition-all shadow-lg shadow-slate-200 active:scale-95">GET STARTED</button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <Sparkles className="w-3 h-3" /> All-in-One Digital Hub
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tighter">
              선별된 정보의 가치,<br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">코어픽에서 경험하세요.</span>
            </h1>
            <div className="relative group max-w-2xl">
              <input 
                type="text" 
                placeholder="찾으시는 도구 또는 정보를 입력하세요..." 
                className="w-full bg-white border border-slate-200 rounded-2xl py-5 px-14 text-lg focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all outline-none shadow-sm group-hover:shadow-xl"
              />
              <Search className="absolute left-5 top-5.5 text-slate-400 w-6 h-6 group-focus-within:text-blue-600" />
              <button className="absolute right-3 top-3 h-10 px-6 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-blue-600 transition-colors">Search</button>
            </div>
          </div>
        </section>

        {/* Bento Grid Services */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          {services.map((service) => (
            <a 
              key={service.id} 
              href={service.url}
              className={`
                group relative overflow-hidden rounded-[2rem] border border-slate-200/60 bg-white p-8 transition-all duration-500
                hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] hover:-translate-y-2
                ${service.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${service.size === 'medium' ? 'md:col-span-2' : ''}
              `}
            >
              <div className={`
                w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500
                ${service.color === 'blue' ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' : ''}
                ${service.color === 'orange' ? 'bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white' : ''}
                ${service.color === 'red' ? 'bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white' : ''}
                ${service.color === 'purple' ? 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white' : ''}
                ${service.color === 'emerald' ? 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white' : ''}
                ${service.color === 'pink' ? 'bg-pink-50 text-pink-600 group-hover:bg-pink-600 group-hover:text-white' : ''}
                ${service.color === 'indigo' ? 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white' : ''}
                ${service.color === 'amber' ? 'bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white' : ''}
              `}>
                <service.icon className="w-7 h-7" />
              </div>
              
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mb-2 block">{service.category}</span>
                <h3 className={`font-black text-slate-900 group-hover:text-blue-600 transition-colors ${service.size === 'large' ? 'text-3xl' : 'text-xl'}`}>
                  {service.name}
                </h3>
                <p className="mt-3 text-sm text-slate-500 leading-relaxed font-medium">
                  {service.desc}
                </p>
              </div>

              <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-slate-900 group-hover:border-slate-900 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>

              {/* Decorative Glow */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-50/0 group-hover:bg-blue-50/50 rounded-full blur-3xl transition-all duration-700 pointer-events-none" />
            </a>
          ))}
          
          {/* Ad Sense Integrated Bento Box */}
          <div className="md:col-span-2 bg-slate-900 rounded-[2rem] p-8 text-white relative overflow-hidden flex flex-col justify-between group">
             <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-500 rounded-full blur-[80px]" />
             </div>
             <div>
               <h3 className="text-2xl font-black mb-2 tracking-tight">당신의 비즈니스를<br/>코어픽에 연결하세요.</h3>
               <p className="text-sm text-slate-400 font-medium">매달 수만 명의 사용자가 코어픽을 통해 정보를 찾습니다.</p>
             </div>
             <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-center min-h-[100px] mt-6 backdrop-blur-sm">
                <p className="text-[10px] font-black text-white/30 tracking-[0.3em] uppercase">Advertisement Space</p>
             </div>
          </div>
        </section>

        {/* Live Status Section */}
        <section className="bg-white border border-slate-200/60 rounded-[2.5rem] p-10 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            <div className="space-y-6">
              <h3 className="text-xl font-black flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-red-500" /> 실시간 트렌드
              </h3>
              <div className="space-y-4">
                {[
                  { rank: '01', title: '플래시 게임 랭킹 1위: 슈게임', trend: 'up' },
                  { rank: '02', title: '오늘의 운세 및 심리 테스트', trend: 'steady' },
                  { rank: '03', title: '최신 지하철 시간표 업데이트', trend: 'up' },
                  { rank: '04', title: 'AI 챗봇 무료 사용 가이드', trend: 'new' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl group cursor-pointer hover:bg-white hover:shadow-lg transition-all">
                    <div className="flex items-center gap-4">
                      <span className="text-lg font-black text-slate-300 group-hover:text-blue-600 transition-colors">{item.rank}</span>
                      <span className="text-sm font-bold text-slate-700">{item.title}</span>
                    </div>
                    <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${item.trend === 'up' ? 'text-red-500 bg-red-50' : 'text-slate-400 bg-slate-100'}`}>
                      {item.trend}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-black flex items-center gap-3">
                  <Monitor className="w-6 h-6 text-blue-600" /> 코어픽 대시보드
                </h3>
                <span className="text-xs font-bold text-slate-400">마지막 업데이트: 방금 전</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { label: '누적 방문자', value: '1.2M+', sub: '+12% month' },
                  { label: '활성 서비스', value: '12개', sub: 'Ready to connect' },
                  { label: '사용자 평점', value: '4.9/5.0', sub: 'High Quality' },
                ].map((stat, i) => (
                  <div key={i} className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{stat.label}</p>
                    <p className="text-2xl font-black text-slate-900 mb-1">{stat.value}</p>
                    <p className="text-[10px] font-bold text-blue-600">{stat.sub}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl text-white flex items-center justify-between shadow-xl shadow-blue-200">
                 <div>
                   <p className="text-lg font-black tracking-tight">Premium Membership</p>
                   <p className="text-xs text-white/70">광고 없이 더 빠른 코어픽을 만나보세요.</p>
                 </div>
                 <button className="h-10 px-6 bg-white text-blue-600 rounded-xl text-xs font-black hover:bg-slate-100 transition-all">JOIN NOW</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-40 border-t border-slate-200/60 bg-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
            <div className="max-w-sm">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white fill-current" />
                </div>
                <span className="text-lg font-black tracking-tighter text-slate-900 uppercase">COREPICK HUB</span>
              </div>
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8">
                우리는 파편화된 디지털 정보 중 핵심(Core)만을 선별하여 가장 가치 있는 형태로 제공합니다. 코어픽은 더 나은 선택을 위한 당신의 디지털 동반자입니다.
              </p>
              <div className="flex gap-4">
                {[1,2,3,4].map(i => <div key={i} className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center hover:bg-slate-900 transition-all cursor-pointer group"><div className="w-4 h-4 bg-slate-300 group-hover:bg-white rounded-sm" /></div>)}
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 flex-1">
              <div>
                <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.2em] mb-6">Solutions</h4>
                <ul className="space-y-4 text-sm font-bold text-slate-400">
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Core Shopping</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Real-time News</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Web Tools</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.2em] mb-6">Entertainment</h4>
                <ul className="space-y-4 text-sm font-bold text-slate-400">
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Flash Games</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">AI Experiments</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Community</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.2em] mb-6">Support</h4>
                <ul className="space-y-4 text-sm font-bold text-slate-400">
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Terms of Use</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">
              © 2026 COREPICK NETWORK. POWERED BY CLOUDFLARE EDGE.
            </p>
            <div className="flex gap-4 items-center">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Global Network Online</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
