<template>
  <div>Error{{ errorCode }} <a-button @click="back">back</a-button></div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const errorCode = ref<number>(404);
const back = () => {
  router.push({ name: "Home" });
};
</script>
