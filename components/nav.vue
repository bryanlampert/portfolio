<template>
  <div class="bg-bl-main text-bl-white h-16 flex justify-between items-center px-2.5 sm:px-4 py-4 sticky top-0 z-10">
    <div class="text-2xl font-medium font-bl-main tracking-wide w-auto min-w-20px cursor-pointer" @click="scrollIntoView('#home')">
        <span class="flex sm:hidden" v-text="titleSm" />
        <span class="hidden sm:flex" v-text="titleLg" />
    </div>
    <div class="flex gap-2 sm:gap-8 items-center">
      <div 
        :class="{ 'active': aboutIsVisible }"
        class="nav-link" 
        @click="scrollIntoView('#about')"
      >     
        About
      </div>
      <div 
        :class="{ 'active': skillsIsVisible }"
        class="nav-link" 
        @click="scrollIntoView('#skills')"
      >
        Skills
      </div>
      <div 
        :class="{ 'active': projectsIsVisible }"
        class="nav-link"
        @click="scrollIntoView('#projects')"
      >
        Projects
      </div>
      <div 
        :class="{ 'active': contactIsVisible }"
        class="nav-link"
        @click="scrollIntoView('#contact')"
      >
        Contact
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const titleSm = ref<string>("<BL />")
const titleLg = ref<string>("<BryanLampert />")
const scrollIntoView = (id: string) => {
  const element = document.querySelector(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    const stateToPush = id.includes('home') ? '/' : id
    history.pushState(null, '', stateToPush)
  }
}

const home = ref<HTMLElement | null>(document && document.getElementById("home") || null)
useIntersectionObserver(
  home,
  ([entry], observerElement) => {
    if (entry.isIntersecting) {
      history.pushState(null, '', '/')
    }
  },
  {
    threshold: 1.0,
  }
)
const about = ref<HTMLElement | null>(document && document.getElementById("about") || null)
const aboutIsVisible = shallowRef<boolean>(false)
useIntersectionObserver(
  about,
  ([entry], observerElement) => {
    aboutIsVisible.value = entry.isIntersecting || false
    if (entry.isIntersecting) {
      history.pushState(null, '', '#about')
    }
  },
  {
    threshold: 1.0,
  }
)
const skills = ref<HTMLElement | null>(document && document.getElementById("skills") || null)
const skillsIsVisible = shallowRef<boolean>(false)
useIntersectionObserver(
  skills,
  ([entry], observerElement) => {
    skillsIsVisible.value = entry.isIntersecting || false
    if (entry.isIntersecting) {
      history.pushState(null, '', '#skills')
    }
  },
  {
    threshold: 1.0,
  }
)
const projects = ref<HTMLElement | null>(document && document.getElementById("projects") || null)
const projectsIsVisible = shallowRef<boolean>(false)
useIntersectionObserver(
  projects,
  ([entry], observerElement) => {
    projectsIsVisible.value = entry.isIntersecting || false
    if (entry.isIntersecting) {
      history.pushState(null, '', '#projects')
    }
  },
  {
    threshold: 1.0,
  }
)
const contact = ref<HTMLElement | null>(document && document.getElementById("contact") || null)
const contactIsVisible = shallowRef<boolean>(false)
useIntersectionObserver(
  contact,
  ([entry], observerElement) => {
    contactIsVisible.value = entry.isIntersecting || false
    if (entry.isIntersecting) {
      history.pushState(null, '', '#contact')
    }
  },
  {
    threshold: 1.0,
  }
)
</script>

<style scoped>
.nav-link {
  color: var(--color-bl-white);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}
.nav-link:hover {
  color: var(--color-bl-dark);
}
.nav-link.active {
  color: var(--color-bl-dark);
  font-weight: 600;
}
@media screen and (min-width: 640px) {
  .nav-link {
    font-size: 16px;
  }
}
</style>