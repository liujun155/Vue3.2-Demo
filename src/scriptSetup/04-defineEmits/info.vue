<template>
  <button @click="handleClick">
    点击触发 handleClick 事件, 并且传递2给父组件
  </button>
  <div>
    点击触发 handleChange 事件
    <input type="checkbox" @change="handleChange" />
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(["parentClick", "parentChange"]);

const handleClick = () => {
  emits("parentClick", "2");
};
const handleChange = () => {
  emits("parentChange");
};
</script>

<style scoped></style>
