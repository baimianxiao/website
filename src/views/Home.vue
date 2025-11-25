<template>
  <div class="home fullscreen-page">
    <!-- Hero Section - 直接将背景应用到hero-content -->
    <section id="hero" class="hero">
      <div 
        class="hero-content"
        :style="{ backgroundImage: `url(${images[currentIndex]})` }"
      >
        <div class="content-overlay">
          <h1 class="hero-title">魔法少女の魔女裁判</h1>
          <p class="hero-subtitle">MC模组整合包官方网站</p>
          <p class="hero-description">
            "我们之中混入了一位魔女。"13位少女被困于孤岛，展开一场残忍的死亡游戏。
          </p>
          <div class="hero-buttons">
            <router-link to="/download" class="btn btn-primary">立即下载</router-link>
            <router-link to="/story" class="btn btn-outline">了解更多</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      // 图片路径数组 - 使用characters目录下的实际图片
      images: [
        '/src/assets/images/background/1.jpg',
        '/src/assets/images/background/2.jpg',
        '/src/assets/images/background/3.jpg',
        '/src/assets/images/background/4.png'
      ],
      currentIndex: 0,
      interval: null
    }
  },
  mounted() {
    // 启动轮播
    this.startCarousel();
    // 防止页面滚动
    this.preventScroll();
  },
  beforeUnmount() {
    // 清理轮播定时器
    if (this.interval) {
      clearInterval(this.interval);
    }
    // 恢复页面滚动
    this.allowScroll();
  },
  methods: {
    startCarousel() {
      // 每5秒切换一次图片
      this.interval = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 5000);
    },
    preventScroll() {
      // 防止页面滚动
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    },
    allowScroll() {
      // 恢复页面滚动
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
  }
}
</script>

<style scoped>
/* 全屏页面样式 */
.fullscreen-page {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

/* 轮播效果已整合到hero-content */

/* Hero Section */
.hero {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
}

.hero-content {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: background-image 1s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.content-overlay {
  max-width: 800px;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  animation: fadeIn 1s ease-in-out;
  padding: 20px;
  z-index: 1;
}

.hero-title {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #f8f9fa;
}

.hero-description {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.875rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background-color: #dc0751;
  color: white;
}

.btn-primary:hover {
  background-color: #b50642;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.btn-outline {
  background-color: transparent;
  color: white;
  border: 2px solid white;
}

.btn-outline:hover {
  background-color: white;
  color: #dc0751;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

/* 动画 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 250px;
  }
}
</style>