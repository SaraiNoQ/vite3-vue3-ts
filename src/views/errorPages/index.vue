<template>
  <div>
    Error{{ errorCode }}
    <div><a-button @click="back">back</a-button></div>
  </div>
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
