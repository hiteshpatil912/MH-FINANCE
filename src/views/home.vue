<template>
    <div class="relative min-h-screen flex flex-col">
        <!-- Header -->
        <main class="flex-grow">
            <!-- Hero Section -->
            <section
                class="max-w-7xl mx-auto px-6 lg:px-20 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <!-- Application Form Side -->
                <div class="lg:col-span-7 flex flex-col gap-8">
                    <div class="space-y-4">
                        <h1 class="text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
                            Bespoke Liquidity.<br />
                            <span class="text-primary">Instant Approval.</span>
                        </h1>
                        <p class="text-slate-400 text-lg max-w-xl font-light leading-relaxed">
                            Secure a premium personal loan up to $100,000 with institutional-grade efficiency and
                            complete discretion.
                        </p>
                    </div>
                    <div class="glass-card p-8 rounded-2xl shadow-2xl flex flex-col gap-6 max-w-lg">
                        <div class="grid grid-cols-4 gap-4">
                            <div class="col-span-1">
                                <label
                                    class="block text-xs uppercase tracking-widest text-slate-500 mb-2 font-bold">Code</label>
                                <input
                                    class="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder="+1" type="text" value="+1" />
                            </div>
                            <div class="col-span-3">
                                <label
                                    class="block text-xs uppercase tracking-widest text-slate-500 mb-2 font-bold">Mobile
                                    Number</label>
                                <input
                                    class="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder="Enter phone number" type="tel" />
                            </div>
                        </div>
                        <button
                            class="w-full bg-primary/10 border border-primary text-primary py-4 rounded-lg font-bold hover:bg-primary hover:text-background-dark transition-all duration-300 uppercase tracking-widest text-sm">
                            Send OTP Verification
                        </button>
                        <div>
                            <label class="block text-xs uppercase tracking-widest text-slate-500 mb-2 font-bold">6-Digit
                                Access Code</label>
                            <input
                                class="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white tracking-[0.5em] text-center text-xl focus:ring-1 focus:ring-primary outline-none transition-all"
                                placeholder="••••••" type="text" />
                        </div>
                        <div class="space-y-4 pt-2">
                            <label class="flex items-start gap-3 cursor-pointer group">
                                <input class="mt-1 rounded border-white/20 bg-white/5 text-primary focus:ring-primary"
                                    type="checkbox" />
                                <span
                                    class="text-xs text-slate-400 leading-snug group-hover:text-slate-200 transition-colors">
                                    I confirm my annual income exceeds $150,000 and I agree to the <a
                                        class="text-primary underline" href="#">Premium Terms of Service</a>.
                                </span>
                            </label>
                            <label class="flex items-start gap-3 cursor-pointer group">
                                <input class="mt-1 rounded border-white/20 bg-white/5 text-primary focus:ring-primary"
                                    type="checkbox" />
                                <span
                                    class="text-xs text-slate-400 leading-snug group-hover:text-slate-200 transition-colors">
                                    Consent to digital verification and private credit assessment.
                                </span>
                            </label>
                        </div>
                        <button
                            class="w-full bg-slate-800 text-slate-500 cursor-not-allowed py-5 rounded-lg font-black uppercase tracking-widest transition-all shadow-lg"
                            disabled="">
                            Complete Application
                        </button>
                    </div>
                </div>
                <!-- Visual Asset Side -->
                <div class="lg:col-span-5 relative hidden lg:block">
                    <div class="absolute inset-0 bg-primary/20 blur-[100px] rounded-full -z-10 opacity-30"></div>
                    <div
                        class="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
                        <img alt="Luxury glass skyscraper with gold sunset reflections"
                            class="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 transition-all duration-700"
                            data-alt="Luxury modern executive office skyscraper at dusk"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf5beHqjNRXf2Wy2NPtrPC7dNEWMAaTqCY-M53i3Vpa8VbeUJve42OW88PQp9eJBeEmsEdwnu1CjPFBopHGdq0MHQnOjryeEzexcegKT26ttnKag1FSlbmJRBCRaL7C1RZhJDFnFGNMfrJmecXM5NChWTOYoWffLOReht-wVFPOMYDv-noOxMcvcCTIRSU7AfhmhslkI046BNLitMH9oh6rMQvUIFO5csik8GeFM41vYWNkNOidBDBD2ZGXwJ0yP7mmEDHSTfE_Tz9" />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent">
                        </div>
                        <div class="absolute bottom-8 left-8 right-8 p-6 glass-card rounded-xl">
                            <p class="text-primary font-bold text-sm uppercase tracking-widest mb-1">Elite Network</p>
                            <p class="text-white text-lg font-light italic">"Precision in lending, excellence in
                                service. We redefine liquidity for the modern professional."</p>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Trust Bar -->
            <section class="border-y border-white/5 bg-white/[0.02]">
                <div class="max-w-7xl mx-auto px-6 lg:px-20 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
                    <div class="flex items-center gap-4">
                        <span class="material-symbols-outlined text-primary text-3xl">trending_down</span>
                        <div>
                            <p class="text-white font-bold text-sm leading-tight">Premium Rates</p>
                            <p class="text-slate-500 text-xs">Starting at 8.5%* p.a.</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 border-l border-white/5 pl-4 lg:pl-8">
                        <span class="material-symbols-outlined text-primary text-3xl">visibility_off</span>
                        <div>
                            <p class="text-white font-bold text-sm leading-tight">Zero Hidden Fees</p>
                            <p class="text-slate-500 text-xs">Full transparency.</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 border-l border-white/5 pl-4 lg:pl-8">
                        <span class="material-symbols-outlined text-primary text-3xl">speed</span>
                        <div>
                            <p class="text-white font-bold text-sm leading-tight">Priority Approval</p>
                            <p class="text-slate-500 text-xs">Within 24 hours.</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 border-l border-white/5 pl-4 lg:pl-8">
                        <span class="material-symbols-outlined text-primary text-3xl">concierge</span>
                        <div>
                            <p class="text-white font-bold text-sm leading-tight">Elite Concierge</p>
                            <p class="text-slate-500 text-xs">Dedicated support.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <!-- Footer removed as App.vue provides it -->
    </div>
</template>

<script setup>
</script>
<style scoped>
.text-primary {
    color: #D4AF37
}

.bg-primary {
    background-color: #D4AF37
}

.glass-card {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(212, 175, 55, 0.2);
}

.gold-gradient {
    background: linear-gradient(135deg, #D4AF37 0%, #F1D57F 50%, #B49026 100%);
}

.text-gold {
    color: #D4AF37;
}

.border-gold {
    border-color: #D4AF37;
}

.bg-gold {
    background-color: #D4AF37;
}
</style>
