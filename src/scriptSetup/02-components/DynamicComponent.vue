<template>
  <component :is="condition ? Bar : Foo"></component>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Bar from "./Bar.vue";
import Foo from "./Foo.vue";

const condition = ref(false);

setTimeout(() => {
  condition.value = true;
}, 2000);
</script>

<style scoped></style>
