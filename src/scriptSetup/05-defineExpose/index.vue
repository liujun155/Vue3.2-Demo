<template>
  <InfoSetup ref="InfoRef"></InfoSetup>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
// import Info from "./info.vue";
import InfoSetup from "./info-setup.vue";

const InfoRef = ref<{ count: number; handle: () => void }>();

onMounted(() => {
  console.log("Count", InfoRef.value?.count);
  InfoRef.value?.handle();
});
</script>

<style scoped></style>
