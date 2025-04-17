<template>
  <div class="bg-bl-dark min-h-screen">
    <Nav />
    <div class="main-container">
      <SectionsHome class="section" />
      <SectionsAbout class="section" />
      <SectionsSkills class="section" />
      <!-- <SectionsProjects class="section" />
      <SectionsContact class="section" /> -->
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style>
.main-container {
  max-height: calc(100vh - 4rem);
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  width: 100vw;
}
.section {
  scroll-snap-align: start;
  padding: 3rem;
  min-height: calc(100vh - 4rem);
  max-width: 1200px;

  & p {
    font-size:calc(12px + (20 - 12) * ((100vw - 360px) / 1560));
    font-size: clamp(12px, calc(12px + (20 - 12) * ((100vw - 360px) / 1560)), 20px);
  }
}
.section-wrapper {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  max-width: 1200px;
}
.section-title {
  font-weight: 600;
  font-size:calc(22px + (64 - 22) * ((100vw - 360px) / 1560));
  font-size: clamp(22px, calc(22px + (64 - 22) * ((100vw - 360px) / 1560)), 64px);
  line-height: 1.2;
  margin-bottom: 1rem;
}
</style>
