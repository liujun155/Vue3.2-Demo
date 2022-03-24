<template>
  <div>{{ count }}</div>
  <button @click="clickMe">点击我+1</button>
</template>

<script setup lang="ts">
import { ref } from "vue";

let count = ref(1);

const clickMe = () => {
  count.value += 1;
};
</script>

<style scoped></style>
