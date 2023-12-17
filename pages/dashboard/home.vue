<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
    <p class="text-lg text-gray-600 mb-8">Enjoy your stay!</p>
    <button
      class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
    >
      Get Started
    </button>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style>
@import "animate.css";

/* Add animation classes to elements */
h1 {
  animation: fadeInDown 1s;
}

p {
  animation: fadeInUp 1s;
}

button {
  animation: bounceIn 1s;
}
</style>
