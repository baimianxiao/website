<template>
  <div class="news">
    <!-- Update Log Header -->
    <section class="news-header">
      <div class="container">
        <h1>更新日志</h1>
        <p>查看《魔法少女的魔女审判》的版本更新历史和内容变更</p>
      </div>
    </section>

    <!-- Updates Content -->
    <section class="news-content">
      <div class="container">
        <div class="updates-list">
          <div v-for="update in filteredUpdates" :key="update.id" class="update-item">
            <div class="update-header">
              <div class="update-version">v{{ update.version }}</div>
              <div class="update-date">{{ formatDate(update.date) }}</div>
            </div>
            <div class="update-content">
              <div v-if="update.changelog.additions.length > 0" class="update-section additions">
                <h4>新增内容</h4>
                <ul>
                  <li v-for="(item, index) in update.changelog.additions" :key="index">{{ item }}</li>
                </ul>
              </div>
              <div v-if="update.changelog.changes.length > 0" class="update-section changes">
                <h4>调整内容</h4>
                <ul>
                  <li v-for="(item, index) in update.changelog.changes" :key="index">{{ item }}</li>
                </ul>
              </div>
              <div v-if="update.changelog.fixes.length > 0" class="update-section fixes">
                <h4>修复内容</h4>
                <ul>
                  <li v-for="(item, index) in update.changelog.fixes" :key="index">{{ item }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div v-if="updatesPagination.totalPages > 1" class="pagination">
          <button class="pagination-btn" :disabled="updatesPagination.currentPage === 1" @click="prevUpdatesPage">上一页</button>
          <span class="pagination-info">{{ updatesPagination.currentPage }} / {{ updatesPagination.totalPages }}</span>
          <button class="pagination-btn" :disabled="updatesPagination.currentPage === updatesPagination.totalPages" @click="nextUpdatesPage">下一页</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Updates',
  data() {
    return {
      updatesPagination: {
        currentPage: 1,
        itemsPerPage: 2,
        totalPages: 1
      },
      updates: [
        {
          id: 1,
          version: '1.0.0',
          date: '2025-07-18',
          changelog: {
            additions: [
              '正式发布《魔法少女的魔女审判》MC模组整合包',
              '添加完整的游戏剧情和13位魔法少女角色',
              '实现审判机制和投票系统',
              '添加多人游戏模式，支持13人同时游戏',
              '添加角色定制系统',
              '添加岛上探索和解谜内容'
            ],
            changes: [
              '调整游戏平衡性',
              '优化游戏性能和加载速度'
            ],
            fixes: [
              '修复已知bug',
              '修复多人游戏同步问题',
              '修复部分模组兼容性问题'
            ]
          }
        },
        {
          id: 2,
          version: '0.9.0',
          date: '2025-07-01',
          changelog: {
            additions: [
              '添加额外的支线任务',
              '添加隐藏剧情和彩蛋',
              '增加岛上的探索区域'
            ],
            changes: [
              '调整部分角色的技能效果',
              '优化审判机制的平衡性',
              '改进UI界面和交互体验',
              '优化游戏性能'
            ],
            fixes: [
              '修复审判会议中的投票bug',
              '修复角色技能效果错误',
              '修复部分物品合成配方错误',
              '修复多人游戏中的同步问题'
            ]
          }
        },
        {
          id: 3,
          version: '0.8.0',
          date: '2025-06-15',
          changelog: {
            additions: [
              '添加角色定制系统',
              '实现魔法系统的基础功能',
              '添加岛上的主要建筑和区域',
              '实现基本的解谜机制',
              '添加多人游戏支持'
            ],
            changes: [
              '调整游戏整体难度',
              '优化资源加载速度',
              '改进角色模型和动画'
            ],
            fixes: [
              '修复游戏崩溃问题',
              '修复模组冲突问题',
              '修复部分任务无法完成的bug'
            ]
          }
        },
        {
          id: 4,
          version: '0.7.0',
          date: '2025-05-30',
          changelog: {
            additions: [
              '添加13位魔法少女角色模型和基础属性',
              '实现审判机制的基础功能',
              '添加岛上的基础地形和环境',
              '实现基础的对话系统',
              '添加测试版本的安装向导'
            ],
            changes: [
              '优化游戏启动速度',
              '调整模组配置'
            ],
            fixes: [
              '修复部分模组加载错误',
              '修复游戏设置无法保存的问题',
              '修复角色动画错误'
            ]
          }
        }
      ]
    }
  },
  computed: {
    filteredUpdates() {
      const start = (this.updatesPagination.currentPage - 1) * this.updatesPagination.itemsPerPage;
      const end = start + this.updatesPagination.itemsPerPage;
      return this.updates.slice(start, end);
    }
  },
  mounted() {
    this.updatePagination();
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
    },
    updatePagination() {
      this.updatesPagination.totalPages = Math.ceil(this.updates.length / this.updatesPagination.itemsPerPage);
    },
    prevUpdatesPage() {
      if (this.updatesPagination.currentPage > 1) {
        this.updatesPagination.currentPage--;
      }
    },
    nextUpdatesPage() {
      if (this.updatesPagination.currentPage < this.updatesPagination.totalPages) {
        this.updatesPagination.currentPage++;
      }
    }
  }
}
</script>

<style scoped>
/* News Header */
.news-header {
  padding: 80px 0;
  background-color: var(--secondary-color);
  text-align: center;
  position: relative;
}

.news-header h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  color: var(--text-color);
}

.news-header p {
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

/* News Filter */
.news-filter {
  padding: 20px 0;
  background-color: var(--card-bg);
  border-bottom: 1px solid var(--border-color);
}

.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.filter-tab {
  padding: 10px 20px;
  background-color: transparent;
  border: none;
  color: var(--text-secondary);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.filter-tab:hover {
  background-color: var(--secondary-color);
  color: var(--text-color);
}

.filter-tab.active {
  background-color: var(--primary-color);
  color: white;
}

/* News Content */
.news-content {
  padding: 60px 0;
  background-color: var(--background-color);
}

.news-section,
.updates-section {
  margin-bottom: 60px;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 30px;
  color: var(--text-color);
  position: relative;
  padding-bottom: 15px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 80px;
  height: 3px;
  background-color: var(--primary-color);
}

/* News Grid */
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
}

.news-card {
  padding: 30px;
  background-color: var(--card-bg);
  border-radius: 8px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-color);
}

.news-date {
  font-size: 0.9rem;
  color: var(--primary-color);
  margin-bottom: 15px;
  font-weight: 500;
}

.news-title {
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: var(--text-color);
  line-height: 1.4;
}

.news-excerpt {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
}

.news-read-more {
  display: inline-block;
  padding: 8px 20px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.news-read-more:hover {
  background-color: var(--secondary-color);
  transform: translateY(-2px);
}

/* Updates List */
.updates-list {
  margin-bottom: 30px;
}

.update-item {
  background-color: var(--card-bg);
  border-radius: 8px;
  border: 1px solid var(--border-color);
  margin-bottom: 30px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.update-item:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-color);
}

.update-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background-color: var(--secondary-color);
  border-bottom: 1px solid var(--border-color);
}

.update-version {
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--primary-color);
}

.update-date {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.update-content {
  padding: 30px;
}

.update-section {
  margin-bottom: 25px;
}

.update-section:last-child {
  margin-bottom: 0;
}

.update-section h4 {
  font-size: 1.1rem;
  margin-bottom: 15px;
  color: var(--text-color);
  font-weight: 600;
}

.update-section ul {
  list-style-type: none;
  padding-left: 0;
}

.update-section li {
  padding-left: 25px;
  margin-bottom: 10px;
  color: var(--text-secondary);
  line-height: 1.6;
  position: relative;
}

.update-section li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
  font-size: 1.2rem;
}

.update-section.additions li::before {
  content: '+';
}

.update-section.changes li::before {
  content: '~';
}

.update-section.fixes li::before {
  content: '✓';
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
}

.pagination-btn {
  padding: 10px 20px;
  background-color: var(--card-bg);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.pagination-btn:hover:not(:disabled) {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.pagination-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-info {
  font-size: 1rem;
  color: var(--text-secondary);
  font-weight: 500;
}

/* News Modal */
.news-modal {
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

.news-modal-content {
  background-color: var(--card-bg);
  border-radius: 12px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
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

.news-modal-header {
  padding: 30px;
  border-bottom: 1px solid var(--border-color);
  position: relative;
}

.news-modal-header h2 {
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: var(--text-color);
}

.news-modal-date {
  font-size: 0.9rem;
  color: var(--primary-color);
  font-weight: 500;
}

.news-modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 2rem;
  color: var(--text-secondary);
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.news-modal-close:hover {
  background-color: var(--primary-color);
  color: white;
}

.news-modal-body {
  padding: 30px;
}

.news-modal-image {
  margin-bottom: 30px;
  border-radius: 8px;
  overflow: hidden;
}

.news-modal-image-placeholder {
  width: 100%;
  height: 300px;
  background-color: var(--secondary-color);
  background-image: linear-gradient(135deg, var(--primary-color) 0%, transparent 100%);
}

.news-modal-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-color);
  margin-bottom: 20px;
}

.news-modal-text p:last-child {
  margin-bottom: 0;
}

/* Responsive Styles */
@media (max-width: 992px) {
  .news-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

@media (max-width: 768px) {
  .news-header {
    padding: 60px 0;
  }
  
  .news-header h1 {
    font-size: 2.5rem;
  }
  
  .news-header p {
    font-size: 1rem;
  }
  
  .filter-tabs {
    flex-wrap: wrap;
  }
  
  .filter-tab {
    font-size: 0.9rem;
    padding: 8px 16px;
  }
  
  .news-content {
    padding: 40px 0;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .news-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .news-card {
    padding: 20px;
  }
  
  .update-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 15px 20px;
  }
  
  .update-content {
    padding: 20px;
  }
  
  .news-modal-content {
    width: 95%;
  }
  
  .news-modal-header,
  .news-modal-body {
    padding: 20px;
  }
  
  .news-modal-header h2 {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .news-header h1 {
    font-size: 2rem;
  }
  
  .news-content {
    padding: 30px 0;
  }
  
  .section-title {
    font-size: 1.6rem;
  }
  
  .pagination {
    gap: 10px;
  }
  
  .pagination-btn {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
  
  .news-modal-image-placeholder {
    height: 200px;
  }
  
  .news-modal-text p {
    font-size: 1rem;
  }
}
</style>