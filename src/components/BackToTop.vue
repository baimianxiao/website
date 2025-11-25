<template>
  <button 
    class="back-to-top" 
    :class="{ visible: isVisible, animate: isVisible }"
    @click="scrollToTop"
    aria-label="返回顶部"
    tabindex="0"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 14l5-5 5 5z"/>
    </svg>
  </button>
</template>

<script>
export default {
  name: 'BackToTop',
  data() {
    return {
      isVisible: false,
      scrollPosition: 0
    }
  },
  mounted() {
    // 添加滚动事件监听
    window.addEventListener('scroll', this.handleScroll)
    // 初始检查
    this.checkVisibility()
  },
  beforeUnmount() {
    // 移除事件监听，避免内存泄漏
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY
      this.checkVisibility()
    },
    checkVisibility() {
      // 当滚动超过500px时显示按钮
      this.isVisible = this.scrollPosition > 500
    },
    scrollToTop() {
      // 使用平滑滚动到顶部
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      
      // 添加按钮点击反馈
      this.$nextTick(() => {
        this.isVisible = false
      })
    }
  }
}
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.back-to-top.visible {
  opacity: 1;
  transform: translateY(0);
}

.back-to-top:hover {
  background-color: var(--primary-dark);
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
}

.back-to-top:active {
  transform: translateY(-2px) scale(1.05);
}

.back-to-top:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(220, 7, 81, 0.3), 0 4px 10px rgba(0, 0, 0, 0.3);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .back-to-top {
    bottom: 20px;
    right: 20px;
    width: 45px;
    height: 45px;
  }
}

@media (max-width: 480px) {
  .back-to-top {
    bottom: 15px;
    right: 15px;
    width: 40px;
    height: 40px;
  }
}

/* 减少动画模式支持 */
@media (prefers-reduced-motion: reduce) {
  .back-to-top {
    transition: none;
    opacity: 1;
    transform: none;
  }
  
  .back-to-top:hover,
  .back-to-top:active {
    transform: none;
  }
}

/* 高对比度模式支持 */
@media (prefers-contrast: high) {
  .back-to-top {
    border: 2px solid white;
    box-shadow: 0 0 0 2px var(--primary-color);
  }
  
  .back-to-top:focus {
    box-shadow: 0 0 0 4px black, 0 0 0 6px var(--primary-color);
  }
}

/* 触摸设备优化 */
@media (hover: none) and (pointer: coarse) {
  .back-to-top:hover {
    transform: none;
  }
}
</style>
