<template>
  <div>
    <h1>Suspense测试</h1>
    <Suspense>
      <template v-slot:default>
        <Index />
      </template>
      <template v-slot:fallback>
        <h3>稍等，加载中...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import Index from "./index.vue";
</script>

<style scoped></style>
