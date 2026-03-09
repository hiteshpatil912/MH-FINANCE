<template>
  <header 
    class="fixed top-0 w-full z-50 transition-all duration-300"
    :class="[isScrolled ? 'glass-header py-4' : 'bg-transparent py-6']"
  >
    <div class="container mx-auto px-6 flex justify-between items-center">
      <!-- Logo -->
      <router-link to="/" class="flex flex-col">
        <span class="font-heading text-2xl font-bold tracking-wider text-finance-gold">MH</span>
        <span class="text-xs tracking-[0.2em] text-finance-light uppercase">Finance</span>
      </router-link>

      <!-- Desktop Nav -->
      <nav class="hidden lg:flex items-center gap-8">
        <router-link to="/wealth" class="nav-link">Wealth</router-link>
        <router-link to="/investments" class="nav-link">Investments</router-link>
        <router-link to="/advisory" class="nav-link">Advisory</router-link>
        <router-link to="/insights" class="nav-link">Insights</router-link>
        <router-link to="/careear" class="nav-link">Careers</router-link>
        <router-link to="/blog" class="nav-link">Blog</router-link>
        <router-link to="/about" class="nav-link">About Us</router-link>
        <!-- <a href="#" class="nav-link">Careers</a> -->
        <!-- <a href="#" class="nav-link">Blog</a> -->
        <!-- <a href="#" class="nav-link">About Us</a> -->
      </nav>

      <!-- CTA & Mobile Toggle -->
      <div class="flex items-center gap-4">
        <a href="#" class="hidden md:inline-block btn-outline py-2 border-finance-gold/50 text-finance-gold/90 hover:border-finance-gold">
          Client Login
        </a>
        <a href="#" class="btn-gold hidden sm:inline-block">Contact</a>
        
        <!-- Mobile Menu Button -->
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="lg:hidden text-finance-light focus:outline-none"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Nav Overlay -->
    <transition name="slide">
      <div v-if="isMobileMenuOpen" class="lg:hidden absolute top-full left-0 w-full bg-finance-black/95 backdrop-blur-xl border-b border-finance-gray/30 shadow-2xl overflow-hidden">
        <nav class="flex flex-col py-6 px-8 gap-4">
          <router-link @click="closeMenu" to="/wealth" class="text-lg py-2 border-b border-finance-gray/20 text-finance-light hover:text-finance-gold transition-colors">Wealth</router-link>
          <router-link @click="closeMenu" to="/investments" class="text-lg py-2 border-b border-finance-gray/20 text-finance-light hover:text-finance-gold transition-colors">Investments</router-link>
          <router-link @click="closeMenu" to="/advisory" class="text-lg py-2 border-b border-finance-gray/20 text-finance-light hover:text-finance-gold transition-colors">Advisory</router-link>
          <router-link @click="closeMenu" to="/insights" class="text-lg py-2 border-b border-finance-gray/20 text-finance-light hover:text-finance-gold transition-colors">Insights</router-link>
          <router-link @click="closeMenu" to="/careear" class="text-lg py-2 border-b border-finance-gray/20 text-finance-light hover:text-finance-gold transition-colors">Careers</router-link>
          <router-link @click="closeMenu" to="/blog" class="text-lg py-2 border-b border-finance-gray/20 text-finance-light hover:text-finance-gold transition-colors">Blog</router-link>
          <router-link @click="closeMenu" to="/about" class="text-lg py-2 border-b border-finance-gray/20 text-finance-light hover:text-finance-gold transition-colors">About Us</router-link>
          <!-- <a @click="closeMenu" href="#" class="text-lg py-2 border-b border-finance-gray/20 text-finance-light hover:text-finance-gold transition-colors">Careers</a> -->
          <!-- <a @click="closeMenu" href="#" class="text-lg py-2 border-b border-finance-gray/20 text-finance-light hover:text-finance-gold transition-colors">Blog</a> -->
          <!-- <a @click="closeMenu" href="#" class="text-lg py-2 border-b border-finance-gray/20 text-finance-light hover:text-finance-gold transition-colors">About Us</a> -->
          <div class="flex flex-col gap-3 mt-4">
            <a href="#" class="btn-outline text-center w-full">Client Login</a>
            <a href="#" class="btn-gold text-center w-full">Contact</a>
          </div>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const closeMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-out;
  max-height: 500px;
  opacity: 1;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
}

/* Base styles for router active links */
.router-link-active.nav-link {
  color: theme('colors.finance.gold');
}
.router-link-active.nav-link::after {
  width: 100%;
}
</style>
