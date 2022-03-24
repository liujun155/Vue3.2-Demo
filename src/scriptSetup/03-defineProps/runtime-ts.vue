<template>
  <div>
    <h1>DefinePropsRuntimeTS</h1>
    <p>{{ title }}</p>
    <ul>
      <li v-for="item in list" :key="item.id">{{ item.content }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
//类型声明：运行前做语法检查类型提示
/* const props = defineProps<{
  title: string;
  list: { id: number; content: string }[];
}>(); */
// 给定默认值
const props = withDefaults(
  defineProps<{
    title?: string;
    list: { id: number; content: string }[];
  }>(),
  {
    title: "Hello withDefaults",
    list: () => [
      { id: 3, content: "3" },
      { id: 4, content: "4" },
    ],
  }
);
</script>

<style scoped></style>
