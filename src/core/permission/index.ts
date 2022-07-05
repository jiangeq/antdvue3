/**
 * example
 * path -> ./modules/user
 * <a-button v-if="$auth('user.add')">Button</a-button>
 * path -> ./modules/sys/user
 * <a-button v-if="$auth('sysUser.add')">Button</a-button>
 */

import type { App } from 'vue';
import type { PermissionType } from './modules/types';
import { useUserStore } from '@/store/modules/user';

/**
 * 验证权限
 * @param {PermissionType} perm  权限码
 * @returns {boolean} true | false
 */
export const verifyAuth = (perm: PermissionType) => {
  const permCode = perm.split('.').join(':');
  const permissionList = useUserStore().perms;

  return permissionList.some((n) => n === permCode);
};

export default {
  install(app: App) {
    app.config.globalProperties.$auth = verifyAuth;
  },
};
