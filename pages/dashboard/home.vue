<template>
  <NuxtLayout name="dashboard">
    <div class="bg-white rounded-md md:p-4 p-1 w-full">
      <div class="w-fit">
        <span class="font-semibold">Analysis Subject List</span>
        <div class="border-b border-black my-3"></div>
      </div>
      <table class="table md:table-md table-xs">
        <thead>
          <tr>
            <th class="">No</th>
            <th class="">Name</th>
            <th class="">Description</th>
            <th class="">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="index">
            <td class="">{{ index + 1 }}</td>
            <td class="">{{ item.subject_name }}</td>
            <td class="">{{ item.subject_description }}</td>
            <td class="">
              <button
                class="btn bg-white border-blue-400 md:btn-md btn-xs hover:bg-blue-400 hover:text-white"
              >
                <Icon
                  icon="ant-design:edit-filled"
                  class="w-4 h-4 text-blue-400 hover:text-white"
                />
              </button>
              <button
                class="btn bg-white border-red-400 md:btn-md btn-xs hover:bg-red-400 hover:text-white"
              >
                <Icon
                  icon="ant-design:delete-filled"
                  class="w-4 h-4 text-red-400 hover:text-white"
                />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { Icon } from "@iconify/vue";
useHead({
  title: "Dashboard",
});

let data = ref([]);
let isDataLoaded = ref(false);
let token = useCookie("token");

const config = useRuntimeConfig();

const fetchData = async () => {
  isDataLoaded.value = true;
  try {
    const res = await fetch(
      `${config.public.apiURL}/subject?page=&limit=&name=&sortby=&order=`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.value}`,
        },
      }
    );

    const resData = await res.json();
    data.value = resData.data;
  } catch (error) {
    console.log(error);
  } finally {
    isDataLoaded.value = false;
  }
};

onMounted(() => {
  fetchData();
});
</script>
