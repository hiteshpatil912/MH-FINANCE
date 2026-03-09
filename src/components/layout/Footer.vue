<template>
  <footer class="bg-finance-black border-t border-finance-gray/30 pt-16 pb-8">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <!-- Brand -->
        <div>
          <router-link to="/" class="flex flex-col mb-6">
            <span class="font-heading text-2xl font-bold tracking-wider text-finance-gold">MH</span>
            <span class="text-xs tracking-[0.2em] text-finance-light uppercase">Finance</span>
          </router-link>
          <p class="text-sm text-finance-light/70 leading-relaxed max-w-sm">
            Providing independent financial advice and comprehensive wealth management services to protect and grow your capital.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-finance-light font-medium tracking-wider uppercase text-sm mb-6">Services</h4>
          <ul class="space-y-4">
            <li><router-link to="/wealth" class="text-sm text-finance-light/70 hover:text-finance-gold transition-colors">Wealth Management</router-link></li>
            <li><router-link to="/investments" class="text-sm text-finance-light/70 hover:text-finance-gold transition-colors">Investment Solutions</router-link></li>
            <li><router-link to="/advisory" class="text-sm text-finance-light/70 hover:text-finance-gold transition-colors">Corporate Advisory</router-link></li>
            <li><a href="#" class="text-sm text-finance-light/70 hover:text-finance-gold transition-colors">Private Banking</a></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="text-finance-light font-medium tracking-wider uppercase text-sm mb-6">Company</h4>
          <ul class="space-y-4">
            <li><a href="#" class="text-sm text-finance-light/70 hover:text-finance-gold transition-colors">About Us</a></li>
            <li><a href="#" class="text-sm text-finance-light/70 hover:text-finance-gold transition-colors">Our Team</a></li>
            <li><a href="#" class="text-sm text-finance-light/70 hover:text-finance-gold transition-colors">Careers</a></li>
            <li><router-link to="/insights" class="text-sm text-finance-light/70 hover:text-finance-gold transition-colors">Insights & News</router-link></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-finance-light font-medium tracking-wider uppercase text-sm mb-6">Contact</h4>
          <ul class="space-y-4 text-sm text-finance-light/70">
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-finance-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span>123 Financial District, Suite 4500<br>New York, NY 10005</span>
            </li>
            <li class="flex items-center gap-3 mt-4">
              <svg class="w-5 h-5 text-finance-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <span>+1 (555) 123-4567</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-finance-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <span>contact@mhfinance.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-finance-gray/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-xs text-finance-light/50">
          &copy; {{ new Date().getFullYear() }} MH Finance Services. All rights reserved.
        </p>
        <div class="flex gap-6 text-xs text-finance-light/50">
          <a href="#" class="hover:text-finance-gold transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-finance-gold transition-colors">Terms of Service</a>
          <a href="#" class="hover:text-finance-gold transition-colors">Legal Disclaimer</a>
        </div>
      </div>
    </div>
  </footer>
</template>
