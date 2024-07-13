<template>
  <div class="bg-white rounded h-[350px] backdrop-blur-3xl bg-opacity-20 border border-white border-opacity-50 p-5
  text-gray-600 overflow-hidden overflow-y-auto customScrollBar">
    <div class="pb-3" v-for="(q,i) in quiz">
      <h2 class="font-medium tracking-wide text-gray-700 leading-7">Question {{i+1}}: {{q.question}}</h2>
      <span class="text-purple-700 font-medium tracking-wide"><span class="text-gray-700">Answer: </span>{{q.answer}}</span>
    </div>
  </div>
</template>
<script setup>
import {ref,onMounted} from "vue";
const quiz = ref([])

const fetchData = async function(){
  const response = await fetch('/src/store/science-quiz.json')
  quiz.value = await response.json();
}


onMounted(()=>{
  fetchData();
})
</script>

<style scoped>
.customScrollBar {
  scrollbar-width: thin;
  scrollbar-color: #C4A0E6 #fff;
}

.customScrollBar::-webkit-scrollbar {
  width: 4px;
}
</style>