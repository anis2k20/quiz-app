<template>
  <div class="space-y-8">
    <!--    score   -->
    <div class="w-full flex justify-center ">
      <div
          class="flex w-56 justify-between border border-white backdrop-blur border-opacity-40 rounded-md p-3 items-center tracking-wider  text-dark">
        <span>Score:</span>
        <h2 class="text-4xl font-bold">12</h2>
        <p>Out of 20</p>
      </div>
    </div>
    <!--    question   -->
    <div class="flex justify-center items-start w-full text-dark ">
      <h2 class="text-xl font-semibold tracking-wider text-gray-700">Quiz 01 : Who was the first president of the United
        States?</h2>
    </div>
    <!--    options   -->
    <div class="grid grid-cols-2 gap-5 justify-center">
      <div
          class="bg-white  rounded-md backdrop-blur bg-opacity-10 text-gray-700 border border-white border-opacity-50 tracking-wider">
        <div class="flex flex-wrap gap-3">
          <label class="cursor-pointer w-full">
            <input type="radio" class="peer sr-only" name="pricing"/>
            <div
                class="w-full rounded-md p-3 text-gray-600 ring-2 ring-transparent transition-all
                peer-checked:text-white peer-checked:ring-white peer-checked:bg-gradient-to-r from-red-300 to-purple-300">
              <div class="flex flex-col gap-1">
                <div class="flex items-center justify-between">
                  <p class="text-wider">A. Nicolas Fillion</p>
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
      <div
          class="bg-white  rounded-md backdrop-blur bg-opacity-10 text-gray-700 border border-white border-opacity-50 tracking-wider">
        <div class="flex flex-wrap gap-3">
          <label class="cursor-pointer w-full">
            <input type="radio" class="peer sr-only" name="pricing"/>
            <div
                class="w-full rounded-md p-3 text-gray-600 ring-2 ring-transparent transition-all
                peer-checked:text-white peer-checked:ring-white peer-checked:bg-gradient-to-r from-red-300 to-purple-300">
              <div class="flex flex-col gap-1">
                <div class="flex items-center justify-between">
                  <p class="text-wider">B. Jhon Smith</p>
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
      <div
          class="bg-white  rounded-md backdrop-blur bg-opacity-10 text-gray-700 border border-white border-opacity-50 tracking-wider">
        <div class="flex flex-wrap gap-3">
          <label class="cursor-pointer w-full">
            <input type="radio" class="peer sr-only" name="pricing"/>
            <div
                class="w-full rounded-md p-3 text-gray-600 ring-2 ring-transparent transition-all
                peer-checked:text-white peer-checked:ring-white peer-checked:bg-gradient-to-r from-red-300 to-purple-300">
              <div class="flex flex-col gap-1">
                <div class="flex items-center justify-between">
                  <p class="text-wider">C. William Anderson</p>
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
      <div
          class="bg-white  rounded-md backdrop-blur bg-opacity-10 text-gray-700 border border-white border-opacity-50 tracking-wider">
        <div class="flex flex-wrap gap-3">
          <label class="cursor-pointer w-full">
            <input type="radio" class="peer sr-only" name="pricing"/>
            <div
                class="w-full rounded-md p-3 text-gray-600 ring-2 ring-transparent transition-all
                peer-checked:text-white peer-checked:ring-white peer-checked:bg-gradient-to-r from-red-300 to-purple-300">
              <div class="flex flex-col gap-1">
                <div class="flex items-center justify-between">
                  <p class="text-wider">D. George Washington</p>
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
        <div class="bg-gradient-to-r from-red-300 to-purple-300 h-4 rounded-full" style="width: 60%"></div>
      </div>
      <div class="flex justify-between mt-2 text-sm text-dark tracking-wider">
        <span>Progress: 75%</span>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>