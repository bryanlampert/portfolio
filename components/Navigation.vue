<template>
  <v-app-bar fixed app color="primary" elevation="0">
    <v-toolbar-title>
      <a href="#home" style="text-decoration: none;">
        <h1 class="display-1 font-weight-light white--text">
          {{ $vuetify.breakpoint.width > 820 ? titleLarge : titleSmall }}
        </h1>
      </a>
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items id="fullpageMenu">
      <v-btn
        data-menuanchor="home"
        text
        color="white"
        href="#home"
        nuxt
        class="font-weight-bold active"
      >
        <span v-show="$vuetify.breakpoint.width > 960">
          Home
        </span>
        <v-icon v-show="$vuetify.breakpoint.width <= 959">
          mdi-home
        </v-icon>
      </v-btn>
      <v-btn
        data-menuanchor="tech"
        text
        color="white"
        href="#tech"
        nuxt
        class="font-weight-bold"
      >
        <span v-show="$vuetify.breakpoint.width > 960">
          Tech
        </span>
        <v-icon v-show="$vuetify.breakpoint.width <= 959">
          mdi-iframe
        </v-icon>
      </v-btn>
      <v-btn
        data-menuanchor="projects"
        text
        color="white"
        href="#projects"
        nuxt
        class="font-weight-bold"
      >
        <span v-show="$vuetify.breakpoint.width > 960">
          Projects
        </span>
        <v-icon v-show="$vuetify.breakpoint.width <= 959">
          mdi-monitor-dashboard
        </v-icon>
      </v-btn>
      <v-btn
        data-menuanchor="contact"
        text
        color="white"
        href="#contact"
        nuxt
        class="font-weight-bold"
      >
        <span v-show="$vuetify.breakpoint.width > 960">
          Contact
        </span>
        <v-icon v-show="$vuetify.breakpoint.width <= 959">
          mdi-card-account-mail
        </v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      titleLarge: `<Bryan Lampert />`,
      titleSmall: `<BL />`
    }
  }
}
</script>

<style lang="scss" scoped>
.active {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.15, 1);
}
</style>
