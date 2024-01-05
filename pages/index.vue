<template>
  <div class="w-screen h-screen flex items-center justify-center m-auto">
    <Icon icon="line-md:loading-loop" width="100" height="100" />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { Icon } from "@iconify/vue";

const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    router.push("/dashboard/home");
  }, 1000);
});
</script>
