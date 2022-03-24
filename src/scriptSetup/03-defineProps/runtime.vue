<template>
  <div>
    <h1>DefinePropsRuntime</h1>
    <p>{{ title }}</p>
    <ul>
      <li v-for="item in list" :key="item.id">{{ item.content }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// 运行时声明：运行时进行类型检查
const props = defineProps({
  title: String,
  list: Array,
});
</script>

<style scoped></style>
