<template>
  <div class="flex">
    <div class="w-3/5 space-y-4 pr-10">
      <h1 class="text-white text-5xl font-semibold leading-[56px]">Unlock Your Wisdom with Our Quizzes</h1>
      <p class="text-black tracking-wide">Discover new insights and expand your knowledge with our engaging quizzes.
        Unlock your wisdom with every question!</p>
      <div
          class="bg-white backdrop-blur-md bg-opacity-20 border border-white border-opacity-50 rounded-full font-semibold tracking-wide px-4 py-2 text-dark w-36 text-center">
        <span>Get Started</span>
      </div>
    </div>
    <div class="w-2/5">
      <div class="grid grid-cols-3 gap-4">
        <div
            class="flex flex-col justify-center items-center bg-white backdrop-blur bg-opacity-20 rounded-md p-4
                border border-white border-opacity-40 text-center text-dark">
              <span>
                <icon icon="streamline:ecology-science-dna-biology-experiment-lab-science" class="text-4xl"/>
              </span>
          <span class="tracking-wider">Science</span>
        </div>
        <div
            class="flex flex-col justify-center items-center bg-white backdrop-blur bg-opacity-20 rounded-md p-4 border border-white border-opacity-40 text-center text-dark">
              <span>
                <icon icon="fluent:sport-16-regular" class="text-4xl text-dark"/>
              </span>
          <span class="tracking-wider">Sports</span>
        </div>
        <div
            class="flex flex-col justify-center items-center bg-white backdrop-blur bg-opacity-20 rounded-md p-4 border border-white border-opacity-40 text-center text-dark">
              <span>
                <icon icon="iconamoon:history-light" class="text-4xl text-dark"/>
              </span>
          <span class="tracking-wider">History</span>
        </div>

        <div
            class="flex flex-col justify-center items-center bg-white backdrop-blur bg-opacity-20 rounded-md p-4
                border border-white border-opacity-40 text-center text-dark">
              <span>
                <icon icon="streamline:politics-vote-2" class="text-4xl"/>
              </span>
          <span class="tracking-wider">Politics</span>
        </div>
        <div
            class="flex flex-col justify-center items-center bg-white backdrop-blur bg-opacity-20 rounded-md p-4 border border-white border-opacity-40 text-center text-dark">
              <span>
                <icon icon="la:business-time" class="text-4xl text-dark"/>
              </span>
          <span class="tracking-wider">Business</span>
        </div>
        <div
            class="flex flex-col justify-center items-center bg-white backdrop-blur bg-opacity-20 rounded-md p-4 border border-white border-opacity-40 text-center text-dark">
              <span>
                <icon icon="fluent:math-symbols-48-filled" class="text-4xl text-dark"/>
              </span>
          <span class="tracking-wider">Math</span>
        </div>

        <div
            class="flex flex-col justify-center items-center bg-white backdrop-blur bg-opacity-20 rounded-md p-4
                border border-white border-opacity-40 text-center text-dark">
              <span>
                <icon icon="healthicons:agriculture-outline" class="text-4xl"/>
              </span>
          <span class="tracking-wider">Nature</span>
        </div>
        <div
            class="flex flex-col justify-center items-center bg-white backdrop-blur bg-opacity-20 rounded-md p-4 border border-white border-opacity-40 text-center text-dark">
              <span>
                <icon icon="hugeicons:kid" class="text-4xl text-dark"/>
              </span>
          <span class="tracking-wider">Kids</span>
        </div>
        <div
            class="flex flex-col justify-center items-center bg-white backdrop-blur bg-opacity-20 rounded-md p-4 border border-white border-opacity-40 text-center text-dark">
              <span>
                <icon icon="fluent:animal-cat-24-regular" class="text-4xl text-dark"/>
              </span>
          <span class="tracking-wider">Animals</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {Icon} from "@iconify/vue";
</script>