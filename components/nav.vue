<template>
  <div class="bg-bl-main h-16 flex justify-between items-center p-4 sticky top-0 z-10">
    <div class="text-white text-2xl font-medium font-bl-main tracking-wide">
      <router-link to="/" class="w-auto min-w-20px">
        <span class="flex sm:hidden" v-text="titleSm" />
        <span class="hidden sm:flex" v-text="titleLg" />
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
const titleSm = ref<string>("<BL />")
const titleLg = ref<string>("<BryanLampert />")
</script>

<style scoped>

</style>