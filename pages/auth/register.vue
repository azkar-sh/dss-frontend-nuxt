<script setup lang="ts">
useHead({
  title: "Register",
});
</script>

<template>
  <div class="flex md:flex-row flex-col w-screen h-screen overflow-hidden">
    <div
      class="md:w-1/2 md:h-screen h-1/4 bg-white flex items-center justify-center"
    >
      <AuthBanner />
    </div>
    <div
      class="md:w-1/2 md:h-screen h-3/4 bg-red-100 flex flex-col items-center justify-center"
    >
      <div
        class="md:w-96 w-64 flex flex-col gap-4 items-center justify-center animate__animated animate__fadeInRight"
      >
        <div class="flex flex-col w-full">
          <span class="text-2xl font-bold text-left text-black">Register</span>
          <span class="text-xl font-semibold text-left text-black"
            >Fill all required form</span
          >
        </div>

        <!-- Register Form -->
        <form action="" class="w-full">
          <div class="mb-4">
            <label for="name" class="block text-gray-700 font-bold mb-2"
              >Name</label
            >
            <input
              type="text"
              id="name"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-white text-black"
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-bold mb-2"
              >Email</label
            >
            <input
              type="email"
              id="email"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-white text-black"
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-gray-700 font-bold mb-2"
              >Password</label
            >
            <input
              type="password"
              id="password"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-white text-black"
            />
          </div>
          <div>
            <button
              type="submit"
              class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-blue-600 active:scale-95"
            >
              Register
            </button>
          </div>
        </form>

        <span class="text-black">Have an account?</span>

        <NuxtLink to="/auth/login" class="w-full">
          <button
            class="w-full bg-white text-blue-500 font-bold py-2 px-4 rounded focus:outline-none focus:bg-blue-600 active:scale-95"
          >
            Login
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>
/* Add your custom styles here */
</style>
