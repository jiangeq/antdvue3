<template>
  <div>console {{ state.name }}</div>
</template>
<script setup lang="ts">
  import { reactive } from 'vue';

  const state = reactive({
    name: 123,
  });
</script>
