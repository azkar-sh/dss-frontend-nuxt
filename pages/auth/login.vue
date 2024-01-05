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
          <span class="text-2xl font-bold text-left text-black"
            >Welcome Back!</span
          >
          <span class="text-xl font-semibold text-left text-black"
            >Login to your account</span
          >
        </div>

        <!-- Login Form -->
        <form action="" class="w-full">
          <div class="mb-4">
            <label for="username" class="block text-gray-700 font-bold mb-2"
              >Username</label
            >
            <input
              type="username"
              id="username"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-white text-black"
              v-model="username"
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
              v-model="password"
            />
          </div>
          <div>
            <!-- <NuxtLink to="/dashboard/home"> -->
            <button
              type="submit"
              class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-blue-600 active:scale-95"
              @click.prevent="handlerLogin"
            >
              Login
            </button>
            <!-- </NuxtLink> -->
          </div>
        </form>

        <span class="text-black">Don't have an account?</span>

        <NuxtLink to="/auth/register" class="w-full">
          <button
            class="w-full bg-white text-blue-500 font-bold py-2 px-4 rounded focus:outline-none focus:bg-blue-600 active:scale-95"
          >
            Register
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

useHead({
  title: "Login",
  meta: [
    {
      name: "description",
      content: "Login to your account",
    },
  ],
});

const config = useRuntimeConfig();
let username = ref("");
let password = ref("");
let token = useCookie("token");

const router = useRouter();

const handlerLogin = async () => {
  try {
    const res = await fetch(`${config.public.apiURL}/auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
    });

    const resData = await res.json();

    if (resData.status !== 200) {
      alert(`Login Failed, ${resData.msg}`);
    } else {
      alert(`Login Success, Welcome ${resData.data.username}`);
      token.value = resData.data.token;
      router.push("/dashboard/home");
    }
  } catch (error) {
    console.log(error);
    alert("Login Failed");
  }
};
</script>

<style>
/* Add any custom styles here */
</style>
