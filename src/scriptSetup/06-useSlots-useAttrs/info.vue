<template>
  <div>
    <h1>Info</h1>
    <slot name="header"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script setup lang="ts">
import { onMounted, useSlots, useAttrs } from "vue";

const slots = useSlots();

const attrs = useAttrs();

onMounted(() => {
  console.log(attrs);
});
</script>

<style scoped></style>
