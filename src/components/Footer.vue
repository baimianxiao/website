<template>
  <footer class="footer" ref="footerRef">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <h2 class="logo-text">魔法少女の魔女裁判</h2>
          <p class="logo-subtitle">官方模组整合包网站</p>
        </div>
        
        <div class="footer-links">
          <h3 class="section-title">快速链接</h3>
          <ul>
            <li><router-link to="/" class="nav-link">首页</router-link></li>
            <li><router-link to="/characters" class="nav-link">角色</router-link></li>
            <li><router-link to="/story" class="nav-link">故事</router-link></li>
            <li><router-link to="/download" class="nav-link">下载</router-link></li>
            <li><router-link to="/news" class="nav-link">新闻</router-link></li>
          </ul>
        </div>
        
        <div class="footer-support">
          <h3 class="section-title">支持</h3>
          <ul>
            <li><router-link to="/faq" class="nav-link">常见问题</router-link></li>
            <li><a href="#" class="nav-link">联系我们</a></li>
            <li><a href="#" class="nav-link">隐私政策</a></li>
            <li><a href="#" class="nav-link">使用条款</a></li>
          </ul>
        </div>
        
        <div class="footer-newsletter">
          <h3 class="section-title">订阅更新</h3>
          <p class="newsletter-text">获取最新模组更新和活动通知</p>
          <form class="newsletter-form" @submit.prevent="subscribe">
            <input 
              type="email" 
              placeholder="您的邮箱地址" 
              v-model="email" 
              required 
              class="newsletter-input"
            />
            <button type="submit" class="newsletter-button">
              订阅
            </button>
          </form>
        </div>
        
        <div class="footer-social">
          <h3 class="section-title">关注我们</h3>
          <div class="social-icons">
            <a href="#" class="social-icon" aria-label="Twitter"><i class="social-twitter"></i></a>
            <a href="#" class="social-icon" aria-label="Facebook"><i class="social-facebook"></i></a>
            <a href="#" class="social-icon" aria-label="Instagram"><i class="social-instagram"></i></a>
            <a href="#" class="social-icon" aria-label="YouTube"><i class="social-youtube"></i></a>
            <a href="#" class="social-icon" aria-label="Discord"><i class="social-discord"></i></a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p class="copyright">&copy; {{ new Date().getFullYear() }} 魔法少女の魔女裁判官方网站. 保留所有权利.</p>
        <p class="footer-note">本网站仅供模组整合包参考使用，与原游戏版权无关。</p>
      </div>
    </div>
    
    <!-- 订阅成功提示 -->
    <transition name="fade">
      <div v-if="showSuccess" class="success-message">
        订阅成功！感谢您的关注。
      </div>
    </transition>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      email: '',
      showSuccess: false,
      isVisible: false
    }
  },
  mounted() {
    // 添加淡入动画效果
    this.isVisible = true;
    
    // 监听滚动事件，为页脚添加进入视图时的动画
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    subscribe() {
      // 模拟订阅功能
      setTimeout(() => {
        this.showSuccess = true;
        this.email = '';
        
        // 3秒后隐藏成功提示
        setTimeout(() => {
          this.showSuccess = false;
        }, 3000);
      }, 500);
    },
    handleScroll() {
      if (!this.$refs.footerRef) return;
      
      const rect = this.$refs.footerRef.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
      
      if (isInView && !this.isVisible) {
        this.isVisible = true;
      }
    }
  }
}
</script>

<style scoped>
.footer {
  background-color: var(--secondary-color);
  color: var(--text-secondary);
  padding: clamp(2rem, 5vw, 3.5rem) 0 1.25rem;
  border-top: 1px solid var(--border-color);
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
  position: relative;
  overflow: hidden;
}

.footer.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--primary-light), var(--accent-color));
  opacity: 0;
  transform: scaleX(0);
  transform-origin: left;
  transition: opacity 0.6s ease, transform 0.8s ease;
}

.footer.is-visible::before {
  opacity: 1;
  transform: scaleX(1);
}

.footer .container {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
  gap: clamp(1.5rem, 3vw, 2.5rem);
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.footer-logo {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.logo-text {
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: var(--text-color);
  margin: 0;
  background: linear-gradient(90deg, var(--primary-color), var(--primary-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.logo-subtitle {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.5;
}

.section-title {
  font-size: 1.125rem;
  color: var(--text-color);
  margin: 0 0 1rem 0;
  position: relative;
  padding-bottom: 0.5rem;
  font-weight: 600;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 2.5rem;
  height: 2px;
  background-color: var(--primary-color);
  transition: width 0.3s ease;
}

.footer-links:hover .section-title::after,
.footer-support:hover .section-title::after,
.footer-social:hover .section-title::after,
.footer-newsletter:hover .section-title::after {
  width: 4rem;
}

.footer-links ul,
.footer-support ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li,
.footer-support li {
  margin-bottom: 0.75rem;
  position: relative;
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  display: inline-block;
  padding: 0.25rem 0;
  position: relative;
}

.nav-link::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background-color: var(--primary-color);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: var(--primary-color);
  transform: translateX(4px);
}

.nav-link:hover::before {
  width: 100%;
}

/* 订阅区块样式 */
.footer-newsletter {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.newsletter-text {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.5;
}

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;
}

.newsletter-input {
  padding: 0.75rem 1rem;
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  color: var(--text-color);
  font-size: 0.95rem;
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;
}

.newsletter-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(220, 7, 81, 0.1);
  background-color: var(--bg-color);
}

.newsletter-input::placeholder {
  color: var(--text-muted);
}

.newsletter-button {
  padding: 0.75rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: var(--border-radius-md);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.newsletter-button:hover {
  background-color: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(220, 7, 81, 0.3);
}

.newsletter-button:active {
  transform: translateY(0);
}

/* 社交媒体图标 */
.social-icons {
  display: flex;
  gap: 0.9375rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: var(--card-bg);
  color: var(--text-color);
  border-radius: 50%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border: 1px solid transparent;
}

.social-icon::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.social-icon:hover {
  background-color: var(--primary-color);
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 5px 15px rgba(220, 7, 81, 0.3);
  border-color: var(--primary-light);
}

.social-icon:hover::before {
  left: 100%;
}

.social-icon:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

/* Social icon placeholders (in a real site, you would use actual icons or icon libraries) */
.social-icon::before {
  content: '';
  width: 1.25rem;
  height: 1.25rem;
  background-color: currentColor;
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  transition: all 0.3s ease;
}

.social-twitter::before {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'%3E%3C/path%3E%3C/svg%3E");
}

.social-facebook::before {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'%3E%3C/path%3E%3C/svg%3E");
}

.social-instagram::before {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='2' y='2' width='20' height='20' rx='5' ry='5'%3E%3C/rect%3E%3Cpath d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'%3E%3C/path%3E%3Cline x1='17.5' y1='6.5' x2='17.51' y2='6.5'%3E%3C/line%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='2' y='2' width='20' height='20' rx='5' ry='5'%3E%3C/rect%3E%3Cpath d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'%3E%3C/path%3E%3Cline x1='17.5' y1='6.5' x2='17.51' y2='6.5'%3E%3C/line%3E%3C/svg%3E");
}

.social-youtube::before {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z'%3E%3C/path%3E%3Cpolygon points='9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z'%3E%3C/path%3E%3Cpolygon points='9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02'%3E%3C/polygon%3E%3C/svg%3E");
}

.social-discord::before {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20.317 4.3699a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0579a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.0766.0766 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.076.076 0 01-.0066.1277 12.2986 12.2986 0 01-1.873.8914.077.077 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.673-3.5485-13.6603a.061.061 0 00-.0312-.0286zM8.02 15.33c-.8581 0-1.5556-.7652-1.5556-1.7075 0-.9423.6975-1.7075 1.5556-1.7075.857 0 1.5547.7652 1.5547 1.7075 0 .9423-.6976 1.7075-1.5547 1.7075zm7.9748 0c-.858 0-1.5556-.7652-1.5556-1.7075 0-.9423.6975-1.7075 1.5556-1.7075.857 0 1.5547.7652 1.5547 1.7075 0 .9423-.6977 1.7075-1.5547 1.7075z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20.317 4.3699a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0579a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.0766.0766 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.076.076 0 01-.0066.1277 12.2986 12.2986 0 01-1.873.8914.077.077 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.673-3.5485-13.6603a.061.061 0 00-.0312-.0286zM8.02 15.33c-.8581 0-1.5556-.7652-1.5556-1.7075 0-.9423.6975-1.7075 1.5556-1.7075.857 0 1.5547.7652 1.5547 1.7075 0 .9423-.6976 1.7075-1.5547 1.7075zm7.9748 0c-.858 0-1.5556-.7652-1.5556-1.7075 0-.9423.6975-1.7075 1.5556-1.7075.857 0 1.5547.7652 1.5547 1.7075 0 .9423-.6977 1.7075-1.5547 1.7075z'%3E%3C/path%3E%3C/svg%3E");
}

/* 页脚底部样式 */
.footer-bottom {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
  position: relative;
}

.copyright {
  font-size: 0.9rem;
  margin: 0 0 0.5rem 0;
  color: var(--text-secondary);
  line-height: 1.4;
}

.footer-note {
  font-size: 0.8rem;
  opacity: 0.7;
  margin: 0;
  line-height: 1.4;
}

/* 订阅成功消息样式 */
.success-message {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: var(--success-color, #2ecc71);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: var(--border-radius-md);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  font-size: 0.95rem;
  font-weight: 500;
  max-width: 300px;
}

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 1.875rem;
  }
  
  .footer-logo,
  .footer-links,
  .footer-support,
  .footer-social,
  .footer-newsletter {
    text-align: center;
  }
  
  .section-title::after {
    left: 50% !important;
    transform: translateX(-50%) !important;
  }
  
  .social-icons {
    justify-content: center;
  }
  
  .success-message {
    bottom: 1.5rem;
    right: 1.5rem;
    left: 1.5rem;
    max-width: none;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 2rem 0 1rem;
  }
  
  .footer .container {
    padding: 0 var(--spacing-sm);
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .logo-text {
    font-size: 1.75rem;
  }
  
  .copyright,
  .footer-bottom p {
    font-size: 0.8rem;
  }
  
  .newsletter-form {
    width: 100%;
  }
  
  .newsletter-button {
    width: 100%;
  }
  
  .social-icons {
    justify-content: center;
    gap: 0.75rem;
  }
  
  .social-icon {
    width: 2.25rem;
    height: 2.25rem;
  }
}

/* 高对比度模式支持 */
@media (prefers-contrast: high) {
  .footer {
    border-top: 2px solid currentColor;
  }
  
  .footer::before {
    height: 3px;
  }
  
  .nav-link::before {
    height: 2px;
  }
  
  .social-icon {
    border-width: 2px;
  }
}

/* 减少动画模式支持 */
@media (prefers-reduced-motion: reduce) {
  .footer,
  .footer::before,
  .nav-link,
  .nav-link::before,
  .social-icon,
  .social-icon::before,
  .newsletter-button,
  .section-title::after {
    transition: none !important;
    animation: none !important;
  }
  
  .footer {
    opacity: 1 !important;
    transform: none !important;
  }
  
  .footer::before {
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>