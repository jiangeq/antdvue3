<template>
  <Layout class="layout">
    <Layout.Sider
      v-if="!isQk"
      v-model:collapsed="collapsed"
      :width="asiderWidth"
      :trigger="null"
      collapsible
      :theme="getTheme"
      class="layout-sider"
    >
      <AsideMenu :collapsed="collapsed" :theme="getTheme" />
    </Layout.Sider>
    <Layout>
      <Layout.Content class="layout-content">
        <tabs-view :is-qk="isQk" />
      </Layout.Content>
    </Layout>
  </Layout>
</template>

<script lang="ts" setup>
  import { ref, computed } from 'vue';
  import { Layout } from 'ant-design-vue';
  import { TabsView } from './tabs';
  import AsideMenu from './menu/menu.vue';
  import { useUserStore } from '@/store/modules/user';

  const collapsed = ref<boolean>(false);
  // 自定义侧边栏菜单收缩和展开时的宽度
  const asiderWidth = computed(() => (collapsed.value ? 80 : 220));
  const getTheme = computed(() => 'light');

  const isQk = computed(() => useUserStore().isQk);
</script>

<style lang="less" scoped>
  .layout {
    display: flex;
    height: 100vh;
    overflow: hidden;

    .ant-layout {
      overflow: hidden;
    }

    .layout-content {
      flex: none;
      height: 100%;
    }
  }
</style>
