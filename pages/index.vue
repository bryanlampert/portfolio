<template>
  <div>
    <Navigation></Navigation>
    <div
      v-show="loading === true"
      style="background-color: #1db98a; height: 98vh;"
    >
      <v-row align="center" justify="center" class="fill-height">
        <v-progress-circular size="100" width="8" indeterminate color="white">
          Loading..
        </v-progress-circular>
      </v-row>
    </div>
    <div>
      <no-ssr>
        <full-page id="fullpage" ref="fullpage" :options="options">
          <div class="section">
            <Home></Home>
          </div>
          <div class="section">
            <Tech></Tech>
          </div>
          <div class="section">
            <Projects></Projects>
          </div>
          <div class="section">
            <Contact></Contact>
          </div>
        </full-page>
      </no-ssr>
    </div>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation'
import Home from '~/components/pages/Home'
import Tech from '~/components/pages/Tech'
import Projects from '~/components/pages/Projects'
import Contact from '~/components/pages/Contact'

export default {
  components: {
    Navigation,
    Home,
    Tech,
    Projects,
    Contact
  },
  data() {
    return {
      loading: true,
      options: {
        licenseKey: process.env.fullpageKey,
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: false,
        menu: '#fullpageMenu',
        navigation: true,
        anchors: ['home', 'tech', 'projects', 'contact'],
        sectionsColor: ['#1db98a', '#04A071', '#1db98a', '#04A071']
      }
    }
  },
  methods: {
    afterLoad(origin, destination, direction) {
      this.loading = false
    }
  }
}
</script>
