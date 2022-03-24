<template>
  <div>
    <h1>setup</h1>
    {{ count }}
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const count = ref(2);
const handle = () => {
  console.log("这是子组件的方法！！！");
};

defineExpose({
  count,
  handle,
});
</script>

<style scoped></style>
