<template>
  <my-custom-element title="My Custom Element" .list="list" />
</template>

<script setup lang="ts">
const list = [
  { id: 1, content: "1" },
  { id: 2, content: "2" },
];
</script>

<style scoped></style>
