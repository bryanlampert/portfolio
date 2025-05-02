<template>
  <div id="projects" class="section-wrapper">
    <h2 class="section-title">
      Work Experience/Projects
    </h2>
      <div ref="container" class="keen-slider">
        <div v-for="slide in slides" class="keen-slider__slide" :key="slide.title">
          <div class="flex flex-col items-center justify-center gap-2">
            <a :href="slide.link" target="_blank" class="cursor-pointer mb-2 mx-auto">
              <NuxtImg
                provider="cloudinary"
                width="400"
                height="400"
                class="rounded-sm"
                fit="fit"
                lazy="true"
                :src="slide.image"
              />
            </a>
            <h3 class="slide-title mr-auto" v-text="slide.title" />
            <p class="mr-auto" v-text="slide.description" />
            <a :href="slide.link" target="_blank" class="text-sm text-bl-main hover:text-bl-secondary mr-auto">
              Link
            </a>
          </div>
        </div>
      </div>
      <div v-if="slider" class="flex px-3 justify-center w-full mt-5">
        <div v-for="(_slide, idx) in dotHelper" :key="idx" class="flex flex-col justify-center text-center">
          <button
            :class="{ 'active': current === idx }"
            class="slider-dot"
            @click="slider.moveToIdx(idx)"
          />
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
interface WorkAndProjects {
  title: string;
  description: string;
  image: string;
  link: string;
}

const slides = ref<WorkAndProjects[]>([
  {
    title: 'Rivlary',
    description: 'An esports and traditional sports betting platform with a bold, interactive interface. The site features live odds, match tracking, and original gaming content.',
    image: '/portfolio/rivalry',
    link: 'https://rivalry.com',
  },
  {
    title: 'Vacation Fund',
    description: 'A financial wellness platform that helped employees save for travel by matching contributions from their employers. The site offered clean dashboards, goal tracking, and an easy way to plan your next adventure.',
    image: '/portfolio/vacationfund',
    link: 'https://www.youtube.com/watch?v=mUV4PUu6LlY',
  },
  {
    title: 'Two Ps In A Potty',
    description: 'A fun, quirky site for a unique potty training product. Built to reflect the brand’s personality with attention to mobile design and smooth UX.',
    image: '/portfolio/twopsinapotty',
    link: 'https://twopsinapotty.com',
  },
  {
    title: 'HC Professional Corporation',
    description: 'A clean, professional website for an accounting firm. Fully responsive and optimized for performance.',
    image: '/portfolio/hcpc',
    link: 'https://www.hcprofessionalcorporation.com/',
  },
]);

const current = ref<number>(0);
const [container, slider] = useKeenSlider({
  initial: current.value,
  loop: true,
  slides: {
    perView: 1,
    spacing: 100,
  },
  slideChanged: (s) => {
    current.value = s.track.details.rel;
  },
});

const dotHelper = computed(() => slider.value ? [...Array(slider.value.track.details.slides.length).keys()] : [])
</script>

<style scoped>
.slider-dot {
  background-color: var(--color-bl-white);
  border-radius: 100%;
  width: 12px;
  height: 12px;
  margin: 0 12px;
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.slider-dot.active {
  background-color: var(--color-bl-main);
}

h3 {
  font-size: clamp(16px, calc(16px + (24 - 16) * ((100vw - 360px) / 1560)), 24px);
}
</style>