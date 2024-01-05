<template>
  <NuxtLayout name="dashboard">
    <div class="bg-white rounded-md md:p-4 p-1 w-full">
      <span class="font-semibold">Analysis Subject List</span>
    </div>
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: "Dashboard",
});

let data = [];

const config = useRuntimeConfig();

const fetchData = async () => {
  try {
    const res = await fetch(
      `${config.public.apiURL}/subject?page=&limit=&name=&sortby=&order=`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmMTI3YzE3YS0yMWU5LTQ0YzktOGE1Yi1hNjJjYzJjMzJjNDQiLCJ1c2VybmFtZSI6ImFkbWluIiwibmFtZSI6IlN1cGVyIEFkbWluIiwiaWF0IjoxNzA0MzYxODY5LCJleHAiOjE3MDQ0NDgyNjl9.owD8mX-ilwb6_pWP9L0FXcYw-DaeTWrmtqPZonLVMX0`,
        },
      }
    );

    const resData = await res.json();
    data = resData.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  fetchData();
});
</script>
