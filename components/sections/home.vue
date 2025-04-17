<template>
  <div id="home" class="section-wrapper">
    <h2>
      Frontend
    </h2>
    <h2>
      Developer
    </h2>
    <p class="max-w-[600px]">
      Turning designs into smooth, responsive websites and web apps. I’m all about building clean, pixel-perfect interfaces that actually feel good to use.
    </p>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
h2 {
  font-weight: 600;
  font-size:calc(22px + (72 - 22) * ((100vw - 360px) / 1560));
  font-size: clamp(22px, calc(22px + (72 - 22) * ((100vw - 360px) / 1560)), 72px);
}
</style>