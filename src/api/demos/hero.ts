import type { BaseResponse } from '@/utils/request';
import { request } from '@/utils/request';

/**
 * @description 获取王者荣耀英雄列表
 */
export function getWzryHeroList(query: API.PageParams) {
  return request<BaseResponse<API.TableListResult>>(
    {
      url: '/demos/wzry/hero_list',
      method: 'get',
      params: query,
    },
    {
      isGetDataDirectly: false,
    },
  );
}
