<template>
  <div class="wealth-page font-heading">
    <!-- Hero Section -->
    <section class="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-b from-finance-black/60 via-finance-black/40 to-finance-black z-10"></div>
        <img alt="Luxury architecture with golden hour lighting" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCBgxbkOKzfnVbJNv5Cf7GWC6rZ913WAEwmRB2LyoNI-auoWzsS4tBmsFCiQP0WM14nMqC5JQgOcdT0Fz14g-JVX06ku13yBm-SRLzI-U7Pqh3IFrz8Di96KheIZWhiEk8ViKCRSiwFVoACVix4aaz0CZxIwQ88euQcjUBRFhvjIOjrKRDgJXPFYdP2WXmcPTgNWRvk8vsYq4jo6azp0XuazfEZV6vOgCcCD-HtjzCDSgNR-AR7yk9jhemBIzs7NIL-K5go-vzxyYt"/>
      </div>
      <div class="relative z-20 text-center px-4 max-w-4xl pt-20">
        <p class="text-finance-gold tracking-[0.4em] uppercase text-sm mb-4 font-sans">Elite Financial Stewardship</p>
        <h1 class="text-finance-light text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-8">
          Bespoke Wealth Preservation
        </h1>
        <p class="text-finance-light/80 text-lg md:text-xl font-sans font-light leading-relaxed mb-10 max-w-2xl mx-auto">
          Ultra-premium strategies designed for the world's most discerning families and institutional legacies.
        </p>
        <button class="btn-gold px-10 py-4 text-sm tracking-widest uppercase font-sans">
          Inquire Privately
        </button>
      </div>
    </section>

    <!-- Key Metrics -->
    <section class="max-w-[1200px] mx-auto -mt-20 relative z-30 px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-1">
        <div class="glass-header p-10 flex flex-col items-center text-center">
          <p class="text-finance-gold text-sm uppercase tracking-widest mb-2 font-sans">Assets Under Management</p>
          <p class="text-finance-light text-4xl font-bold tracking-tight">$42B+</p>
        </div>
        <div class="glass-header p-10 flex flex-col items-center text-center bg-finance-gold/5">
          <p class="text-finance-gold text-sm uppercase tracking-widest mb-2 font-sans">Global Jurisdictions</p>
          <p class="text-finance-light text-4xl font-bold tracking-tight">12</p>
        </div>
        <div class="glass-header p-10 flex flex-col items-center text-center">
          <p class="text-finance-gold text-sm uppercase tracking-widest mb-2 font-sans">Heritage</p>
          <p class="text-finance-light text-4xl font-bold tracking-tight">85 Years</p>
        </div>
      </div>
    </section>

    <!-- Family Office Services -->
    <section class="max-w-[1200px] mx-auto py-24 px-6">
      <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div class="max-w-xl">
          <h2 class="text-finance-gold tracking-[0.3em] uppercase text-xs mb-4 font-sans">Core Competencies</h2>
          <h3 class="text-finance-light text-4xl font-bold">Family Office Services</h3>
          <div class="h-1 w-20 bg-finance-gold mt-6"></div>
        </div>
        <p class="text-finance-light/60 max-w-md italic font-sans">
          "Preserving capital across generations requires more than just investment; it requires a vision for the future."
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Service Card 1 -->
        <div class="group relative aspect-[4/5] overflow-hidden rounded-sm cursor-pointer">
          <img alt="Estate Planning" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSaFiezI2dw6JYi1KHTcXW__7-z3q-TGwNNK6Rlnk1GZz3yEGdUBCdpNaBVjTyxd_Sw_j8uS_UyOETBBiWjIiRFN5_DennBLz4F6SwsS4vwMuGN4R6Na5QF_CIpMh13VHg8D0TbSA7q3gE0ztO9E7G7K6cqMI7L5EA6ZkWOTKYjI9HXAKGkR8qTtdatPPdPeps83sCJauMuq5TQ2bAHploaDCRUYii2hdNnMuwsS9T8Cfptz-jYoVzRAulXaIDkUHx9CVS8VlgrSY3"/>
          <div class="absolute inset-0 bg-gradient-to-t from-finance-black via-finance-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h4 class="text-finance-gold text-2xl font-bold mb-3">Estate Planning</h4>
            <p class="text-finance-light/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-sans">
              Sophisticated structures for cross-border wealth transfer and legal protection.
            </p>
          </div>
        </div>

        <!-- Service Card 2 -->
        <div class="group relative aspect-[4/5] overflow-hidden rounded-sm cursor-pointer">
          <img alt="Philanthropic Advisory" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsCAQbNogkTvEN1HQM3h-mAdkXu_jmCNiUvdd_Q4lnrI9nXvOfNb6CE9eyutUDuV8CpPbBrXU4IdkNwrn9HjtqgxUA6ZgLJBwIFC8uNuaAwBsPcTg7iJQ4pjmW_zGAUM6aFdxnC2saDQAK5-FnQ2sR76mPXIY9Kjn-5pcEWydhF05zgPpIUTgOZXfuASG3GlKF50Eifu6v2_8nb7x8HJZSkey4_65PncxM7P31RV7VLyfIzlDR51tx8pCwi_mgS8fFZQWeiXIdlHd8"/>
          <div class="absolute inset-0 bg-gradient-to-t from-finance-black via-finance-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h4 class="text-finance-gold text-2xl font-bold mb-3">Philanthropic Advisory</h4>
            <p class="text-finance-light/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-sans">
              Impact-driven strategies for charitable giving and foundation management.
            </p>
          </div>
        </div>

        <!-- Service Card 3 -->
        <div class="group relative aspect-[4/5] overflow-hidden rounded-sm cursor-pointer">
          <img alt="Tax Optimization" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJlF4XrbjUULG6cbi0L-Ll4smIicYD1oGinytPE1WZfL2Im7y9mhXaqwqj8qtPEtXdPXpe726Cq6zFXZOmGkoqqjPu9b4JW1HPF5S1kjXunT2mO5FTfYBZm8ezfyuD_BzD-58GeKKpAHQoxBcKNdcBQqlbH5NUH97hxAr28qpCN2v1q6d18JLBhZc3DRERWgQNZGr2QBhS9NXkmJALI04-oU5hQxLYnqd94goB9SNJNfu9Ewzu7NQJNoAlYUBL5bBb9AwfszTLAhfT"/>
          <div class="absolute inset-0 bg-gradient-to-t from-finance-black via-finance-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h4 class="text-finance-gold text-2xl font-bold mb-3">Tax Optimization</h4>
            <p class="text-finance-light/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-sans">
              Strategic fiscal planning to minimize liabilities and enhance net performance.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="bg-finance-dark py-24 border-y border-finance-gray/30">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-finance-gold tracking-[0.3em] uppercase text-xs mb-4 font-sans">The MH Advantage</h2>
          <h3 class="text-finance-light text-4xl font-bold">Exclusive Management Features</h3>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="flex flex-col gap-4 text-center items-center group">
            <div class="w-16 h-16 rounded-full border border-finance-gold/30 flex items-center justify-center text-finance-gold group-hover:bg-finance-gold group-hover:text-finance-black transition-colors duration-300">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            </div>
            <h4 class="text-finance-light text-xl font-bold mt-2">Personalized Portfolios</h4>
            <p class="text-finance-light/60 font-sans leading-relaxed text-sm">Tailored asset allocation strategies that align with your risk profile and long-term liquidity needs.</p>
          </div>
          
          <div class="flex flex-col gap-4 text-center items-center group">
            <div class="w-16 h-16 rounded-full border border-finance-gold/30 flex items-center justify-center text-finance-gold group-hover:bg-finance-gold group-hover:text-finance-black transition-colors duration-300">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            </div>
            <h4 class="text-finance-light text-xl font-bold mt-2">Legacy Management</h4>
            <p class="text-finance-light/60 font-sans leading-relaxed text-sm">Comprehensive governance frameworks to ensure your family values endure for centuries.</p>
          </div>
          
          <div class="flex flex-col gap-4 text-center items-center group">
            <div class="w-16 h-16 rounded-full border border-finance-gold/30 flex items-center justify-center text-finance-gold group-hover:bg-finance-gold group-hover:text-finance-black transition-colors duration-300">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <h4 class="text-finance-light text-xl font-bold mt-2">Concierge Stewardship</h4>
            <p class="text-finance-light/60 font-sans leading-relaxed text-sm">Private dedicated advisors available 24/7 for white-glove financial and administrative support.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 px-6 text-center">
      <div class="max-w-3xl mx-auto border border-finance-gold/30 p-16 relative overflow-hidden bg-finance-dark/50">
        <div class="absolute top-0 right-0 w-32 h-32 border-t border-r border-finance-gold/50"></div>
        <div class="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-finance-gold/50"></div>
        
        <h2 class="text-finance-light text-3xl font-bold mb-6">Begin Your Legacy Journey</h2>
        <p class="text-finance-light/70 mb-10 text-lg font-sans">
          Membership is by invitation or private inquiry only. Contact our senior partners to schedule a discreet consultation.
        </p>
        
        <div class="flex flex-col sm:flex-row justify-center gap-6">
          <button class="btn-gold px-10 py-4 font-sans tracking-widest uppercase text-sm">
            Request Invitation
          </button>
          <button class="btn-outline px-10 py-4 font-sans tracking-widest uppercase text-sm">
            View Global Offices
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>
