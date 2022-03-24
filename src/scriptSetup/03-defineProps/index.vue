<template>
  <Runtime title="Runtime" :list="list"></Runtime>
  <!-- <RuntimeTS :title="num" :list="list"></RuntimeTS> -->
  <RuntimeTS></RuntimeTS>
</template>

<script setup lang="ts">
import Runtime from "./runtime.vue";
import RuntimeTS from "./runtime-ts.vue";

const num = "1";
const list = [
  { id: 1, content: "1" },
  { id: 2, content: "2" },
];
</script>

<style scoped></style>
