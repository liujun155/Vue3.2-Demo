<template>
  <div>
    <button class="color" @click="changeStyle">点击后颜色变化</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const fontColor = ref("red");
const changeStyle = () => {
  fontColor.value = fontColor.value == "red" ? "blue" : "red";
};
</script>
<style scoped>
.color {
  color: v-bind(fontColor);
}
</style>
