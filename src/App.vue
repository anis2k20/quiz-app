<script setup>
import Header from "./components/Header.vue";
</script>

<template>
  <div class="flex justify-center items-center h-screen w-full bg-cover bg-center"
       style="background-image: url('/src/assets/cover3.jpg');">
    <div class="w-[900px] 2xl:w-[1000px] 2xl:h-[600px] font-poppins bg-white h-[550px] backdrop-blur-md rounded-3xl bg-opacity-10 text-white
    border border-white border-opacity-50 p-10 space-y-10 ">
      <Header/>
      <router-view></router-view>
    </div>
  </div>
</template>


