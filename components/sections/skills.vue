<template>
  <div id="skills" class="section-wrapper gap-4">
    <h2 class="section-title !mb-0">
      Skills && Experience
    </h2>
    <p>
      With a focus on building frontend apps and websites, I have a strong foundation in HTML, CSS, and JavaScript. I’m also well-versed in modern frameworks like React and Vue.js, and I’m always eager to learn new technologies.  
    </p>
    <div class="flex items-center justify-center gap-10 lg:gap-14 flex-wrap">
      <div v-for="icon in skillsIcons" :key="icon.name" class="flex flex-col items-center justify-center gap-2">
        <Icon :name="icon.icon" />
        <p class="text-center text-xs sm:text-sm">
          {{ icon.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const skillsIcons = [
  {
    icon: 'bl-icon:javascript',
    name: 'JavaScript',
  },
  {
    icon: 'bl-icon:vue',
    name: 'Vue.js',
  },
  {
    icon: 'bl-icon:nuxt',
    name: 'Nuxt.js',
  },
  {
    icon: 'bl-icon:react',
    name: 'React.js',
  },
  {
    icon: 'bl-icon:typescript',
    name: 'TypeScript',
  },
  {
    icon: 'bl-icon:node',
    name: 'Node.js',
  },
  {
    icon: 'bl-icon:express',
    name: 'Express.js',
  },
  {
    icon: 'bl-icon:html',
    name: 'HTML',
  },
  {
    icon: 'bl-icon:css',
    name: 'CSS',
  },
  {
    icon: 'bl-icon:tailwind',
    name: 'Tailwind CSS',
  }
]
</script>

<style scoped>
.iconify {
  width: 40px;
  height: 40px;
}
@media screen and (min-width: 640px) {
  .iconify {
    width: 64px;
    height: 64px;
  }
  
}
@media screen and (min-width: 1024px) {
  .iconify {
    width: 80px;
    height: 80px;
  }
  
}
</style>