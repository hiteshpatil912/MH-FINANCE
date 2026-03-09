<template>
  <div class="insights-page font-heading">
    <!-- Hero Section -->
    <section class="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-finance-black/60 to-finance-black z-10"></div>
        <div class="absolute inset-0 bg-finance-black/40 z-10"></div>
        <img class="w-full h-full object-cover grayscale opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGhK7BXwQAn3jKGpRqb6qz4YDEORcjsHmHxjgo_F6MH8vh3VamflGSpdMtcMppLG4zL0XWt98VVWa2IyTTIK1Pq48uh-Seia3ZxjArmMPNHmrHy7x9HWiEC6NZ_avK8zRHrlvqdvuh9ZYasVgI5h_NvifcMsy1Y3hpVjmv9U5a4ERqkL60M44ZZmrk9fCFtnqQTa0tWplBpbAiu8Nms0Em1OaElObDf2An3NEjh3NI21t_gRddgD_qW9Tkvhby8xgORRu1BMdj1qeE"/>
      </div>
      
      <div class="relative z-20 container mx-auto px-6 text-center">
        <span class="inline-block px-4 py-1 rounded-full border border-finance-gold/30 bg-finance-gold/10 text-finance-gold text-xs font-bold tracking-widest uppercase mb-6 font-sans">Proprietary Research</span>
        <h1 class="text-5xl md:text-7xl font-bold text-finance-light mb-6 tracking-tight">Intelligence <br/><span class="text-finance-gold italic font-light">Beyond the Surface</span></h1>
        <p class="max-w-2xl mx-auto text-finance-light/60 text-lg md:text-xl font-light leading-relaxed mb-10 font-sans">
          Exclusive data analysis and expert commentary crafted for the institutional and private investor.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button class="btn-gold px-8 py-3 rounded-sm font-bold text-sm tracking-wide uppercase">
            Access Latest Briefings
          </button>
          <button class="btn-outline px-8 py-3 rounded-sm font-bold text-sm tracking-wide uppercase">
            Request Custom Analysis
          </button>
        </div>
      </div>
    </section>

    <!-- Dashboard Style Stats -->
    <section class="container mx-auto px-6 -mt-16 relative z-30 max-w-[1200px]">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="glass-header p-6 rounded-sm flex items-center justify-between border border-finance-gold/10">
          <div>
            <p class="text-finance-light/50 text-xs font-bold uppercase tracking-wider mb-1 font-sans">Global Market Sentiment</p>
            <h3 class="text-2xl font-bold text-finance-light">Bullish <span class="text-emerald-500 text-sm font-normal ml-2 font-sans">+2.4%</span></h3>
          </div>
          <div class="w-12 h-12 rounded-sm bg-finance-gold/10 flex items-center justify-center text-finance-gold">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
          </div>
        </div>
        
        <div class="glass-header p-6 rounded-sm flex items-center justify-between border border-finance-gold/10">
          <div>
            <p class="text-finance-light/50 text-xs font-bold uppercase tracking-wider mb-1 font-sans">Volatilty Index (VIX)</p>
            <h3 class="text-2xl font-bold text-finance-light">14.22 <span class="text-rose-500 text-sm font-normal ml-2 font-sans">-0.8%</span></h3>
          </div>
          <div class="w-12 h-12 rounded-sm bg-finance-gold/10 flex items-center justify-center text-finance-gold">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
          </div>
        </div>
        
        <div class="glass-header p-6 rounded-sm flex items-center justify-between border border-finance-gold/10">
          <div>
            <p class="text-finance-light/50 text-xs font-bold uppercase tracking-wider mb-1 font-sans">Research Coverage</p>
            <h3 class="text-2xl font-bold text-finance-light">42 Sectors</h3>
          </div>
          <div class="w-12 h-12 rounded-sm bg-finance-gold/10 flex items-center justify-center text-finance-gold">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content Area -->
    <section class="container mx-auto px-6 py-20 max-w-[1200px]">
      <div class="flex flex-col lg:flex-row gap-12">
        <!-- Left Column: Articles -->
        <div class="lg:w-2/3">
          <div class="flex items-center justify-between mb-10 border-b border-finance-gold/20 pb-4">
            <h2 class="text-3xl font-bold text-finance-light tracking-tight">Daily Market Briefings</h2>
            <a class="text-finance-gold text-sm font-bold flex items-center gap-2 hover:underline font-sans" href="#">
              View Archive 
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>

          <div class="space-y-10">
            <!-- Featured Article -->
            <article class="group cursor-pointer">
              <div class="flex flex-col md:flex-row gap-8">
                <div class="md:w-2/5 overflow-hidden rounded-sm border border-finance-gold/10">
                  <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 aspect-video md:aspect-square" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJe5TS9bcjQ1Z1UHO_NzVGirjUVopheF3mO93TiP-u0T_g0Xcr8r1IoqtS9N2gcm4bGqb5wRijg2rY2V696abkMZQytufUEpKh-5MhdnZr_cWDHm4BaHIP3LuwAz99PnFxRqpS9e3PMmmdGx3zsQ3Vq3EYEf10FrMS6Jyohd6ei7_-tq9sDOD1vitWjw1e-Xs6iseC-6YgvC4kf6ymjM7ZlkQx3D7jLDk3qrcDPBbmWQT-LqQSWqdW7sNAS-g36Kv_Uf2U7k2n6wXz"/>
                </div>
                <div class="md:w-3/5 flex flex-col justify-center">
                  <div class="flex items-center gap-3 text-finance-gold text-xs font-bold uppercase tracking-widest mb-3 font-sans">
                    <span>Macro Strategy</span>
                    <span class="w-1 h-1 bg-finance-gold/50 rounded-full"></span>
                    <span class="text-finance-light/50 uppercase">Oct 24, 2024</span>
                  </div>
                  <h3 class="text-2xl md:text-3xl font-bold text-finance-light group-hover:text-finance-gold transition-colors mb-4">The New Paradigm: Navigating Quantitative Tightening</h3>
                  <p class="text-finance-light/60 font-sans font-light leading-relaxed mb-6">
                    An in-depth analysis of how central bank shifts are redefining liquidity across luxury asset classes and emerging markets...
                  </p>
                  <div class="flex items-center gap-4">
                    <div class="w-8 h-8 rounded-full bg-finance-gold"></div>
                    <div class="text-sm font-sans">
                      <p class="text-finance-light font-bold">Julian Sterling</p>
                      <p class="text-finance-light/50">Chief Investment Officer</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <hr class="border-finance-gold/10"/>

            <!-- Standard Article List -->
            <div class="space-y-8">
              <div class="flex items-start gap-6 group cursor-pointer">
                <div class="text-finance-gold font-bold text-xl leading-none">01</div>
                <div class="flex-1">
                  <p class="text-finance-light/50 text-xs font-bold uppercase tracking-widest mb-1 font-sans">Global Trade</p>
                  <h4 class="text-xl font-bold text-finance-light group-hover:text-finance-gold transition-colors">Supply Chain Resilience: Why Near-Shoring is the New Gold Standard</h4>
                  <p class="text-finance-light/60 font-sans text-sm mt-2 line-clamp-2">Assessing the impact of geopolitical shifts on manufacturing hubs and their downstream financial impacts.</p>
                </div>
              </div>

              <div class="flex items-start gap-6 group cursor-pointer">
                <div class="text-finance-gold font-bold text-xl leading-none">02</div>
                <div class="flex-1">
                  <p class="text-finance-light/50 text-xs font-bold uppercase tracking-widest mb-1 font-sans">Energy Transition</p>
                  <h4 class="text-xl font-bold text-finance-light group-hover:text-finance-gold transition-colors">The ESG Alpha: Identifying Sustainable Returns in Volatile Commodities</h4>
                  <p class="text-finance-light/60 font-sans text-sm mt-2 line-clamp-2">Our proprietary scoring model reveals hidden opportunities in the green energy transition sector.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Deep Dive Section -->
          <div class="mt-24">
            <div class="flex items-center justify-between mb-10 border-b border-finance-gold/20 pb-4">
              <h2 class="text-3xl font-bold text-finance-light tracking-tight">Deep Dive Reports</h2>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="glass-header p-8 rounded-sm group border border-finance-gold/10 hover:border-finance-gold/40 transition-all">
                <div class="w-14 h-14 rounded-sm bg-finance-gold flex items-center justify-center text-finance-black mb-6">
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </div>
                <h4 class="text-xl font-bold text-finance-light mb-3">AI & The Next Industrial Revolution</h4>
                <p class="text-finance-light/60 font-sans text-sm font-light leading-relaxed mb-6">A 45-page whitepaper on the integration of Large Language Models in corporate financial structures.</p>
                <button class="text-finance-gold font-sans text-xs font-bold uppercase tracking-widest border-b border-finance-gold/30 pb-1 hover:border-finance-gold transition-all">Download PDF</button>
              </div>
              
              <div class="glass-header p-8 rounded-sm group border border-finance-gold/10 hover:border-finance-gold/40 transition-all">
                <div class="w-14 h-14 rounded-sm border border-finance-gold/30 flex items-center justify-center text-finance-gold mb-6">
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                </div>
                <h4 class="text-xl font-bold text-finance-light mb-3">Luxury Asset Performance 2024</h4>
                <p class="text-finance-light/60 font-sans text-sm font-light leading-relaxed mb-6">Quarterly review of fine art, rare spirits, and high-end real estate as alternative investment vehicles.</p>
                <button class="text-finance-gold font-sans text-xs font-bold uppercase tracking-widest border-b border-finance-gold/30 pb-1 hover:border-finance-gold transition-all">Members Only</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Interactive Elements & Sidebar -->
        <div class="lg:w-1/3">
          <div class="sticky top-28 space-y-12">
            <!-- Market Pulse Interactive -->
            <div class="bg-finance-dark rounded-sm border border-finance-gold/10 p-6 overflow-hidden relative">
              <div class="flex items-center justify-between mb-6">
                <h3 class="text-lg font-bold text-finance-light">Market Pulse</h3>
                <span class="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse"></span>
              </div>
              
              <div class="h-48 flex items-end justify-between gap-2 px-2">
                <div class="w-full bg-finance-gold/20 hover:bg-finance-gold transition-colors rounded-t-sm h-[60%]"></div>
                <div class="w-full bg-finance-gold/20 hover:bg-finance-gold transition-colors rounded-t-sm h-[40%]"></div>
                <div class="w-full bg-finance-gold/20 hover:bg-finance-gold transition-colors rounded-t-sm h-[80%]"></div>
                <div class="w-full bg-finance-gold hover:bg-finance-gold transition-colors rounded-t-sm h-[95%]"></div>
                <div class="w-full bg-finance-gold/20 hover:bg-finance-gold transition-colors rounded-t-sm h-[55%]"></div>
                <div class="w-full bg-finance-gold/20 hover:bg-finance-gold transition-colors rounded-t-sm h-[30%]"></div>
                <div class="w-full bg-finance-gold/20 hover:bg-finance-gold transition-colors rounded-t-sm h-[70%]"></div>
              </div>
              
              <div class="flex justify-between mt-4 text-[10px] text-finance-light/50 font-bold uppercase tracking-tighter font-sans">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
              </div>
              
              <p class="mt-6 text-finance-light/60 font-sans text-sm font-light text-center">
                Current volatility index is <span class="text-finance-gold font-bold">Low</span>. High liquidity expected through Friday.
              </p>
            </div>

            <!-- Quarterly Economic Outlook Card -->
            <div class="relative rounded-sm overflow-hidden aspect-[4/5] flex flex-col justify-end p-8 group border border-finance-gold/10">
              <div class="absolute inset-0 z-0">
                <img class="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8G5yshM0-ibKOgI8JV_56ihSKipHNQWqea4MXBYE9NXKA_mEU_kaKIarSHZH1UuBlsivQfv2kPxkqRi6P7euRwOW8m8arCTklQJxPQAQIyQrmhQDVovsl4pvxkrWtnkX-tTSy2-sQTQO6uV-00YTZue5HjhBwkvBajl_1slNLvKUOV3uVqtHBI6shg2WYX_B-lvS_tJQRKuNGhf5Q689faYXxg6RPN66TbV8vAp3QSVM44A9UZ0IxdOpPrYWjU3hIOPBpDqpHJBfE"/>
                <div class="absolute inset-0 bg-gradient-to-t from-finance-black via-finance-black/40 to-transparent"></div>
              </div>
              <div class="relative z-10">
                <h3 class="text-3xl font-bold text-finance-light mb-2">Quarterly Outlook</h3>
                <p class="text-finance-light/80 mb-6 font-light font-sans">The Q1 2024 analysis is now live for elite members.</p>
                <button class="w-full py-4 rounded-sm border border-finance-gold text-finance-gold font-bold uppercase tracking-widest text-sm hover:bg-finance-gold hover:text-finance-black transition-all font-sans">
                  View Full Outlook
                </button>
              </div>
            </div>

            <!-- Newsletter Sign up -->
            <div class="glass-header p-8 rounded-sm border border-finance-gold/10">
              <h3 class="text-xl font-bold text-finance-light mb-2 text-center">Executive Brief</h3>
              <p class="text-finance-light/60 text-sm text-center font-light mb-6 font-sans">Receive curated high-level insights directly to your private inbox every Monday.</p>
              <div class="space-y-3">
                <input class="w-full bg-finance-black border border-finance-gold/20 rounded-sm px-4 py-3 text-finance-light focus:outline-none focus:border-finance-gold transition-all font-sans" placeholder="Professional Email" type="email"/>
                <button class="w-full btn-gold py-3 text-xs tracking-widest">Subscribe Now</button>
              </div>
              <p class="mt-4 text-[10px] text-finance-light/40 text-center uppercase tracking-widest font-sans">Privacy Assured | Institutional Access Only</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>
