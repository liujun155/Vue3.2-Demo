<template>
  <div>
    <button @click="count++">+</button>
    <button @click="handleStop">点击停止watch</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, effectScope } from "vue";
const count = ref(1);

//定义作用域
const scope = effectScope();

scope.run(() => {
  watch(
    () => count.value,
    () => {
      console.log("count 发生变化了");
    }
  );
});

const handleStop = () => {
  scope.stop();
};
</script>

<style scoped></style>
