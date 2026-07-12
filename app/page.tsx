'use client';

import React, { useState } from 'react';
import {
  Wallet,
  PiggyBank,
  Calendar,
  AlertCircle,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Play,
  Fingerprint,
  ArrowUpRight,
  ArrowDownRight,
  Smartphone,
  ChevronRight,
  Check
} from 'lucide-react';

const BANKS = [
  { name: 'GCash', logo: '/banks/gcash.svg' },
  { name: 'Maya', logo: '/banks/maya.svg' },
  { name: 'GoTyme', logo: '/banks/gotyme.svg' },
  { name: 'MariBank', logo: '/banks/maribank.svg' },
  { name: 'BPI', logo: '/banks/bpi.svg' },
  { name: 'BDO Unibank', logo: '/banks/bdounibank.svg' },
  { name: 'UnionBank', logo: '/banks/unionbank.svg' },
  { name: 'Metrobank', logo: '/banks/metrobank.svg' },
  { name: 'Security Bank', logo: '/banks/security.svg' },
  { name: 'RCBC', logo: '/banks/rcbc.svg' },
  { name: 'CIMB Bank', logo: '/banks/cimb.svg' },
  { name: 'EastWest Bank', logo: '/banks/eastwest.svg' },
  { name: 'Landbank', logo: '/banks/landbank.svg' },
  { name: 'Tonik', logo: '/banks/tonik.svg' },
  { name: 'UnionDigital', logo: '/banks/uniondigital.svg' },
  { name: 'UNO Bank', logo: '/banks/uno.svg' },
  { name: 'Vybe', logo: '/banks/vybe.svg' },
  { name: 'AUB', logo: '/banks/aub.svg' },
  { name: 'PNB', logo: '/banks/pnb.svg' },
  { name: 'DBP', logo: '/banks/dbp.svg' },
  { name: 'HSBC', logo: '/banks/hsbc.svg' },
  { name: 'Citibank', logo: '/banks/citibank.svg' },
  { name: 'PSBank', logo: '/banks/psbank.svg' },
  { name: 'Bank of Commerce', logo: '/banks/bankofcommerce.svg' },
  { name: 'China Bank', logo: '/banks/chinabank.svg' }
];

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'budgets' | 'bnpl' | 'savings'>('dashboard');

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 selection:bg-blue-500 selection:text-white overflow-hidden">
      {/* Decorative Glow Backgrounds */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-900/10 glow-blur animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-950/15 glow-blur animate-pulse-slow" />
      <div className="absolute top-[40%] left-[25%] w-[40vw] h-[40vw] rounded-full bg-indigo-950/10 glow-blur" />

      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md border-b border-white/5 bg-[#07090e]/75">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl border border-dashed border-blue-500/50 flex items-center justify-center bg-white/5">
              <span className="text-xs text-blue-400 font-mono">Logo</span>
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Centimo
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#purpose" className="hover:text-white transition-colors">Purpose</a>
            <a href="#preview" className="hover:text-white transition-colors">App Preview</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </nav>

          <a
            href="#download"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-semibold bg-white text-black hover:bg-slate-200 active:scale-95 transition-all shadow-md shadow-white/5"
          >
            Get App
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-xs font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Designed Exclusively for Students</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Student Financial
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent">
              Freedom Made Simple.
            </span>
          </h1>

          <p className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed">
            Centimo is the ultimate smart wallet, budget manager, and bill tracker that helps students master their personal finance, avoid debt traps, and save for what matters.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <a
              href="#download"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-center transition-all shadow-lg shadow-blue-500/25 active:scale-98 flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.58 2.95-1.39z"/>
              </svg>
              Download on App Store
            </a>
            <a
              href="#preview"
              className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-200 font-semibold text-center transition-all active:scale-98 flex items-center justify-center gap-2"
            >
              See Live Demo
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 border-t border-white/5 pt-8 w-full">
            <div>
              <div className="text-2xl font-bold text-white">0%</div>
              <div className="text-xs text-slate-500 mt-1">Hidden Fees or Ads</div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-blue-400">100%</div>
              <div className="text-xs text-slate-500 mt-1">Privacy Focused</div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-indigo-400">Smart</div>
              <div className="text-xs text-slate-500 mt-1">Budget Reallocation</div>
            </div>
          </div>
        </div>

        {/* Hero Interactive Phone Mockup */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl -z-10" />
          
          {/* Main Floating Phone frame */}
          <div className="w-[320px] h-[640px] rounded-[48px] border-4 border-slate-800 bg-[#0f1118] p-3.5 shadow-2xl shadow-black animate-float relative">
            {/* Dynamic Island */}
            {activeTab !== 'dashboard' && (
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-20 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-900 absolute right-4" />
              </div>
            )}

            {/* Inner Content Panel */}
            <div className="w-full h-full rounded-[34px] bg-[#07090e] overflow-hidden border border-white/5 flex flex-col relative select-none">
              
              {activeTab === 'dashboard' ? (
                <div className="relative w-full h-full overflow-hidden">
                  <img 
                    src="/screenshots/dashboard.png" 
                    alt="Centimo Dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <>
                  {/* Fake Status Bar */}
                  <div className="h-9 px-6 pt-3 flex justify-between items-center text-[10px] text-slate-500 font-semibold">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3.5 h-2 rounded-sm border border-slate-600 p-0.5"><div className="w-full h-full bg-slate-500 rounded-2xs" /></div>
                    </div>
                  </div>

                  {/* Dynamic App Content Switcher */}
                  <div className="flex-1 px-4 overflow-y-auto pb-20 pt-2 scrollbar-none">
                    
                    {/* Header Profile */}
                    <div className="flex items-center justify-between mb-5 px-1">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-full bg-blue-900/30 border border-blue-500/20 flex items-center justify-center text-xs font-semibold text-blue-300">
                          JD
                        </div>
                        <div>
                          <div className="text-[10px] text-slate-500">Welcome back</div>
                          <div className="text-xs font-bold text-white">John Doe</div>
                        </div>
                      </div>
                      <Fingerprint className="w-5 h-5 text-blue-400" />
                    </div>

                    {/* Budgets Mode */}
                    {activeTab === 'budgets' && (
                      <div className="space-y-4">
                        {/* Budget Overview */}
                        <div className="bg-[#11141c] border border-white/5 rounded-2xl p-4 text-center">
                          <div className="text-[10px] text-slate-400">Total Budget Spent</div>
                          <div className="text-2xl font-black text-white mt-1">$385.00 <span className="text-xs font-normal text-slate-500">/ $600</span></div>
                          
                          {/* Simple progress ring mock */}
                          <div className="my-4 flex justify-center">
                            <div className="w-20 h-20 rounded-full border-4 border-blue-500/20 border-t-blue-500 border-r-indigo-500 flex items-center justify-center">
                              <span className="text-xs font-bold text-slate-300">64%</span>
                            </div>
                          </div>
                        </div>

                        {/* Smart Suggestion Notification */}
                        <div className="p-3 rounded-2xl border border-blue-500/20 bg-blue-500/5 flex items-start gap-2.5">
                          <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
                          <div className="text-[10px] text-blue-200 leading-normal">
                            <strong>Smart Reallocation:</strong> You spent less on Dining. Move <strong>$20.00</strong> to your Book Budget?
                            <div className="mt-2 flex gap-2">
                              <button className="px-2.5 py-1 rounded-md bg-blue-600 text-white font-bold text-[9px]">Apply</button>
                              <button className="px-2.5 py-1 rounded-md bg-white/5 text-slate-400 text-[9px]">Dismiss</button>
                            </div>
                          </div>
                        </div>

                        {/* Budget List */}
                        <div className="space-y-2">
                          <div className="p-3 bg-[#11141c] border border-white/5 rounded-xl space-y-1.5">
                            <div className="flex justify-between text-xs font-medium">
                              <span>🍔 Food & Dining</span>
                              <span className="font-bold">$180 / $250</span>
                            </div>
                            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                              <div className="h-full bg-blue-500 rounded-full" style={{ width: '72%' }} />
                            </div>
                          </div>
                          <div className="p-3 bg-[#11141c] border border-white/5 rounded-xl space-y-1.5">
                            <div className="flex justify-between text-xs font-medium">
                              <span>📚 Books & Learning</span>
                              <span className="font-bold">$90 / $100</span>
                            </div>
                            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                              <div className="h-full bg-indigo-500 rounded-full" style={{ width: '90%' }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Subscriptions & BNPL Mode */}
                    {activeTab === 'bnpl' && (
                      <div className="space-y-4">
                        <div className="text-[11px] font-bold text-slate-400 px-1">Upcoming Bills & BNPL</div>

                        {/* Subscription Card */}
                        <div className="p-3 bg-[#11141c] border border-white/5 rounded-xl space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px] font-bold">N</div>
                              <div>
                                <div className="text-xs font-bold">Netflix Student</div>
                                <div className="text-[9px] text-slate-500">Auto-renews Monthly</div>
                              </div>
                            </div>
                            <span className="text-xs font-bold text-slate-200">$9.99</span>
                          </div>
                          <div className="flex justify-between items-center text-[9px] text-slate-400 border-t border-white/5 pt-2">
                            <span>Next due: July 15</span>
                            <span className="text-blue-400">5 days left</span>
                          </div>
                        </div>

                        {/* BNPL Installment Card */}
                        <div className="p-3 bg-gradient-to-br from-[#12141c] to-[#07090d] border border-blue-500/10 rounded-xl space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px] font-bold">💻</div>
                              <div>
                                <div className="text-xs font-bold">MacBook Air Split</div>
                                <div className="text-[9px] text-slate-400">Installment 3 of 6</div>
                              </div>
                            </div>
                            <span className="text-xs font-bold text-blue-400">$64.50</span>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-[9px] text-slate-400">
                              <span>Total Repaid: $129.00 / $387.00</span>
                              <span>33% Paid</span>
                            </div>
                            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                              <div className="h-full bg-blue-500 rounded-full" style={{ width: '33%' }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Savings Goals Mode */}
                    {activeTab === 'savings' && (
                      <div className="space-y-4">
                        <div className="text-[11px] font-bold text-slate-400 px-1">Savings Goals</div>

                        {/* Goal 1 */}
                        <div className="p-4 bg-[#11141c] border border-white/5 rounded-2xl space-y-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="text-xs font-bold">🎓 Semester Tuition</div>
                              <div className="text-[9px] text-slate-500">Target Date: Dec 2026</div>
                            </div>
                            <span className="text-xs font-bold text-blue-400">$1,200 <span className="text-[9px] text-slate-500">/ $1,500</span></span>
                          </div>
                          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" style={{ width: '80%' }} />
                          </div>
                          <div className="flex justify-between text-[9px] text-slate-400">
                            <span>80% Completed</span>
                            <span>$300 to go</span>
                          </div>
                        </div>

                        {/* Goal 2 */}
                        <div className="p-4 bg-[#11141c] border border-white/5 rounded-2xl space-y-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="text-xs font-bold">✈️ Spring Break Trip</div>
                              <div className="text-[9px] text-slate-500">Target Date: Mar 2027</div>
                            </div>
                            <span className="text-xs font-bold text-sky-400">$200 <span className="text-[9px] text-slate-500">/ $800</span></span>
                          </div>
                          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-sky-500 to-blue-500 rounded-full" style={{ width: '25%' }} />
                          </div>
                          <div className="flex justify-between text-[9px] text-slate-400">
                            <span>25% Completed</span>
                            <span>$600 to go</span>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                </>
              )}

              {/* Fake Navigation Bar */}
              {activeTab !== 'dashboard' && (
                <div className="absolute bottom-4 left-4 right-4 h-14 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-around px-2">
                  <button
                    onClick={() => setActiveTab('dashboard')}
                    className="flex flex-col items-center gap-1 transition-colors text-slate-500"
                  >
                    <Wallet className="w-4 h-4" />
                    <span className="text-[8px]">Home</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('budgets')}
                    className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'budgets' ? 'text-blue-400' : 'text-slate-500'}`}
                  >
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-[8px]">Budgets</span>
                  </button>
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-blue-500/20 active:scale-90 transition-transform">
                    +
                  </div>
                  <button
                    onClick={() => setActiveTab('bnpl')}
                    className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'bnpl' ? 'text-blue-400' : 'text-slate-500'}`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span className="text-[8px]">Bills</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('savings')}
                    className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'savings' ? 'text-blue-400' : 'text-slate-500'}`}
                  >
                    <PiggyBank className="w-4 h-4" />
                    <span className="text-[8px]">Goals</span>
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* Bank Logos Ticker Section */}
      <section className="py-12 bg-[#090b11]/30 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
            Supported Banks & E-Wallets
          </p>
        </div>
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee flex gap-12 items-center py-4 whitespace-nowrap">
            {BANKS.map((bank, index) => (
              <div key={`bank-1-${index}`} className="flex items-center justify-center w-28 h-8 shrink-0 hover:scale-105 transition-transform cursor-pointer">
                <img
                  src={bank.logo}
                  alt={bank.name}
                  className="max-h-full max-w-full opacity-40 hover:opacity-100 transition-all object-contain filter brightness-0 invert"
                />
              </div>
            ))}
          </div>
          {/* Duplicate for infinite loop */}
          <div className="animate-marquee flex gap-12 items-center py-4 whitespace-nowrap" aria-hidden="true">
            {BANKS.map((bank, index) => (
              <div key={`bank-2-${index}`} className="flex items-center justify-center w-28 h-8 shrink-0 hover:scale-105 transition-transform cursor-pointer">
                <img
                  src={bank.logo}
                  alt={bank.name}
                  className="max-h-full max-w-full opacity-40 hover:opacity-100 transition-all object-contain filter brightness-0 invert"
                />
              </div>
            ))}
          </div>
          
          {/* Fade gradients at edges */}
          <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-[#07090e] to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-[#07090e] to-transparent pointer-events-none z-10" />
        </div>
      </section>

      {/* Purpose Section */}
      <section id="purpose" className="py-20 md:py-28 bg-[#090b11]/60 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">The Student Reality</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-6">
              Why We Built Centimo
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Managing finance as a student is uniquely challenging. Between erratic part-time schedules, recurring study subscriptions, text books, and split expenses, traditional banking apps fail to give a clear picture. Centimo simplifies the journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/2 border border-white/5 hover:border-blue-500/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <AlertCircle className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-3">Avoid BNPL Pitfalls</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Buy Now Pay Later plans sound friendly but easily stack up. Centimo displays recurring split installments alongside normal bills, giving students a warning before committing to new plans.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/2 border border-white/5 hover:border-blue-500/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-3">Dynamic Reallocation</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Student budgets are fluid. If you underspend on groceries, Centimo suggests shifting that surplus to cover study materials or savings goals, adapting to your lifestyle.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/2 border border-white/5 hover:border-blue-500/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <PiggyBank className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-3">Goal-Based Savings</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Visualize savings targets like college laptops, textbooks, or travel. Watch your progress grow through milestones, helping you budget specifically for what matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots Gallery & Selectors */}
      <section id="preview" className="py-20 md:py-28 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl text-left">
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">App Features</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Explore the Interface
            </h3>
          </div>
          {/* Controls */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'dashboard', label: 'Overview' },
              { id: 'budgets', label: 'Smart Budgets' },
              { id: 'bnpl', label: 'Bills & BNPL' },
              { id: 'savings', label: 'Savings Goals' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-900/20'
                    : 'bg-white/5 text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* High Fidelity Screen Placeholders */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            {activeTab === 'dashboard' && (
              <div className="space-y-4">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Multi-Wallet Hub</span>
                <h4 className="text-2xl font-bold text-white">All your student balances, unified.</h4>
                <p className="text-slate-400 leading-relaxed">
                  Centimo keeps track of your student bank accounts, debit cards, cash, and digital wallets. View your unified balance at a glance and track expenses across all sources instantly.
                </p>
                <ul className="space-y-3 pt-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Real-time balance calculations</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Support for cash, bank, and digital cards</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'budgets' && (
              <div className="space-y-4">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Smart Budgeting</span>
                <h4 className="text-2xl font-bold text-white">Smart suggestions to save your budget.</h4>
                <p className="text-slate-400 leading-relaxed">
                  Centimo continuously analyzes your spending limits. If you underspend in one category, it proactively offers suggestions to transfer funds to category budgets running low, avoiding accidental overdrafts.
                </p>
                <ul className="space-y-3 pt-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Intelligent one-tap reallocation suggestion alerts</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Category distribution donut charts</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'bnpl' && (
              <div className="space-y-4">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Installments & Subscriptions</span>
                <h4 className="text-2xl font-bold text-white">Prevent leaking subscription costs.</h4>
                <p className="text-slate-400 leading-relaxed">
                  Manage college streaming subscriptions, utility bills, and split BNPL payment structures (like Affirm, Klarna, or manual split plans) in a single interactive dashboard. Track how many installments remain.
                </p>
                <ul className="space-y-3 pt-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Remaining payment trackers for BNPL plans</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Automated alerts prior to debit renewal dates</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'savings' && (
              <div className="space-y-4">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Goal Tracker</span>
                <h4 className="text-2xl font-bold text-white">Focus on your student milestones.</h4>
                <p className="text-slate-400 leading-relaxed">
                  Set target amounts and due dates for learning gear, textbooks, semesters, or student clubs. Centimo breaks down monthly saving targets, helping you hit goals step by step.
                </p>
                <ul className="space-y-3 pt-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Multiple concurrent savings goals</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Interactive visual progress tracking</span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="lg:col-span-6 flex justify-center w-full">
            {activeTab === 'dashboard' ? (
              <div className="relative w-full max-w-[280px] h-[560px] rounded-[36px] border-4 border-slate-800 bg-[#0f1118] overflow-hidden shadow-2xl">
                <img 
                  src="/screenshots/dashboard.png" 
                  alt="Centimo Dashboard App Screenshot"
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              /* Screenshot Placeholder Card */
              <div className="w-full max-w-md aspect-video rounded-3xl bg-slate-900/50 border border-white/10 p-6 flex flex-col justify-between relative overflow-hidden group shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                    Screenshot Placeholder
                  </span>
                </div>

                <div className="my-6">
                  <h5 className="text-lg font-bold text-white mb-2">
                    Centimo App Screenshot
                  </h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    This placeholder is reserved for the Centimo {activeTab} screen interface. Replace this in the project assets folder once app builds are complete.
                  </p>
                </div>

                <div className="text-[10px] text-slate-500 flex items-center gap-2">
                  <span>Path: <code>public/screenshots/{activeTab}.png</code></span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pricing / Premium Plans Section */}
      <section id="pricing" className="py-20 md:py-28 bg-[#090b11]/40 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">Simple Pricing</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-6">
              Choose Your Flow
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Start mastering your finances for free, or unlock unlimited potential to track all your wallets, installments, and budgets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {/* Free Tier */}
            <div className="p-8 rounded-3xl bg-slate-900/30 border border-white/5 hover:border-blue-500/10 transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Centimo Basic</span>
                <div className="mt-4 flex items-baseline gap-1 text-white">
                  <span className="text-4xl font-black">₱0</span>
                  <span className="text-xs text-slate-500">/ forever</span>
                </div>
                <p className="mt-4 text-xs text-slate-400 leading-relaxed">
                  Perfect to get a feel for tracking your weekly expenses. Fully functional, but limited to a lifetime maximum of 50 transactions.
                </p>
                <div className="w-full h-px bg-white/5 my-6" />
                <ul className="space-y-3.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Up to 50 Transactions Limit</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Single Wallet Tracking</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Standard Expense Categories</span>
                  </li>
                </ul>
              </div>
              <a
                href="#download"
                className="mt-8 block w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-center text-xs font-bold transition-all"
              >
                Get Started
              </a>
            </div>

            {/* Premium Tier */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#111624] to-[#07090e] border border-blue-500/30 shadow-xl shadow-blue-500/5 relative overflow-hidden flex flex-col justify-between group">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-[9px] font-extrabold uppercase px-3 py-1 rounded-bl-xl tracking-wider">
                Student Choice
              </div>
              <div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Centimo Premium</span>
                <div className="mt-4 flex items-baseline gap-1 text-white">
                  <span className="text-4xl font-black">₱149</span>
                  <span className="text-xs text-slate-400">/ month</span>
                </div>
                <p className="mt-4 text-xs text-slate-400 leading-relaxed">
                  Unlock unlimited power. Zero restrictions on transaction logs, multiple active wallets, automated budget shifts, and biometric lock.
                </p>
                <div className="w-full h-px bg-white/10 my-6" />
                <ul className="space-y-3.5 text-xs text-slate-200">
                  <li className="flex items-center gap-2.5 font-semibold text-white">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Unlimited Transactions</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Unlimited Wallets & Bank Links</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Smart Budget Reallocation Suggestions</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Subscriptions & BNPL Tracker Dashboard</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Biometric FaceID / Fingerprint lock</span>
                  </li>
                </ul>
              </div>
              <a
                href="#download"
                className="mt-8 block w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-center text-xs font-bold transition-all shadow-lg shadow-blue-500/20"
              >
                Upgrade Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Play Store Promo Section */}
      <section id="download" className="py-20 md:py-28 bg-gradient-to-b from-transparent to-[#04060a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-xs font-semibold mb-8">
            <ShieldCheck className="w-4 h-4" />
            <span>Secure Biometric Verification Built-in</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-6">
            Ready to Take Control?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Download Centimo on the App Store today and start managing your funds with maximum confidence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* App Store Mock Button */}
            <div className="w-60 h-18 rounded-2xl bg-[#11141c] border border-white/10 p-4 flex items-center gap-3.5 hover:border-blue-500/40 transition-colors cursor-pointer select-none group">
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                {/* Custom App Store Icon SVG */}
                <svg className="w-6 h-6 text-slate-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.58 2.95-1.39z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Download on the</div>
                <div className="text-sm font-extrabold text-white group-hover:text-blue-400 transition-colors">App Store</div>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-600 mt-6">
            Centimo is a certified secure student budgeting platform. iOS 15.0 or higher required.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 bg-[#04060a]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg border border-dashed border-slate-500 flex items-center justify-center bg-white/5">
              <span className="text-[8px] text-slate-400 font-mono">Logo</span>
            </div>
            <span className="font-bold text-slate-400">Centimo</span>
          </div>

          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} Centimo App. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
