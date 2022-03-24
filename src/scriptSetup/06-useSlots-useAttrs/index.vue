<template>
  <Info class="test">
    <template #header> 父组件使用了具名插槽 </template>
    <template #footer> 父组件使用了具名插槽2 </template>
  </Info>
</template>

<script setup lang="ts">
import Info from "./info.vue";
</script>

<style scoped></style>
