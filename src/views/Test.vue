<template>
  <div class="space-y-8">
    <!--    score   -->
    <div class="w-full flex justify-between items-center ">
      <div v-if="isRunning" @click="reset" class="text-lg font-semibold flex gap-2 justify-center border border-white backdrop-blur border-opacity-40
      rounded-md p-3 items-center tracking-wider  text-dark cursor-pointer">
        <span><icon icon="grommet-icons:power-reset" class="text-xl"/></span>
        <span class="tracking-wider">Reset</span>
      </div>

      <div v-else @click="start" class="text-lg font-semibold flex gap-2 justify-center border border-white backdrop-blur border-opacity-40
      rounded-md p-3 items-center tracking-wider  text-dark cursor-pointer">
        <span><icon icon="material-symbols:play-circle-outline" class="text-2xl"/></span>
        <span class="tracking-wider">Start</span>
      </div>

      <div
          class="flex w-56 justify-around border border-white backdrop-blur border-opacity-40 rounded-md p-3 items-center tracking-wider  text-dark">
        <span>Score</span>
        <h2 class="text-4xl font-bold">{{ score < 10 && score > 0 ? '0' + score : score }}</h2>
        <p>Out of {{ nextQuestion }}</p>
      </div>
      <div
          class="w-20 text-lg font-semibold flex gap-2 justify-center border border-white backdrop-blur border-opacity-40 rounded-md p-3 items-center tracking-wider  text-dark">
        <span v-if="timer>0 && isRunning" class="w-1/2"><icon icon="svg-spinners:clock" class="text-xl"/></span>
        <span v-if="timer<1 || !isRunning" class="w-1/2"><icon icon="tabler:clock" class="text-2xl"/></span>
        <span class="w-1/2">{{ timer < 10 && timer > 0 ? '0' + timer : timer }}</span>
      </div>
    </div>
    <div>
      <h2 v-if="nextQuestion===20" class="text-4xl font-montserrat font-bold text-center pt-10 text-gray-700">Great job!<br>The
        test has been completed.</h2>
    </div>
    <!--    question   -->
    <div class="flex justify-center items-start w-full text-dark ">
      <h2 v-if="nextQuestion<20"
          class="text-xl font-semibold tracking-wider text-gray-700 inline-flex items-center gap-2">
        <Icon icon="hugeicons:message-multiple-01" class="text-3xl"/>
        {{ quiz[nextQuestion]?.question }}
      </h2>
    </div>
    <!--    options   -->
    <div class="grid grid-cols-2 gap-5 justify-center">
      <div v-for="option in quiz[nextQuestion]?.options" :key="option"
           class="bg-white rounded-md backdrop-blur bg-opacity-10 text-gray-700 border border-white border-opacity-50
          transition-all ease-in-out duration-300 tracking-wider">
        <div class="flex flex-wrap gap-3">
          <label class="cursor-pointer w-full">
            <input type="radio" class="peer sr-only" v-model="selectedAnswer" @change="updateScore" :value="option"
                   name="answer"/>
            <div
                class="w-full rounded-md p-3 text-gray-600 ring-2 ring-transparent transition-all
                peer-checked:text-white peer-checked:ring-white peer-checked:bg-gradient-to-r from-red-300 to-purple-300">
              <div class="flex flex-col gap-1">
                <div class="flex items-center justify-between">
                  <p class="text-wider">{{ option }}</p>
                  <div>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path fill="currentColor"
                            d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
    <!--    progressbar   -->
    <div>
      <div class="w-full bg-white backdrop-blur bg-opacity-20 border border-white border-opacity-50 p-1 rounded-full ">
        <div class="bg-gradient-to-r from-red-300 to-purple-300 h-4 rounded-full transition-all ease-in duration-300"
             :style="{width: `${progress}%`}"></div>
      </div>
      <div class="flex justify-between mt-2 text-sm text-dark tracking-wider pl-1">
        <span>Progress of test: {{ progress }}%</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import {onMounted, ref, watch} from 'vue'
import {Icon} from "@iconify/vue";

const selectedAnswer = ref([]);
const score = ref(0);
const progress = ref(0);
const ans = ref("")
const quiz = ref([])
const nextQuestion = ref(0);
const timer = ref(20);
const endTime = 20;
const isRunning = ref(false);


function updateScore() {
  if (selectedAnswer.value === quiz.value[nextQuestion.value].answer) {
    score.value += 1
  }
  timer.value = endTime;
  ans.value = selectedAnswer.value
  if (score.value < 20) {
    progress.value += 5;
    setTimeout(() => {
      nextQuestion.value += 1;
    }, 500)
  }
}

function reset() {
  window.location.reload()
}

function start() {
  if (nextQuestion.value < 20) {
    isRunning.value = true;
    setInterval(() => {
      if (timer.value > 0) {
        timer.value -= 1
      }
    }, 1000)
  } else {
    isRunning.value = false
  }

}

const fetchData = async () => {
  const response = await fetch("/src/store/science-quiz.json");
  quiz.value = await response.json();
}

watch(timer, (newValue) => {
  if (newValue === 0 && nextQuestion.value < 20) {
    nextQuestion.value += 1;
    progress.value += 5;
    timer.value = endTime;
  }
})

onMounted(() => {
  fetchData();
});
</script>