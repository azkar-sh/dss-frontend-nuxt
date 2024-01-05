<template>
  <div class="w-screen h-screen bg-accent md:p-10 p-1 flex md:gap-4 gap-1">
    <div
      :class="`rounded-md bg-orange-50 h-full flex flex-col justify-between items-start md:gap-5 gap-2 md:p-5 p-2 `"
    >
      <SideBar @minimizeSidebar="handleSidebarToggle" />
    </div>
    <div
      :class="`rounded-md bg-orange-50 h-full flex flex-col overflow-x-hidden md:p-6 p-2 w-full `"
    >
      <div class="flex gap-3 items-center text-2xl font-semibold uppercase">
        <Icon :icon="routeIcon()" class="md:w-6 md:h-6 w-4 h-4" />
        {{ routeName }}
      </div>
      <div class="border-b border-black my-3"></div>
      <div class="animate__animated animate__fadeIn">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import "animate.css";
import { useRoute } from "vue-router";
import { Icon } from "@iconify/vue";

let minimizeSidebar = ref(false);

const handleSidebarToggle = () => {
  minimizeSidebar.value = !minimizeSidebar.value;
};

const routeParams = useRoute();
const routeName = routeParams.path.split("/").pop();
const routeIcon = () => {
  switch (routeName) {
    case "home":
      return "ant-design:home-filled";
    case "analysis":
      return "icon-park-solid:analysis";
    case "calculation":
      return "ic:outline-calculate";
    case "resume":
      return "carbon:result";
    case "manual":
      return "streamline:manual-book";
    case "settings":
      return "lets-icons:setting-fill";

    default:
      return "ion:home-outline";
  }
};
</script>

<style></style>
