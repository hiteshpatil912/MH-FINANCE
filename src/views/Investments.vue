<template>
  <div class="investments-page font-heading">
    <!-- Hero Section -->
    <section
      class="relative min-h-[70vh] flex items-center justify-center overflow-hidden border-b border-finance-gray/30 pt-20">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-finance-black/80 to-finance-black"></div>
        <div
          class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-finance-gold/40 via-transparent to-transparent">
        </div>
        <img alt="Abstract Financial Growth Visualization" class="w-full h-full object-cover grayscale opacity-40"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2yEu7pCRGPLGl32LrxlkMLPjXgcU6bO3JTol-moL0RyiBPeRukUK3uteiJFfgVNwcYLjTld9MtjHppOLLgkcEFyGFAtDeZpd0AP2Q8LU2xBv8nFd0M3EtVYMXc0WnTBvQnLZ1YJxow1AIsBwtFeMgDuFenTwh_YWuPpnW0mNLnpx7ZMsW1u3NWNmAO_VekrVrhXCjrM3i7zjiV3qq0dZIYjzaH1hZFR7KC6HTSC-anyp_hDL4Bfcg62Ma5q-12AyD0Wu10yTlthLY" />
      </div>

      <div class="relative z-10 max-w-4xl px-6 text-center">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-finance-gold/10 border border-finance-gold/20 mb-8 font-sans">
          <span class="relative flex h-2 w-2">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-finance-gold opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-finance-gold"></span>
          </span>
          <span class="text-[10px] font-bold tracking-widest uppercase text-finance-gold">Global Market Live</span>
        </div>

        <h1 class="text-5xl md:text-7xl font-bold text-finance-light leading-tight tracking-tight mb-8">
          Strategic <span class="text-finance-gold">Investment</span> Support
        </h1>

        <p
          class="text-lg md:text-xl text-finance-light/70 max-w-2xl mx-auto mb-10 leading-relaxed font-sans font-light">
          Empowering your wealth with data-driven insights and global market expertise. Bespoke strategies for the
          modern institutional investor.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            class="btn-gold w-full sm:w-auto px-8 py-4 text-sm font-sans tracking-widest uppercase shadow-xl shadow-finance-gold/20 hover:-translate-y-1">
            View Portfolio Models
          </button>
          <button class="btn-outline w-full sm:w-auto px-8 py-4 text-sm font-sans tracking-widest uppercase">
            Market Analysis
          </button>
        </div>
      </div>
    </section>

    <!-- Portfolio Management Section -->
    <section class="py-24 px-6 max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div class="max-w-xl">
          <h2 class="text-finance-gold tracking-widest uppercase text-sm mb-4 font-sans">Core Competencies</h2>
          <h3 class="text-3xl md:text-4xl font-bold text-finance-light">Advanced Portfolio Management</h3>
        </div>
        <p class="text-finance-light/60 max-w-md text-right md:text-left font-sans">Sophisticated asset allocation
          models designed to preserve and grow capital across diverse market cycles.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Card 1 -->
        <div
          class="glass-header group p-8 rounded-sm border border-finance-gold/10 hover:border-finance-gold/40 transition-all duration-500">
          <div
            class="w-14 h-14 rounded-sm bg-finance-gold/10 flex items-center justify-center mb-6 group-hover:bg-finance-gold/20 transition-colors">
            <svg class="w-7 h-7 text-finance-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
              </path>
            </svg>
          </div>
          <h4 class="text-xl font-bold text-finance-light mb-4">Diversified Assets</h4>
          <p class="text-finance-light/60 font-sans leading-relaxed mb-6 text-sm">Optimized exposure across global
            equities, fixed income, and alternative investment vehicles.</p>
          <div class="h-1 w-full bg-finance-light/5 rounded-full overflow-hidden">
            <div class="h-full bg-finance-gold w-2/3"></div>
          </div>
        </div>

        <!-- Card 2 -->
        <div
          class="glass-header group p-8 rounded-sm border border-finance-gold/30 shadow-lg shadow-finance-gold/5 hover:border-finance-gold/50 transition-all duration-500 transform md:-translate-y-4">
          <div
            class="w-14 h-14 rounded-sm bg-finance-gold/10 flex items-center justify-center mb-6 group-hover:bg-finance-gold/20 transition-colors">
            <svg class="w-7 h-7 text-finance-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
              </path>
            </svg>
          </div>
          <h4 class="text-xl font-bold text-finance-light mb-4">Risk Mitigation</h4>
          <p class="text-finance-light/60 font-sans leading-relaxed mb-6 text-sm">Dynamic hedging strategies and
            real-time stress testing to safeguard your core capital base.</p>
          <div class="h-1 w-full bg-finance-light/5 rounded-full overflow-hidden">
            <div class="h-full bg-finance-gold w-full"></div>
          </div>
        </div>

        <!-- Card 3 -->
        <div
          class="glass-header group p-8 rounded-sm border border-finance-gold/10 hover:border-finance-gold/40 transition-all duration-500">
          <div
            class="w-14 h-14 rounded-sm bg-finance-gold/10 flex items-center justify-center mb-6 group-hover:bg-finance-gold/20 transition-colors">
            <svg class="w-7 h-7 text-finance-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            </svg>
          </div>
          <h4 class="text-xl font-bold text-finance-light mb-4">Long-term Growth</h4>
          <p class="text-finance-light/60 font-sans leading-relaxed mb-6 text-sm">Strategic position entry focused on
            compounding returns and capturing multi-year market shifts.</p>
          <div class="h-1 w-full bg-finance-light/5 rounded-full overflow-hidden">
            <div class="h-full bg-finance-gold w-3/4"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Investment Strategies Section -->
    <section class="py-24 px-6 max-w-7xl mx-auto bg-finance-dark border-y border-finance-gray/30">
      <div class="text-center mb-16">
        <h2 class="text-finance-gold tracking-widest uppercase text-sm mb-4 font-sans">Execution Models</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-finance-light mb-6">Strategic Growth Models</h3>
        <p class="text-finance-light/60 max-w-2xl mx-auto font-sans">Precision-engineered strategies tailored to your
          specific liquidity needs and risk tolerance thresholds.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-0 rounded-3xl overflow-hidden border border-finance-gold/20">
        <!-- Model 1 -->
        <div class="p-10 bg-finance-light/5 border-r border-finance-gold/10">
          <span class="text-finance-light/40 font-bold text-xs tracking-widest uppercase mb-2 block font-sans">Low
            Risk</span>
          <h4 class="text-2xl font-bold text-finance-light mb-6">Conservative</h4>
          <ul class="space-y-4 mb-10 font-sans">
            <li class="flex items-center gap-3 text-sm text-finance-light/70">
              <span class="w-2 h-2 rounded-full bg-finance-gold"></span> Capital Preservation Focus
            </li>
            <li class="flex items-center gap-3 text-sm text-finance-light/70">
              <span class="w-2 h-2 rounded-full bg-finance-gold"></span> 70% Fixed Income Allocation
            </li>
            <li class="flex items-center gap-3 text-sm text-finance-light/70">
              <span class="w-2 h-2 rounded-full bg-finance-gold"></span> Quarterly Yield Optimization
            </li>
          </ul>
          <div class="text-sm font-bold text-finance-gold font-sans">Target Return: 4-6% p.a.</div>
        </div>

        <!-- Model 2 -->
        <div class="p-10 bg-finance-gold/10 border-r border-finance-gold/10 relative overflow-hidden">
          <div
            class="absolute top-0 left-1/2 -translate-x-1/2 bg-finance-gold text-finance-black text-[10px] font-bold px-4 py-1 rounded-b-sm tracking-widest uppercase font-sans">
            Most Requested</div>
          <span class="text-finance-gold/80 font-bold text-xs tracking-widest uppercase mb-2 block font-sans">Medium
            Risk</span>
          <h4 class="text-2xl font-bold text-finance-light mb-6">Balanced Growth</h4>
          <ul class="space-y-4 mb-10 font-sans">
            <li class="flex items-center gap-3 text-sm text-finance-light/90">
              <span class="w-2 h-2 rounded-full bg-finance-gold"></span> Risk-Adjusted Outperformance
            </li>
            <li class="flex items-center gap-3 text-sm text-finance-light/90">
              <span class="w-2 h-2 rounded-full bg-finance-gold"></span> 50/50 Equity-Bond Hybrid
            </li>
            <li class="flex items-center gap-3 text-sm text-finance-light/90">
              <span class="w-2 h-2 rounded-full bg-finance-gold"></span> Alternative Asset Inclusion
            </li>
          </ul>
          <div class="text-sm font-bold text-finance-light font-sans">Target Return: 8-12% p.a.</div>
        </div>

        <!-- Model 3 -->
        <div class="p-10 bg-finance-light/5">
          <span class="text-finance-light/40 font-bold text-xs tracking-widest uppercase mb-2 block font-sans">High
            Risk</span>
          <h4 class="text-2xl font-bold text-finance-light mb-6">Aggressive</h4>
          <ul class="space-y-4 mb-10 font-sans">
            <li class="flex items-center gap-3 text-sm text-finance-light/70">
              <span class="w-2 h-2 rounded-full bg-finance-gold"></span> Maximum Capital Appreciation
            </li>
            <li class="flex items-center gap-3 text-sm text-finance-light/70">
              <span class="w-2 h-2 rounded-full bg-finance-gold"></span> Concentrated Equity Positions
            </li>
            <li class="flex items-center gap-3 text-sm text-finance-light/70">
              <span class="w-2 h-2 rounded-full bg-finance-gold"></span> Emerging Tech & Markets
            </li>
          </ul>
          <div class="text-sm font-bold text-finance-gold font-sans">Target Return: 15%+ p.a.</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>
