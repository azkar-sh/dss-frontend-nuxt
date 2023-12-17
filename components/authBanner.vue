<template>
  <div>
    <div class="carousel w-full">
      <div id="slide1" class="carousel-item relative w-full">
        <NuxtImg
          src="/icons/calculator.gif"
          class="md:w-56 md:h-56 w-32 h-32 m-auto"
        />
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <a href="#slide3" class="btn btn-circle bg-white">❮</a>
          <a href="#slide2" class="btn btn-circle bg-white">❯</a>
        </div>
      </div>
      <div id="slide2" class="carousel-item relative w-full">
        <NuxtImg
          src="/icons/data-analysis.gif"
          class="md:w-56 md:h-56 w-32 h-32 m-auto"
        />>
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <a href="#slide1" class="btn btn-circle bg-white">❮</a>
          <a href="#slide3" class="btn btn-circle bg-white">❯</a>
        </div>
      </div>
      <div id="slide3" class="carousel-item relative w-full">
        <NuxtImg
          src="/icons/double-check.gif"
          class="md:w-56 md:h-56 w-32 h-32 m-auto"
        />>
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <a href="#slide2" class="btn btn-circle bg-white">❮</a>
          <a href="#slide1" class="btn btn-circle bg-white">❯</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
