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
            <button class="secondary-btn" @click="scrollToGuide">安装指南</button>
          </div>
          <div class="version-info">
            <span>当前版本：v1.0.0</span>
            <span>更新日期：2025-07-18</span>
            <span>文件大小：2.5GB</span>
          </div>
        </div>
      </div>
    </section>

    <!-- System Requirements -->
    <section class="system-requirements">
      <div class="container">
        <h2>系统要求</h2>
        <div class="requirements-grid">
          <div class="requirement-card card">
            <h3>最低配置</h3>
            <ul>
              <li><strong>操作系统：</strong>Windows 10 64位 / macOS 10.14+ / Linux Ubuntu 18.04+</li>
              <li><strong>处理器：</strong>Intel Core i3-6100 / AMD Ryzen 3 1200</li>
              <li><strong>内存：</strong>8GB RAM</li>
              <li><strong>显卡：</strong>NVIDIA GeForce GTX 750 Ti / AMD Radeon HD 7850</li>
              <li><strong>存储空间：</strong>至少 10GB 可用空间</li>
              <li><strong>Java版本：</strong>Java 17</li>
            </ul>
          </div>
          <div class="requirement-card card">
            <h3>推荐配置</h3>
            <ul>
              <li><strong>操作系统：</strong>Windows 11 64位 / macOS 13+ / Linux Ubuntu 20.04+</li>
              <li><strong>处理器：</strong>Intel Core i5-9400 / AMD Ryzen 5 3600</li>
              <li><strong>内存：</strong>16GB RAM</li>
              <li><strong>显卡：</strong>NVIDIA GeForce RTX 1650 / AMD Radeon RX 570</li>
              <li><strong>存储空间：</strong>SSD，至少 15GB 可用空间</li>
              <li><strong>Java版本：</strong>Java 17</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Installation Guide -->
    <section class="installation-guide" id="installation-guide">
      <div class="container">
        <h2>安装指南</h2>
        <div class="guide-steps">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>准备工作</h3>
              <p>在安装前，请确保您的计算机满足系统要求，并已安装 Java 17 或更高版本。如果没有，请先下载并安装 Java。</p>
              <div class="tip">
                <strong>提示：</strong>建议使用 <a href="https://adoptium.net/" target="_blank" rel="noopener noreferrer">Eclipse Temurin OpenJDK</a> 作为Java运行环境。
              </div>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>下载整合包</h3>
              <p>点击页面上方的「立即下载」按钮，开始下载模组整合包。下载完成后，您将获得一个 ZIP 压缩文件。</p>
              <div class="warning">
                <strong>注意：</strong>由于文件较大（约2.5GB），下载时间可能较长，请耐心等待。如遇下载中断，请尝试重新下载。
              </div>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>安装 Minecraft 启动器</h3>
              <p>如果您尚未安装 Minecraft，请先从 <a href="https://www.minecraft.net/zh-hans/download" target="_blank" rel="noopener noreferrer">官方网站</a> 下载并安装 Minecraft 启动器。</p>
              <p>建议使用 Minecraft Java 版 1.20.1 版本，这是本模组整合包推荐的 Minecraft 版本。</p>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3>解压整合包文件</h3>
              <p>找到您下载的 ZIP 文件，右键点击并选择「解压到...」。请选择一个有足够空间的硬盘位置进行解压。</p>
              <div class="platform-instructions">
                <h4>Windows 系统</h4>
                <p>右键点击 ZIP 文件 → 选择「解压到指定文件夹」→ 选择目标文件夹。</p>
                
                <h4>macOS 系统</h4>
                <p>双击 ZIP 文件，它会自动解压到当前目录。</p>
                
                <h4>Linux 系统</h4>
                <p>使用命令行：<code>unzip [文件名].zip -d [目标目录]</code></p>
              </div>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">5</div>
            <div class="step-content">
              <h3>导入整合包</h3>
              <p>打开 Minecraft 启动器，点击「安装」选项卡，然后点击「导入」按钮。选择解压后的整合包文件夹中的配置文件。</p>
              <div class="platform-instructions">
                <h4>使用 CurseForge 或 Prism Launcher（推荐）</h4>
                <p>1. 打开 CurseForge 或 Prism Launcher</p>
                <p>2. 点击「导入」或「添加实例」按钮</p>
                <p>3. 选择「导入整合包」选项</p>
                <p>4. 找到并选择您下载的 ZIP 文件</p>
                <p>5. 点击「确定」开始导入过程</p>
              </div>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">6</div>
            <div class="step-content">
              <h3>配置 Java 路径</h3>
              <p>在启动器中，找到整合包配置选项，确保 Java 路径指向您安装的 Java 17 或更高版本。</p>
              <div class="tip">
                <strong>提示：</strong>建议为整合包分配至少 6GB 内存（-Xmx6G）以获得最佳性能。
              </div>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">7</div>
            <div class="step-content">
              <h3>启动游戏</h3>
              <p>配置完成后，点击「播放」按钮启动游戏。首次启动可能需要一些时间来加载所有模组，请耐心等待。</p>
              <div class="info">
                <strong>信息：</strong>首次启动时，游戏会自动下载并安装一些依赖资源，请确保您的网络连接正常。
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Installation Video -->
    <section class="installation-video">
      <div class="container">
        <h2>安装视频教程</h2>
        <div class="video-container">
          <!-- 这里可以放置安装视频，目前使用占位符 -->
          <div class="video-placeholder">
            <div class="video-icon">▶</div>
            <p>点击播放安装视频教程</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Troubleshooting -->
    <section class="troubleshooting">
      <div class="container">
        <h2>常见问题与故障排除</h2>
        <div class="faq-container">
          <div v-for="faq in faqs" :key="faq.id" class="faq-item">
            <div class="faq-question" @click="toggleFaq(faq.id)">
              <span class="faq-question-text">{{ faq.question }}</span>
              <span class="faq-toggle">{{ faq.active ? '−' : '+' }}</span>
            </div>
            <div v-if="faq.active" class="faq-answer">
              <p v-for="(paragraph, index) in faq.answer" :key="index">{{ paragraph }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section">
      <div class="container">
        <h2>遇到问题？</h2>
        <p>如果您在下载或安装过程中遇到任何问题，请通过以下方式联系我们的技术支持团队：</p>
        <div class="contact-options">
          <a href="#" class="contact-link">
            <i class="icon-discord"></i>
            <span>加入 Discord</span>
          </a>
          <a href="#" class="contact-link">
            <i class="icon-forum"></i>
            <span>访问论坛</span>
          </a>
          <a href="#" class="contact-link">
            <i class="icon-email"></i>
            <span>发送邮件</span>
          </a>
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
      showDownloadModal: false,
      faqs: [
        {
          id: 1,
          question: '游戏启动时崩溃，显示 Java 内存不足错误，该怎么办？',
          answer: [
            '这通常是因为分配给 Minecraft 的内存不足导致的。请尝试以下解决方法：',
            '',
            '1. 在启动器中，找到整合包的配置选项',
            '2. 将 Java 内存分配增加到至少 6GB（-Xmx6G）',
            '3. 确保您的计算机有足够的可用内存',
            '4. 关闭其他可能占用大量内存的程序',
            '',
            '如果问题仍然存在，请检查您的 Java 版本是否为 Java 17 或更高版本。'
          ],
          active: false
        },
        {
          id: 2,
          question: '模组加载失败，显示模组版本不兼容，该如何解决？',
          answer: [
            '模组版本不兼容通常是因为：',
            '',
            '1. 您使用的 Minecraft 版本与整合包要求的版本不匹配。请确保使用 Minecraft 1.20.1 版本。',
            '2. 某些模组可能需要特定版本的 Java。请确保使用 Java 17 或更高版本。',
            '3. 如果您手动添加了模组，请检查这些模组是否与整合包中的其他模组兼容。',
            '',
            '建议：完整重新下载并安装整合包，不要手动添加或删除模组，除非您非常确定它们的兼容性。'
          ],
          active: false
        },
        {
          id: 3,
          question: '游戏运行卡顿，如何提高性能？',
          answer: [
            '要提高游戏性能，您可以尝试以下方法：',
            '',
            '1. 确保您的计算机满足推荐配置要求',
            '2. 在游戏设置中降低渲染距离和图形质量',
            '3. 关闭不必要的模组或功能',
            '4. 确保您的显卡驱动程序已更新到最新版本',
            '5. 考虑使用 OptiFine 或 Sodium 等性能优化模组（如果整合包中没有预装）',
            '6. 关闭后台运行的其他程序，释放系统资源',
            '',
            '如果问题仍然存在，您可能需要考虑升级硬件，特别是显卡和内存。'
          ],
          active: false
        },
        {
          id: 4,
          question: '整合包下载速度太慢，有什么解决方法？',
          answer: [
            '如果您遇到下载速度慢的问题，可以尝试：',
            '',
            '1. 尝试使用不同的下载源，我们提供了多个镜像服务器',
            '2. 在网络使用较少的时间段进行下载',
            '3. 关闭其他正在占用带宽的程序或设备',
            '4. 如果您使用的是下载工具，请检查是否设置了下载速度限制',
            '5. 考虑使用下载管理器来帮助您断点续传',
            '',
            '如果所有下载源都速度很慢，可能是您的网络连接问题或地理位置限制。'
          ],
          active: false
        },
        {
          id: 5,
          question: '安装后游戏无法启动，显示 "无法找到主类" 错误，如何解决？',
          answer: [
            '这个错误通常是 Java 路径配置问题导致的。请尝试：',
            '',
            '1. 确认您已正确安装 Java 17 或更高版本',
            '2. 在启动器中检查 Java 路径是否正确指向您的 Java 安装目录',
            '3. 如果您使用的是 CurseForge 或 Prism Launcher，请尝试让启动器自动检测 Java 路径',
            '4. 尝试重新安装启动器或整合包',
            '',
            '如果问题仍然存在，您可能需要手动指定 Java 可执行文件的完整路径。'
          ],
          active: false
        },
        {
          id: 6,
          question: '我可以在整合包中添加或移除模组吗？',
          answer: [
            '是的，您可以在整合包中添加或移除模组，但请注意：',
            '',
            '1. 添加或移除模组可能会导致游戏不稳定或崩溃',
            '2. 某些核心模组是整合包运行所必需的，移除它们可能会导致游戏无法启动',
            '3. 添加模组时，请确保它们与 Minecraft 1.20.1 版本兼容',
            '4. 建议在修改前备份您的游戏存档和整合包文件',
            '',
            '如果您不确定某个模组是否可以安全地添加或移除，建议先在论坛上咨询或查阅相关文档。'
          ],
          active: false
        }
      ]
    }
  },
  methods: {
    downloadModpack() {
      this.showDownloadModal = true;
      document.body.style.overflow = 'hidden';
    },
    closeDownloadModal() {
      this.showDownloadModal = false;
      document.body.style.overflow = 'auto';
    },
    startDownload(source) {
      console.log(`开始从${source}下载整合包`);
      // 这里可以添加实际的下载逻辑，目前只是模拟
      this.closeDownloadModal();
      alert(`已开始从${source === 'official' ? '官方服务器' : source === 'mirror1' ? '镜像服务器1' : '镜像服务器2'}下载整合包。请稍候...`);
    },
    scrollToGuide() {
      const guideElement = document.getElementById('installation-guide');
      if (guideElement) {
        guideElement.scrollIntoView({ behavior: 'smooth' });
      }
    },
    toggleFaq(id) {
      const faq = this.faqs.find(f => f.id === id);
      if (faq) {
        faq.active = !faq.active;
      }
    }
  },
  beforeUnmount() {
    document.body.style.overflow = 'auto';
  }
}
</script>

<style scoped>
/* Download Hero Section */
.download-hero {
  padding: 100px 0;
  background-color: var(--secondary-color);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.download-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(135deg, rgba(220, 7, 81, 0.2) 0%, transparent 100%);
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  color: var(--text-color);
}

.hero-content p {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 40px;
  line-height: 1.6;
}

.download-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.primary-btn,
.secondary-btn {
  padding: 15px 30px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.primary-btn {
  background-color: var(--primary-color);
  color: white;
}

.primary-btn:hover {
  background-color: var(--primary-dark);
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(220, 7, 81, 0.3);
}

.secondary-btn {
  background-color: transparent;
  color: var(--text-color);
  border: 2px solid var(--primary-color);
}

.secondary-btn:hover {
  background-color: var(--primary-color);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(220, 7, 81, 0.3);
}

.version-info {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  color: var(--text-secondary);
  font-size: 0.9rem;
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