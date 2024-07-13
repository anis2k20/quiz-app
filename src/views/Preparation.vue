<template>
  <div>
    <CategoryNav @hide-message="hideMessage"/>
    <div class="pt-4">
      <div v-if="flag" class="flex flex-col justify-center items-center">
        <icon icon="arcticons:reading-mode" class="text-9xl text-center text-dark"/>
        <h2 class="text-gray-700 font-bold text-4xl text-center">Select a category for taking preparation.</h2>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import CategoryNav from "../components/CategoryNav.vue";
import {ref} from "vue";
import {Icon} from "@iconify/vue";

const flag = ref(true)
const url = window.location.href
if(url !== 'http://localhost:5173/preparation'){
  flag.value = false;
}

function hideMessage(categoryName){
  flag.value = false;
  console.log(categoryName)
}
</script>