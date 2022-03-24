<template>
  <div>
    {{ count }}
  </div>
  <button @click="clickMe">点击我+1</button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    let count = ref(1);
    const clickMe = () => {
      count.value += 1;
    };
    return { count, clickMe };
  },
});
</script>

<style scoped></style>
