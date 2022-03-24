<template>
  <p>{{ count }}</p>
  <InfoTS @parentClick="parentClick" @parentChange="parentChange"></InfoTS>
</template>

<script setup lang="ts">
import { ref } from "vue";
// import Info from "./info.vue";
import InfoTS from "./info-ts.vue";

const count = ref(1);
const parentClick = (data: number) => {
  alert("子组件触发了父组件的 parentClick");
  count.value += data;
};

const parentChange = () => {
  alert("子组件触发了父组件的 parentChange");
};
</script>

<style scoped></style>
