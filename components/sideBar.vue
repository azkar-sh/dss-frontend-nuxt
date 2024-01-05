<template>
  <div class="flex flex-col items-start md:gap-5 gap-3 w-full">
    <button
      class="btn bg-transparent w-full flex justify-start items-center flex-nowrap md:btn-md btn-sm"
      @click="handleNavigation('/dashboard/home')"
      :class="activeRoute('/dashboard/home')"
    >
      <Icon class="md:w-5 md:h-5 w-4 h-4" icon="ant-design:home-filled" />

      {{ minimizeSidebar ? "Home" : "" }}
    </button>
    <button
      class="btn bg-transparent w-full flex justify-start items-center flex-nowrap md:btn-md btn-sm"
    >
      <Icon class="md:w-5 md:h-5 w-4 h-4" icon="icon-park-solid:analysis" />

      {{ minimizeSidebar ? "Analysis" : "" }}
    </button>
    <button
      class="btn bg-transparent w-full flex justify-start items-center flex-nowrap md:btn-md btn-sm"
    >
      <Icon class="md:w-5 md:h-5 w-4 h-4" icon="ic:outline-calculate" />

      {{ minimizeSidebar ? "Calculation" : "" }}
    </button>
    <button
      class="btn bg-transparent w-full flex justify-start items-center flex-nowrap md:btn-md btn-sm"
    >
      <Icon class="md:w-5 md:h-5 w-4 h-4" icon="carbon:result" />

      {{ minimizeSidebar ? "Resume" : "" }}
    </button>
  </div>
  <div class="flex flex-col items-start md:gap-5 gap-3 w-full">
    <button
      class="btn bg-transparent w-full flex justify-start items-center flex-nowrap md:btn-md btn-sm"
      :class="activeRoute('/dashboard/manual')"
      @click="handleNavigation('/dashboard/manual')"
    >
      <Icon class="md:w-5 md:h-5 w-4 h-4" icon="streamline:manual-book" />

      {{ minimizeSidebar ? "Manual" : "" }}
    </button>
    <button
      class="btn bg-transparent w-full flex justify-start items-center flex-nowrap md:btn-md btn-sm"
    >
      <Icon class="md:w-5 md:h-5 w-4 h-4" icon="lets-icons:setting-fill" />

      {{ minimizeSidebar ? "Settings" : "" }}
    </button>
    <button
      class="btn bg-red-300 border-transparent w-full flex justify-start items-center flex-nowrap md:btn-md btn-sm hover:bg-red-400"
    >
      <Icon class="md:w-5 md:h-5 w-4 h-4" icon="humbleicons:logout" />

      {{ minimizeSidebar ? "Logout" : "" }}
    </button>
    <div class="border-b-2 border-orange-300 w-full"></div>
    <button
      class="btn bg-transparent w-full flex justify-start items-center flex-nowrap md:btn-md btn-sm"
      @click="
        () => {
          $emit('minimizeSidebar');
          handleSidebarToggle();
        }
      "
    >
      <Icon
        class="md:w-5 md:h-5 w-4 h-4"
        :icon="
          minimizeSidebar
            ? 'ion:chevron-back-outline'
            : 'ion:chevron-forward-outline'
        "
      />
      {{ minimizeSidebar ? "Minimize" : "" }}
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { useRouter, useRoute } from "vue-router";

const route = useRouter();
const routeParams = useRoute();

let minimizeSidebar = ref(false);

const handleSidebarToggle = () => {
  minimizeSidebar.value = !minimizeSidebar.value;
  emit("minimizeSidebar");
};

const handleNavigation = (path) => {
  route.push(path);
  minimizeSidebar.value = false;
};

const activeRoute = (routeName) => {
  if (routeParams.path.includes(routeName)) {
    return "bg-orange-300 hover:border-transparent";
  }
};
</script>
