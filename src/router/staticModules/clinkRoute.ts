import { RouteRecordRaw } from 'vue-router';
import RouterView from '@/layout/routerView/index.vue';

const moduleName = 'console';

export const clinkList: Array<RouteRecordRaw> = [
  {
    path: '/console',
    name: moduleName,
    component: RouterView,
    meta: {
      title: 'clinkConsole',
      icon: 'icon-zhuomian',
    },
    children: [
      {
        path: 'tr1',
        name: 'tr1',
        meta: {
          title: 'triTitle',
          icon: 'icon-zhuomian',
          keepAlive: true,
        },
        component: () =>
          import(
            /* webpackChunkName: "consoleDemo" */ '@/views/console/consoleDemo/consoleDemo.vue'
          ),
      },
    ],
  },
];
