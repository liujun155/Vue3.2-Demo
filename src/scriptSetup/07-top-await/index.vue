<template>
  <div></div>
</template>

<script setup lang="ts">
let response = await fetch(
  "https://api.uomg.com/api/get.kg?songurl=https://node.kg.qq.com/play?s=YaCv8EYfJunVWYcH"
);
console.log("response: ", response);
</script>

<style scoped></style>
