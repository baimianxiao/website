import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './assets/styles/main.css'
import './assets/styles/animations.css'

// 创建Vue应用实例
const app = createApp(App)

// 注册路由
app.use(router)

// 全局错误处理
app.config.errorHandler = (err, instance, info) => {
  console.error('应用错误:', err)
  console.error('错误信息:', info)
}

// 挂载应用
app.mount('#app')
