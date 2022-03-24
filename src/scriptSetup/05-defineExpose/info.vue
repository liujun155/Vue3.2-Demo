<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const count = ref(2);
    const handle = () => {
      console.log("这是子组件的方法！！！");
    };

    return { count, handle };
  },
});
</script>

<style scoped></style>
