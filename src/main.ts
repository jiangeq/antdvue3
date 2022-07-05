// import './publicPath'
// with polyfills
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter } from './router';
import { setupStore } from '@/store';
import { setupAntd, setupAssets, setupGlobalMethods } from '@/utils/plugins';

const app = createApp(App);

function setupPlugins() {
  // 注册全局常用的ant-design-vue组件
  setupAntd(app);
  // 引入静态资源
  setupAssets();

  // 注册全局方法，如：app.config.globalProperties.$message = message
  setupGlobalMethods(app);
}

async function setupApp() {
  // 挂载vuex状态管理
  setupStore(app);

  // 挂载路由
  await setupRouter(app);

  app.mount('#app');
}

setupPlugins();

setupApp();