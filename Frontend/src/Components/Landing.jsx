import React from 'react';
import { Shield, Cpu, Zap, Github, BookOpen, Terminal, ArrowRight, HardDrive } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="text-2xl font-black tracking-tighter flex items-center gap-3"> 
          <div className="w-9 h-9 bg-[#1A1A1A] rounded-xl flex items-center justify-center overflow-hidden">
            <img 
              src="./logo.png"
              alt="Mill Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-3xl font-black leading-[0.9] ">MILL</span>

        </div>
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/poison291/Mill/" 
            target="_blank" 
            rel="noreferrer" 
            className="text-slate-400 hover:text-white transition-all flex items-center gap-2 text-sm font-medium"
          >
            <Github size={20} /> <span className="hidden sm:inline">GitHub</span>
          </a>
          <a 
            href="#" 
            className="bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2"
          >
            <BookOpen size={18} /> Docs
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 pt-24 pb-32 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white/[0.07] border border-white/10 px-4 py-1.5 rounded-full text-slate-400 text-xs font-mono mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          LOCAL HARDWARE ACCELERATED
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.9]">
          OWN YOUR <br /> 
          <span className="text-indigo-500">INTELLIGENCE.</span>
        </h1>
        
        <p className="text-slate-400 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-12 font-light leading-relaxed">
          The interface for <strong>Mill</strong>. Leveraging a high-performance Go backend to run large language models directly on your system hardware. Zero latency, zero cloud, zero compromise.
        </p>


        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-bold">
          <a 
            href="https://github.com/poison291/Mill/"
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 px-10 py-4 rounded-full text-lg transition-all flex items-center justify-center gap-2"
          >
            Get Started <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Hardware Stats / Features */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid md:grid-cols-4 gap-4 ">
          <StatCard icon={<Cpu size={20}/>} label="Engine" value="Go Lang" />
          <StatCard icon={<Shield size={20}/>} label="Privacy" value="100% Offline" />
          <StatCard icon={<Zap size={20}/>} label="Latency" value="Hardware Native" />
          <StatCard icon={<HardDrive size={20}/>} label="Context" value="Persistent" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 pb-32 border-t border-white/5 pt-32 ">
        <div>
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Terminal className="text-indigo-500" /> System Native
          </h3>
          <p className="text-slate-400 leading-relaxed">
            Mill isn't just a wrapper. It communicates directly with your Go binary to tap into raw CPU/GPU power without browser-imposed limits.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Shield className="text-indigo-500" /> Air-Gapped
          </h3>
          <p className="text-slate-400 leading-relaxed">
            No internet required. Once your system is configured, Mill operates entirely within your local network, ensuring your data never leaks.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Zap className="text-indigo-500" /> React Interface
          </h3>
          <p className="text-slate-400 leading-relaxed">
            A modern, sleek UI built with React and Tailwind CSS, designed to handle high-speed token streaming from the Go backend.
          </p>
        </div>
      </section>

      {/* Footer-ish Repository Link */}
      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-slate-600 text-sm mb-4 tracking-widest uppercase">Open Source Core</p>
        <a 
          href="https://github.com/poison291/Mill/" 
          className="text-slate-400 hover:text-indigo-400 transition-colors font-mono text-sm"
        >
          github.com/poison291/Mill
        </a>
      </footer>
    </div>
  );
};

const StatCard = ({ icon, label, value }) => (
  <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/5 flex flex-col items-center justify-center text-center gap-2 group hover:border-indigo-500/50 transition-all">
    <div className="text-slate-500 group-hover:text-indigo-400 transition-colors">{icon}</div>
    <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">{label}</div>
    <div className="text-lg font-mono font-bold">{value}</div>
  </div>
);

export default Landing;