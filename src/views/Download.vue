<template>
  <div class="download">
    <!-- Download Hero Section -->
    <section class="download-hero">
      <div class="container">
        <div class="hero-content">
          <h1>开始你的魔法之旅</h1>
          <p>下载并安装《魔法少女的魔女审判》MC模组整合包，体验这个充满悬疑和推理的世界</p>
          <div class="download-buttons">
            <button class="primary-btn" @click="downloadModpack">立即下载</button>
          </div>
          <div class="version-info">
            <span>当前版本：v1.0.0</span>
            <span>更新日期：2025-07-18</span>
            <span>文件大小：2.5GB</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Download Modal -->
    <div v-if="showDownloadModal" class="download-modal" @click="closeDownloadModal">
      <div class="download-modal-content" @click.stop>
        <div class="download-modal-header">
          <h3>选择下载源</h3>
          <button class="download-modal-close" @click="closeDownloadModal">×</button>
        </div>
        <div class="download-modal-body">
          <p class="download-modal-text">请选择一个下载源开始下载《魔法少女的魔女审判》MC模组整合包：</p>
          <div class="download-sources">
            <button class="download-source-btn" @click="startDownload('official')">
              <div class="download-source-icon">
                <i class="icon-official"></i>
              </div>
              <div class="download-source-info">
                <div class="download-source-name">官方服务器</div>
                <div class="download-source-desc">推荐，稳定可靠</div>
              </div>
            </button>
            <button class="download-source-btn" @click="startDownload('mirror1')">
              <div class="download-source-icon">
                <i class="icon-mirror"></i>
              </div>
              <div class="download-source-info">
                <div class="download-source-name">镜像服务器1</div>
                <div class="download-source-desc">适合中国大陆地区</div>
              </div>
            </button>
            <button class="download-source-btn" @click="startDownload('mirror2')">
              <div class="download-source-icon">
                <i class="icon-mirror"></i>
              </div>
              <div class="download-source-info">
                <div class="download-source-name">镜像服务器2</div>
                <div class="download-source-desc">适合海外用户</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Download',
  data() {
    return {
      showDownloadModal: false
    }
  },
  mounted() {
    // 组件挂载时禁用页面滚动
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  },
  beforeUnmount() {
    // 组件卸载时恢复页面滚动
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
  },
  methods: {
    downloadModpack() {
      this.showDownloadModal = true;
      // 已在mounted中设置了overflow: hidden，这里无需重复设置
    },
    closeDownloadModal() {
      this.showDownloadModal = false;
      // 保持页面禁用滚动
    },
    startDownload(source) {
      console.log(`开始从${source}下载整合包`);
      // 这里可以添加实际的下载逻辑，目前只是模拟
      this.closeDownloadModal();
      alert(`已开始从${source === 'official' ? '官方服务器' : source === 'mirror1' ? '镜像服务器1' : '镜像服务器2'}下载整合包。请稍候...`);
    }
  }
}
</script>

<style scoped>
/* 全局禁用滚动 */
html, body {
  overflow: hidden;
}

.download {
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
  overflow: hidden; /* 确保下载页面容器也禁用滚动 */
}

/* Hero Section Styles */
.download-hero {
  background: linear-gradient(135deg, #f8bbd0, #e1bee7);
  color: #333;
  padding: 120px 0 80px;
  text-align: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.download-hero .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: #f9f9f9;
}

.download-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.primary-btn {
  padding: 15px 30px;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: #ff4081;
  color: white;
  box-shadow: 0 4px 14px 0 rgba(255, 64, 129, 0.4);
}

.primary-btn:hover {
  background: #e91e63;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px 0 rgba(255, 64, 129, 0.5);
}

.version-info {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
}

.version-info span {
  padding: 5px 10px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 20px;
}

/* System Requirements */
.system-requirements {
  padding: 80px 0;
  background-color: var(--background-color);
}

.system-requirements h2 {
  font-size: 2.2rem;
  margin-bottom: 40px;
  text-align: center;
  color: var(--text-color);
}

.requirements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

.requirement-card {
  padding: 30px;
  background-color: var(--card-bg);
  border-radius: 10px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.requirement-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-color);
}

.requirement-card h3 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: var(--primary-color);
}

.requirement-card ul {
  list-style-type: none;
  padding: 0;
}

.requirement-card li {
  margin-bottom: 15px;
  padding-left: 25px;
  position: relative;
  color: var(--text-color);
  line-height: 1.5;
}

.requirement-card li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
  font-size: 1.2rem;
}

.requirement-card li strong {
  color: var(--text-color);
}

/* Installation Guide */
.installation-guide {
  padding: 80px 0;
  background-color: var(--secondary-color);
}

.installation-guide h2 {
  font-size: 2.2rem;
  margin-bottom: 40px;
  text-align: center;
  color: var(--text-color);
}

.guide-steps {
  max-width: 900px;
  margin: 0 auto;
}

.step {
  display: flex;
  margin-bottom: 40px;
  position: relative;
}

.step:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 25px;
  top: 60px;
  bottom: -40px;
  width: 2px;
  background-color: var(--border-color);
}

.step-number {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  flex-shrink: 0;
  margin-right: 30px;
  z-index: 1;
}

.step-content {
  flex: 1;
}

.step-content h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--text-color);
}

.step-content p {
  margin-bottom: 20px;
  color: var(--text-secondary);
  line-height: 1.6;
}

.platform-instructions {
  background-color: var(--card-bg);
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid var(--primary-color);
}

.platform-instructions h4 {
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: var(--primary-color);
}

.platform-instructions p {
  margin-bottom: 10px;
  margin-left: 15px;
  color: var(--text-secondary);
}

.platform-instructions p:last-child {
  margin-bottom: 0;
}

.platform-instructions code {
  background-color: var(--background-color);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Consolas', 'Monaco', monospace;
  color: var(--primary-color);
}

.tip,
.warning,
.info {
  padding: 15px 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  color: var(--text-secondary);
}

.tip {
  background-color: rgba(0, 128, 0, 0.1);
  border-left: 4px solid #22c55e;
}

.warning {
  background-color: rgba(255, 165, 0, 0.1);
  border-left: 4px solid #f59e0b;
}

.info {
  background-color: rgba(0, 0, 255, 0.1);
  border-left: 4px solid #3b82f6;
}

.tip strong,
.warning strong,
.info strong {
  color: var(--text-color);
}

/* Installation Video */
.installation-video {
  padding: 80px 0;
  background-color: var(--background-color);
}

.installation-video h2 {
  font-size: 2.2rem;
  margin-bottom: 40px;
  text-align: center;
  color: var(--text-color);
}

.video-container {
  max-width: 900px;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.video-placeholder {
  width: 100%;
  height: 500px;
  background-color: var(--secondary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.video-placeholder::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(135deg, rgba(220, 7, 81, 0.1) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.video-placeholder:hover::before {
  opacity: 1;
}

.video-icon {
  font-size: 5rem;
  margin-bottom: 20px;
  color: var(--primary-color);
  transition: transform 0.3s ease;
}

.video-placeholder:hover .video-icon {
  transform: scale(1.1);
}

.video-placeholder p {
  font-size: 1.2rem;
  color: var(--text-color);
}

/* Troubleshooting */
.troubleshooting {
  padding: 80px 0;
  background-color: var(--secondary-color);
}

.troubleshooting h2 {
  font-size: 2.2rem;
  margin-bottom: 40px;
  text-align: center;
  color: var(--text-color);
}

.faq-container {
  max-width: 900px;
  margin: 0 auto;
}

.faq-item {
  margin-bottom: 15px;
  border-bottom: 1px solid var(--border-color);
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: var(--card-bg);
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px 8px 0 0;
}

.faq-question:hover {
  background-color: var(--background-color);
}

.faq-question-text {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-color);
  line-height: 1.5;
}

.faq-toggle {
  font-size: 1.5rem;
  color: var(--primary-color);
  font-weight: bold;
  transition: transform 0.3s ease;
}

.faq-answer {
  padding: 20px;
  background-color: var(--background-color);
  border-radius: 0 0 8px 8px;
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0;
    padding: 0 20px;
  }
  to {
    opacity: 1;
    max-height: 500px;
    padding: 20px;
  }
}

.faq-answer p {
  margin-bottom: 15px;
  color: var(--text-secondary);
  line-height: 1.6;
}

.faq-answer p:last-child {
  margin-bottom: 0;
}

/* Contact Section */
.contact-section {
  padding: 80px 0;
  background-color: var(--background-color);
  text-align: center;
}

.contact-section h2 {
  font-size: 2.2rem;
  margin-bottom: 20px;
  color: var(--text-color);
}

.contact-section p {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 40px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.contact-options {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.contact-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: var(--card-bg);
  border-radius: 10px;
  color: var(--text-color);
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
  min-width: 150px;
}

.contact-link:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-color);
}

.contact-link i {
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: var(--primary-color);
}

.contact-link span {
  font-size: 1rem;
  font-weight: 500;
}

/* Download Modal */
.download-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.download-modal-content {
  background-color: var(--card-bg);
  border-radius: 12px;
  max-width: 600px;
  width: 100%;
  animation: slideIn 0.3s ease;
  position: relative;
  border: 2px solid var(--primary-color);
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.download-modal-header {
  padding: 20px;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.download-modal-header h3 {
  font-size: 1.5rem;
  color: var(--text-color);
  margin: 0;
}

.download-modal-close {
  background: none;
  border: none;
  font-size: 1.8rem;
  color: var(--text-secondary);
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.download-modal-close:hover {
  background-color: var(--primary-color);
  color: white;
}

.download-modal-body {
  padding: 30px;
}

.download-modal-text {
  margin-bottom: 25px;
  color: var(--text-secondary);
  line-height: 1.6;
}

.download-sources {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.download-source-btn {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  background-color: var(--secondary-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
}

.download-source-btn:hover {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  transform: translateX(5px);
}

.download-source-icon {
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
}

.download-source-icon i {
  font-size: 1.5rem;
  color: white;
}

.download-source-info {
  flex: 1;
}

.download-source-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 5px;
}

.download-source-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

/* Responsive Styles */
@media (max-width: 992px) {
  .requirements-grid {
    grid-template-columns: 1fr;
    max-width: 600px;
  }
  
  .video-placeholder {
    height: 400px;
  }
}

@media (max-width: 768px) {
  .download-hero {
    padding: 80px 0;
  }
  
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hero-content p {
    font-size: 1.1rem;
  }
  
  .download-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .primary-btn,
  .secondary-btn {
    width: 280px;
    max-width: 100%;
  }
  
  .version-info {
    flex-direction: column;
    gap: 10px;
  }
  
  .system-requirements,
  .installation-guide,
  .installation-video,
  .troubleshooting,
  .contact-section {
    padding: 60px 0;
  }
  
  .system-requirements h2,
  .installation-guide h2,
  .installation-video h2,
  .troubleshooting h2,
  .contact-section h2 {
    font-size: 2rem;
  }
  
  .step {
    flex-direction: column;
    margin-bottom: 30px;
  }
  
  .step:not(:last-child)::after {
    left: 50%;
    top: 60px;
    bottom: -30px;
  }
  
  .step-number {
    margin-right: 0;
    margin-bottom: 20px;
    align-self: center;
  }
  
  .step-content {
    text-align: center;
  }
  
  .platform-instructions {
    text-align: left;
  }
  
  .video-placeholder {
    height: 300px;
  }
  
  .video-icon {
    font-size: 4rem;
  }
  
  .contact-options {
    gap: 20px;
  }
  
  .contact-link {
    min-width: 130px;
  }
  
  .download-modal-content {
    width: 95%;
  }
}

@media (max-width: 480px) {
  .download-hero {
    padding: 60px 0;
  }
  
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .hero-content p {
    font-size: 1rem;
  }
  
  .system-requirements,
  .installation-guide,
  .installation-video,
  .troubleshooting,
  .contact-section {
    padding: 40px 0;
  }
  
  .system-requirements h2,
  .installation-guide h2,
  .installation-video h2,
  .troubleshooting h2,
  .contact-section h2 {
    font-size: 1.8rem;
  }
  
  .requirement-card,
  .step-content {
    padding: 20px;
  }
  
  .video-placeholder {
    height: 200px;
  }
  
  .video-icon {
    font-size: 3rem;
  }
  
  .contact-link {
    min-width: 100%;
  }
  
  .download-modal-body {
    padding: 20px;
  }
  
  .download-source-btn {
    padding: 12px 15px;
  }
  
  .download-source-icon {
    width: 40px;
    height: 40px;
    margin-right: 15px;
  }
}
</style>