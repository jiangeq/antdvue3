import { type RouteRecordRaw } from 'vue-router';
import { defineStore } from 'pinia';
import { aa } from '@/utils/data';
import { store } from '@/store';
import { generatorDynamicRouter } from '@/router/logic/generator-router';

interface UserState {
  token?: string;
  perms: string[];
  menus: RouteRecordRaw[];
  isQk?: boolean;
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    perms: [],
    menus: [],
    isQk: false,
  }),
  getters: {
    getPerms(): string[] {
      return this.perms;
    },
  },
  actions: {
    /** 登录成功之后, 获取用户信息以及生成权限路由 */
    async afterLogin() {
      try {
        const { perms, menus } = aa;
        this.perms = perms;
        // 生成路由
        const generatorResult = generatorDynamicRouter(menus);
        this.menus = generatorResult.menus.filter((item) => !item.meta?.hideInMenu);

        return { menus, perms };
      } catch (error) {
        return Promise.reject(error);
      }
    },
  },
});

// 在组件setup函数外使用
export function useUserStoreWithOut() {
  return useUserStore(store);
}
