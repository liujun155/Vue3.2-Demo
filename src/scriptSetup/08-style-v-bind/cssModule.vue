<template>
  <p :class="color.red">测试 css module</p>
</template>

<script setup lang="ts">
import { useCssModule } from "vue";

const color = useCssModule("color");
console.log("color: ", color);
</script>

<style module="color" scoped>
.red {
  color: red;
}
</style>
