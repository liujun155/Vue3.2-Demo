<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="item in list" :key="item.id">{{ item.content }}</li>
    </ul>
    <div class="special">测试样式</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  list: { id: number; content: string }[];
}>();
</script>

<style scoped>
.special {
  width: 200px;
  height: 200px;
  background-color: red;
}
</style>
