<template>
  <div class="home">
    <!-- Hero Section -->
    <section id="hero" class="hero" ref="heroSection" :class="{ animate: isVisible.hero }">
      <div class="hero-content" :class="{ animate: isVisible.hero }">
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
      <div class="hero-bg"></div>
      <div class="hero-particles"></div>
    </section>

    <!-- Game Introduction Section -->
    <section id="introduction" class="introduction" :class="{ animate: isVisible.introduction }">
      <div class="container">
        <h2 class="section-title">游戏介绍</h2>
        <div class="intro-content" :class="{ animate: isVisible.introduction }">
          <div class="intro-text">
            <p>
              《魔法少女的魔女审判》（日语：魔法少女ノ魔女裁判）是一款基于Minecraft的模组整合包，
              灵感来源于同名推理文字冒险游戏。本整合包将原作的世界观、角色和剧情元素融入到Minecraft世界中，
              为玩家带来全新的游戏体验。
            </p>
            <p>
              玩家将扮演13位魔法少女之一，被困在与世隔绝的孤岛上。随着故事的发展，
              你需要与其他少女互动，收集线索，解开谜题，并在关键时刻做出选择，
              最终找出隐藏在你们之中的魔女。
            </p>
          </div>
          <div class="intro-features">
            <div class="feature-item">
              <div class="feature-icon"><i class="feature-icon-1"></i></div>
              <h3>沉浸式剧情</h3>
              <p>完整还原原作剧情，带来沉浸式的游戏体验</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon"><i class="feature-icon-2"></i></div>
              <h3>角色定制</h3>
              <p>13位魔法少女，每位都有独特的技能和背景故事</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon"><i class="feature-icon-3"></i></div>
              <h3>解谜探索</h3>
              <p>丰富的谜题和探索要素，考验你的推理能力</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon"><i class="feature-icon-4"></i></div>
              <h3>多人模式</h3>
              <p>支持13人同时游戏，体验真正的社交推理</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Latest News Section -->
    <section id="news" class="latest-news" :class="{ animate: isVisible.news }">
      <div class="container">
        <h2 class="section-title">最新动态</h2>
        <div class="news-grid" :class="{ animate: isVisible.news }">
          <div v-for="news in latestNews" :key="news.id" class="news-card card">
            <div class="news-date">{{ news.date }}</div>
            <h3 class="news-title">{{ news.title }}</h3>
            <p class="news-excerpt">{{ news.excerpt }}</p>
            <router-link to="/news" class="news-link">阅读更多</router-link>
          </div>
        </div>
        <div class="section-link">
          <router-link to="/news" class="btn btn-outline">查看全部新闻</router-link>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section id="cta" class="cta" :class="{ animate: isVisible.cta }">
      <div class="container">
        <div class="cta-content" :class="{ animate: isVisible.cta }">
          <h2>准备好了吗？</h2>
          <p>加入魔法少女们的审判之旅，找出隐藏的魔女！</p>
          <router-link to="/download" class="btn">立即下载整合包</router-link>
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

      latestNews: [
        {
          id: 1,
          date: '2025-07-18',
          title: '模组整合包正式发布！',
          excerpt: '经过数月的开发，《魔法少女的魔女审判》MC模组整合包正式发布！'
        },
        {
          id: 2,
          date: '2025-07-01',
          title: '最终测试版本上线',
          excerpt: '最终测试版本现已开放下载，请玩家们积极反馈问题。'
        },
        {
          id: 3,
          date: '2025-06-15',
          title: '模组整合包内容预览',
          excerpt: '详细介绍整合包中的主要模组和特色功能。'
        }
      ],
      isVisible: {
        hero: false,
        introduction: false,
        news: false,
        cta: false
      }
    }
  },
  mounted() {
    // 添加滚动检测以触发动画
    this.setupScrollAnimations();
  },
  methods: {
    setupScrollAnimations() {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      };

      const observerCallback = (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            this.isVisible[sectionId] = true;
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);
      
      // 观察所有主要区块
      document.querySelectorAll('section[id]').forEach(section => {
        observer.observe(section);
      });
      
      // 初始触发英雄区块动画
      setTimeout(() => {
        this.isVisible.hero = true;
      }, 100);
    }
  }
}
</script>

<style scoped>
/* Hero Section */
.hero {
  position: relative;
  min-height: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  padding: 60px 0;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), 
              url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Cpath d="M50 50c5 5 10 10 15 15M35 65c5-5 10-10 15-15" stroke="%23dc0751" stroke-width="1" fill="none"/%3E%3C/svg%3E');
  background-size: cover;
  background-position: center;
  z-index: -1;
}

.hero-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle, rgba(220, 7, 81, 0.3) 1px, transparent 1px);
  background-size: 40px 40px;
  z-index: -1;
  animation: particleFloat 20s ease-in-out infinite;
}

@keyframes particleFloat {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
}

.hero-content {
  max-width: 800px;
  padding: 0 20px;
  z-index: 1;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.hero-content.animate {
  opacity: 1;
  transform: translateY(0);
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 4rem);
  margin-bottom: 1rem;
  color: var(--text-color);
  text-transform: uppercase;
  letter-spacing: 2px;
  background: linear-gradient(90deg, var(--primary-color), var(--primary-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: clamp(1rem, 3vw, 1.5rem);
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
  font-weight: 300;
}

.hero-description {
  font-size: clamp(1rem, 2vw, 1.2rem);
  margin-bottom: 2rem;
  color: var(--text-color);
  line-height: 1.8;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  --btn-padding: 12px 24px;
  --btn-font-size: 1rem;
  --btn-border-radius: 4px;
  --btn-transition: all 0.3s ease;
  
  padding: var(--btn-padding);
  font-size: var(--btn-font-size);
  font-weight: 500;
  border-radius: var(--btn-border-radius);
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: var(--btn-transition);
  text-align: center;
  min-width: 140px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  background-color: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.btn-outline {
  background-color: transparent;
  color: var(--text-color);
  border: 2px solid var(--text-color);
}

.btn-outline:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

/* 减少动画模式支持 */
@media (prefers-reduced-motion: reduce) {
  .hero-content,
  .btn {
    transition: none;
  }
  
  .hero-content.animate {
    opacity: 1;
    transform: none;
  }
}

/* Introduction Section */
.introduction {
  padding: 100px 0;
  background-color: var(--background-color);
  position: relative;
}

.intro-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.intro-content.animate {
  opacity: 1;
  transform: translateY(0);
}

.intro-text p {
  margin-bottom: 1.5rem;
  font-size: clamp(1rem, 2vw, 1.1rem);
  line-height: 1.8;
  color: var(--text-color);
}

.intro-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.feature-item {
  background-color: var(--card-bg);
  padding: 25px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--primary-light));
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  border-color: var(--primary-color);
}

.feature-item:hover::before {
  transform: scaleX(1);
}

/* 减少动画模式支持 */
@media (prefers-reduced-motion: reduce) {
  .intro-content {
    transition: none;
  }
  
  .intro-content.animate {
    opacity: 1;
    transform: none;
  }
}

.feature-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 15px;
  background-color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-icon i {
  width: 30px;
  height: 30px;
  background-color: white;
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
}

.feature-icon-1 {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20h9'%3E%3C/path%3E%3Cpath d='M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20h9'%3E%3C/path%3E%3Cpath d='M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z'%3E%3C/path%3E%3C/svg%3E");
}

.feature-icon-2 {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E");
}

.feature-icon-3 {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'%3E%3C/polygon%3E%3C/svg%3E");
}

.feature-icon-4 {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='9' cy='7' r='4'%3E%3C/circle%3E%3Cpath d='M23 21v-2a4 4 0 0 0-3-3.87'%3E%3C/path%3E%3Cpath d='M16 3.13a4 4 0 0 1 0 7.75'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='9' cy='7' r='4'%3E%3C/circle%3E%3Cpath d='M23 21v-2a4 4 0 0 0-3-3.87'%3E%3C/path%3E%3Cpath d='M16 3.13a4 4 0 0 1 0 7.75'%3E%3C/path%3E%3C/svg%3E");
}

.feature-item h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: var(--text-color);
}

.feature-item p {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.5;
}



/* Latest News Section */
.latest-news {
  padding: 100px 0;
  background-color: var(--background-color);
  position: relative;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.news-grid.animate {
  opacity: 1;
  transform: translateY(0);
}

.news-card {
  padding: 30px;
  background-color: var(--card-bg);
  border-radius: 12px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.news-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background-color: var(--primary-color);
  transform: scaleY(0);
  transition: transform 0.3s ease;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  border-color: var(--primary-color);
}

.news-card:hover::before {
  transform: scaleY(1);
}

.news-date {
  font-size: 0.9rem;
  color: var(--primary-color);
  margin-bottom: 10px;
  font-weight: 500;
  display: inline-block;
  padding: 4px 12px;
  background-color: rgba(220, 7, 81, 0.1);
  border-radius: 20px;
}

.news-title {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: var(--text-color);
  line-height: 1.4;
  transition: color 0.3s ease;
}

.news-card:hover .news-title {
  color: var(--primary-color);
}

.news-excerpt {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
}

.news-link {
  display: inline-block;
  color: var(--primary-color);
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

.news-link:hover {
  transform: translateX(5px);
}

.news-link::after {
  content: ' →';
}

.news-link::before {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--primary-color);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.news-link:hover::before {
  transform: scaleX(1);
}

/* 减少动画模式支持 */
@media (prefers-reduced-motion: reduce) {
  .news-grid {
    transition: none;
  }
  
  .news-grid.animate {
    opacity: 1;
    transform: none;
  }
  
  .news-card,
  .news-title,
  .news-link {
    transition: none;
  }
}

/* Section Link */
.section-link {
  text-align: center;
  margin-top: 40px;
}

/* Call to Action Section */
.cta {
  padding: 100px 0;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
  z-index: 0;
  animation: ctaParticleFloat 15s ease-in-out infinite;
}

@keyframes ctaParticleFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.cta-content.animate {
  opacity: 1;
  transform: translateY(0);
}

.cta h2 {
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  margin-bottom: 20px;
  color: var(--text-color);
  line-height: 1.2;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.cta p {
  font-size: clamp(1rem, 2vw, 1.2rem);
  margin-bottom: 30px;
  color: var(--text-secondary);
}

/* 减少动画模式支持 */
@media (prefers-reduced-motion: reduce) {
  .cta-content {
    transition: none;
  }
  
  .cta-content.animate {
    opacity: 1;
    transform: none;
  }
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .hero {
    height: auto;
    min-height: 100vh;
  }
  
  .intro-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

@media (max-width: 992px) {
  .hero-title {
    font-size: 3rem;
  }
  

  
  .news-grid {
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 80px 0 60px;
    min-height: auto;
    height: auto;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 300px;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .introduction,
  .characters-preview,
  .latest-news,
  .cta {
    padding: 80px 0;
  }
  
  .characters-grid {
    grid-template-columns: 1fr;
  }
  
  .character-card {
    max-width: 320px;
    margin: 0 auto;
  }
  
  .feature-item {
    padding: 20px;
  }
  
  .news-card {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 60px 0 40px;
  }
  
  .hero-content {
    padding: 0 15px;
  }
  
  .introduction,
  .characters-preview,
  .latest-news,
  .cta {
    padding: 60px 0;
  }
  
  .container {
    padding: 0 15px;
  }
  
  .intro-features {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .news-grid {
    grid-template-columns: 1fr;
  }
  
  .section-link {
    margin-top: 30px;
  }
  
  /* 高对比度模式支持 */
  @media (prefers-contrast: high) {
    .hero-title,
    .cta h2 {
      text-shadow: none;
    }
    
    .feature-item,
    .character-card,
    .news-card {
      border-width: 2px;
    }
  }
}

/* 移动设备触摸优化 */
@media (hover: none) and (pointer: coarse) {
  .feature-item:hover,
  .character-card:hover,
  .news-card:hover {
    transform: none;
  }
  
  .btn:hover {
    transform: none;
  }
  
  .news-link:hover {
    transform: none;
  }
}
</style>