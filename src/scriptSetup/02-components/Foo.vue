<template>
  <h1>这是Foo组件</h1>
  <div>{{ count }}</div>
  <button @click="clickMe">点击我+1</button>
  <Bar />
</template>

<script setup lang="ts">
import { ref } from "vue";
import Bar from "./Bar.vue";

let count = ref(1);

const clickMe = () => {
  count.value += 1;
};
</script>

<style scoped></style>
