<script setup>
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';
import BackToTop from './components/BackToTop.vue';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

const router = useRouter();

// 页面加载时的淡入效果
onMounted(() => {
  document.body.style.opacity = '1';
});
</script>

<template>
  <div class="app">
    <!-- 导航栏 -->
    <Navigation />
    
    <!-- 主内容区 -->
    <main class="main-content">
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>
    
    <!-- 页脚 -->
    <Footer />
    
    <!-- 返回顶部组件 -->
    <BackToTop />
  </div>
</template>

<style>
/* 导入全局样式 */
@import './assets/styles/main.css';

/* 应用级样式 */
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
  color: var(--text-color);
}

.main-content {
  flex: 1;
  padding-top: 80px; /* 为固定导航栏留出空间 */
  width: 100%;
}

/* 初始加载动画 */
body {
  opacity: 0;
  transition: opacity 0.6s ease;
}

/* 平滑滚动 */
html {
  scroll-behavior: smooth;
}

/* 确保页面内容在小屏幕上正确显示 */
@media (max-width: 768px) {
  .main-content {
    padding-top: 70px;
  }
}

@media (max-width: 480px) {
  .main-content {
    padding-top: 60px;
  }
}
</style>
