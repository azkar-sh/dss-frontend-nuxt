<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - DSS` : "DSS";
  },
});

import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(() => {
  router.push("/auth/login");
});
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
