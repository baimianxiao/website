<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="logo">
          <span class="logo-text">魔法少女の魔女裁判</span>
        </router-link>
      </div>
      
      <!-- Desktop Navigation -->
      <div class="navbar-nav">
        <router-link to="/" class="nav-link" active-class="active">首页</router-link>
        <router-link to="/characters" class="nav-link" active-class="active">角色</router-link>
        <router-link to="/download" class="nav-link" active-class="active">下载</router-link>
        <router-link to="/news" class="nav-link" active-class="active">更新日志</router-link>
      </div>
      
      <!-- Mobile Navigation Toggle -->
      <button class="mobile-menu-toggle" @click="toggleMobileMenu" :class="{ 'active': isMobileMenuOpen }" aria-label="菜单开关">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </div>
    
    <!-- Mobile Navigation Menu with Transition -->
      <transition name="slide">
        <div class="mobile-menu" v-if="isMobileMenuOpen">
          <router-link to="/" class="mobile-nav-link" @click="closeMobileMenu" active-class="active">首页</router-link>
          <router-link to="/characters" class="mobile-nav-link" @click="closeMobileMenu" active-class="active">角色</router-link>
          <router-link to="/download" class="mobile-nav-link" @click="closeMobileMenu" active-class="active">下载</router-link>
          <router-link to="/news" class="mobile-nav-link" @click="closeMobileMenu" active-class="active">更新日志</router-link>
        </div>
      </transition>
    
    <!-- Backdrop for mobile menu -->
    <transition name="fade">
      <div class="backdrop" v-if="isMobileMenuOpen" @click="closeMobileMenu"></div>
    </transition>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      isMobileMenuOpen: false,
      isScrolled: false,
      lastScrollTop: 0
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
      this.updateBodyScroll()
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
      this.updateBodyScroll()
    },
    updateBodyScroll() {
      // Add or remove body overflow hidden when mobile menu is open
      document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : 'auto'
    },
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      
      // Detect if scrolled more than 50px
      this.isScrolled = scrollTop > 50
      
      // Record last scroll position
      this.lastScrollTop = scrollTop
    },
    handleResize() {
      // Automatically close mobile menu on large screens
      if (window.innerWidth > 768 && this.isMobileMenuOpen) {
        this.closeMobileMenu()
      }
    }
  },
  mounted() {
    // Listen for scroll and resize events
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    // Clean up event listeners
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style scoped>
.navbar {
  background-color: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: all var(--transition-normal) cubic-bezier(0.4, 0, 0.2, 1);
}

/* Scrolled state styles */
.navbar.scrolled {
  background-color: rgba(26, 26, 26, 0.98);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.4);
  padding: 10px 0;
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px var(--spacing-lg);
  transition: all var(--transition-normal) ease;
}

.navbar-brand .logo {
  display: flex;
  align-items: center;
  transition: all var(--transition-normal) ease;
}

.logo-text {
  font-size: var(--font-xl);
  font-weight: bold;
  color: var(--text-color);
  text-transform: uppercase;
  letter-spacing: 2px;
  background: linear-gradient(90deg, var(--primary-color), var(--primary-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all var(--transition-normal) ease;
}

/* Scrolled state for logo */
.navbar.scrolled .logo-text {
  font-size: var(--font-lg);
  letter-spacing: 1px;
}

.navbar-nav {
  display: flex;
  gap: var(--spacing-lg);
}

.nav-link {
  color: var(--text-color);
  font-weight: 500;
  padding: 8px 12px;
  border-radius: var(--radius-sm);
  position: relative;
  transition: all var(--transition-normal) cubic-bezier(0.4, 0, 0.2, 1);
  font-size: var(--font-base);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transition: width var(--transition-normal) cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 1px;
}

.nav-link:hover {
  color: var(--primary-color);
  transform: translateY(-2px);
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link.active {
  color: var(--primary-color);
}

.nav-link.active::after {
  width: 100%;
}

/* Mobile Menu Toggle */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: transform var(--transition-normal) ease;
  z-index: 1001;
}

.mobile-menu-toggle:hover {
  transform: scale(1.05);
}

.bar {
  width: 100%;
  height: 3px;
  background-color: var(--text-color);
  border-radius: 3px;
  transition: all var(--transition-normal) cubic-bezier(0.4, 0, 0.2, 1);
}

/* Mobile menu toggle active state */
.mobile-menu-toggle.active .bar:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
  background-color: var(--primary-color);
}

.mobile-menu-toggle.active .bar:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active .bar:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
  background-color: var(--primary-color);
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  max-width: 320px;
  height: 100vh;
  background-color: var(--card-bg);
  border-left: 1px solid var(--border-color);
  box-shadow: -5px 0 25px var(--shadow-dark);
  z-index: 999;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  backdrop-filter: blur(12px);
}

.mobile-nav-link {
  display: block;
  padding: var(--spacing-lg) var(--spacing-xl);
  color: var(--text-color);
  font-size: var(--font-lg);
  font-weight: 500;
  border-bottom: 1px solid var(--border-color);
  transition: all var(--transition-fast) ease;
  position: relative;
  overflow: hidden;
}

.mobile-nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background-color: var(--primary-color);
  transform: translateX(-100%);
  transition: transform var(--transition-normal) ease;
}

.mobile-nav-link:hover {
  background-color: var(--card-hover);
  padding-left: calc(var(--spacing-xl) + 4px);
  color: var(--primary-color);
}

.mobile-nav-link:hover::before {
  transform: translateX(0);
}

.mobile-nav-link.active {
  color: var(--primary-color);
  background-color: var(--card-hover);
  padding-left: calc(var(--spacing-xl) + 4px);
}

.mobile-nav-link.active::before {
  transform: translateX(0);
}

/* Backdrop for mobile menu */
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(2px);
  z-index: 998;
}

/* Transition animations */
.slide-enter-active,
.slide-leave-active {
  transition: transform var(--transition-normal) cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--transition-normal) ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive Styles */
@media (max-width: 992px) {
  .navbar-nav {
    gap: var(--spacing-md);
  }
  
  .logo-text {
    font-size: var(--font-lg);
  }
}

@media (max-width: 768px) {
  .navbar-nav {
    display: none;
  }
  
  .mobile-menu-toggle {
    display: flex;
  }
  
  .logo-text {
    font-size: var(--font-lg);
    letter-spacing: 1px;
  }
  
  .navbar .container {
    padding: 12px var(--spacing-md);
  }
}

@media (max-width: 480px) {
  .navbar .container {
    padding: 12px var(--spacing-sm);
  }
  
  .logo-text {
    font-size: var(--font-base);
    letter-spacing: 0.5px;
  }
  
  .mobile-menu {
    width: 90%;
    max-width: none;
    padding-top: 80px;
  }
  
  .mobile-nav-link {
    font-size: var(--font-base);
    padding: var(--spacing-md) var(--spacing-lg);
  }
  
  /* Optimize for touch interfaces */
  .nav-link,
  .mobile-nav-link {
    padding: 12px 16px;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .navbar {
    border-bottom: 2px solid var(--primary-color);
  }
  
  .nav-link::after {
    height: 3px;
  }
}

/* Reduce motion support */
@media (prefers-reduced-motion: reduce) {
  .navbar,
  .nav-link,
  .logo-text,
  .bar {
    transition: none !important;
  }
}

/* Touch optimization */
@media (hover: none) and (pointer: coarse) {
  .nav-link:hover {
    transform: none;
  }
  
  .mobile-menu-toggle:hover {
    transform: none;
  }
}
</style>