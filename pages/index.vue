<template>
  <div>
    <Navigation></Navigation>
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
      options: {
        licenseKey: process.env.fullpageKey,
        scrollOverflow: true,
        scrollBar: false,
        menu: '#fullpageMenu',
        navigation: true,
        anchors: ['home', 'tech', 'projects', 'contact'],
        sectionsColor: ['#1db98a', '#04A071', '#008657', '#006D3E']
      }
    }
  }
}
</script>
