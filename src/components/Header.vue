<template>
  <div class="flex justify-between items-center text-dark">
    <h2 class="text-2xl font-bold  font-montserrat">QuizMaster</h2>
    <ul class="flex gap-8 tracking-wider">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/preparation">Preparation</router-link></li>
      <li><router-link to="/test">Test</router-link></li>
    </ul>
    <div class="border border-dark rounded-full px-4 py-2 tracking-wider">
      <span>Sign up</span>
    </div>
  </div>
</template>
<script setup>
</script>
<style scoped>
a.router-link-active {
  @apply border-b-2 border-dark
}
</style>
