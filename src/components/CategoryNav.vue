<template>
  <nav>
    <ul class="flex justify-between text-dark tracking-wider font-medium">
      <li>
        <router-link to="/animals" @click="$emit('hide-message')">Animals</router-link>
      </li>
      <li>
        <router-link to="/business"  @click="$emit('hide-message','business')">Business</router-link>
      </li>
      <li>
        <router-link to="/history"  @click="$emit('hide-message')">History</router-link>
      </li>
      <li>
        <router-link to="/kids"  @click="$emit('hide-message')">Kids</router-link>
      </li>
      <li>
        <router-link to="/math"  @click="$emit('hide-message')">Math</router-link>
      </li>
      <li>
        <router-link to="/nature"  @click="$emit('hide-message')">Nature</router-link>
      </li>
      <li>
        <router-link to="/politics"  @click="$emit('hide-message')">Politics</router-link>
      </li>
      <li>
        <router-link to="/science"  @click="$emit('hide-message')">Science</router-link>
      </li>
      <li>
        <router-link to="/sports"  @click="$emit('hide-message')">Sports</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>

</script>

<style scoped>
a.router-link-active {
  @apply border-b-2 border-dark
}
</style>