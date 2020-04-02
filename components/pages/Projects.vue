<template>
  <v-row align="start" justify="start" class="px-12 pb-12">
    <v-col cols="12" class="mb-6">
      <h1 class="display-2">
        You can find the repos to my public projects on my
        <a
          href="https://github.com/bryanlampert/"
          rel="nofollow noopener"
          class="blue--text text--darken-4"
          style="text-decoration: none;"
        >
          GitHub
        </a>
      </h1>
    </v-col>
    <v-col
      v-for="(project, i) in projects"
      :key="project.value"
      cols="auto"
      :class="{ 'pb-12 pb-md-0': i === projects.length - 1 }"
    >
      <v-btn
        x-large
        raised
        elevation="6"
        color="#212121"
        class="project-button"
        @click.stop="openProject(project)"
      >
        {{ project.title }}
      </v-btn>
    </v-col>
    <v-dialog
      v-model="projectModal"
      :fullscreen="$vuetify.breakpoint.width <= 960"
      :max-width="650"
    >
      <v-card :tile="$vuetify.breakpoint.width <= 960">
        <v-row justify="end" class="px-3">
          <v-btn x-large icon text @click.stop="closeModal">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-row>
        <v-card-title>
          <h2 class="mx-auto mt-n6 display-1">
            <a :href="projectSelected.link" rel="nofollow noopener">
              {{ projectSelected.title }}
            </a>
          </h2>
        </v-card-title>
        <v-card-text
          v-if="projectSelected && projectSelected.value === 'vacation_fund'"
        >
          <v-row align="center" justify="center">
            <v-col cols="12">
              <p class="body-1">
                Some of the tasks and duties I was responsible:
              </p>
              <ul>
                <li v-for="duty in vfDuties" :key="duty">
                  {{ duty }}
                </li>
              </ul>
            </v-col>
            <v-col cols="12">
              <h5 class="body-1 text-center">
                Stack:
              </h5>
              <h6
                class="body-2 text-center font-weight-light orange--text dark-gray"
              >
                Nuxt, Vue, Vuetify, Figma, Invision, Clubhouse, Agantty, Sass,
                Google Maps and more
              </h6>
            </v-col>
            <v-col cols="12">
              <v-img
                :src="require('~/assets/images/VF_Gitlab.png')"
                class="mx-auto"
                alt="Gitlab commit chart"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-col>
            <v-col cols="12" class="text-center">
              <iframe
                :width="
                  $vuetify.breakpoint.width > 560
                    ? 560
                    : $vuetify.breakpoint.width - 50
                "
                height="300"
                src="https://www.youtube-nocookie.com/embed/mUV4PUu6LlY"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-text
          v-if="projectSelected && projectSelected.value !== 'vacation_fund'"
        >
          <v-row align="center" justify="center">
            <v-col cols="12">
              <v-img
                :src="projectSelected.img"
                :alt="projectSelected.alt"
                height="400"
                contain
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-col>
            <v-col cols="auto" class="mx-auto">
              <ul>
                <li v-for="details in projectDetails" :key="details">
                  {{ details }}
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          value: 'vacation_fund',
          title: 'Vacation Fund',
          link: 'https://www.vacationfund.io'
        },
        {
          value: 'hcpc',
          title: 'HC Professional Corporation',
          link: 'https://www.hcprofessionalcorporation.com/',
          img: require('~/assets/images/hcpc.png'),
          alt: 'HC Professional Corporation website screenshot'
        },
        {
          value: 'five',
          title: 'Five Day Forecast',
          link: 'https://github.com/bryanlampert/fivedayforecast',
          img: require('~/assets/images/fiveday.png'),
          alt: 'Five day forecast app screenshot'
        },
        {
          value: 'lhlgame',
          title: 'Toronto Adventure Game',
          link: 'https://github.com/bryanlampert/toronto-adventure',
          img: require('~/assets/images/lhlgame.png'),
          alt: 'Toronto Adventure Game screenshot'
        },
        {
          value: 'jungle',
          title: 'Jungle Ecommerce shop',
          link: 'https://github.com/bryanlampert/jungle-rails',
          img: require('~/assets/images/jungle.png'),
          alt: 'Jungle Ecommerce app screenshot'
        },
        {
          value: 'chatty',
          title: 'Chatty app',
          link: 'https://github.com/bryanlampert/chatty-app',
          img: require('~/assets/images/chatty.png'),
          alt: 'Chatty app screenshot'
        }
      ],
      projectModal: false,
      projectSelected: {},
      vfDuties: [
        'Joined as employee 3 as the sole front end developer',
        'Developed and owned entire front end web application and website through multiple design iterations writing every line of code',
        'Coordinate with designers, backend developer and business teams regarding designs, product functionality, best practices and new feature additions to the platform and website',
        'Connect front end platform to API based back end data',
        'Handle all debugging, maintaining and QA for front end codebase',
        'Assist with backend API architecture creation',
        'Took on UI and design when no designer on the team including creating user stories, wireframes and designs in programs such as Figma, Moqups and Invision'
      ],
      projectDetails: []
    }
  },
  methods: {
    openProject(project) {
      this.projectModal = true
      this.projectSelected = project
      switch (project.value) {
        case 'hcpc':
          this.projectDetails = [
            'Freelance website project',
            'Nuxt (Vue), Javascript, HTML, Vuetify',
            'Built, developed and deployed website',
            'Coordinated with client on design'
          ]
          break
        case 'five':
          this.projectDetails = [
            'Vue, Javascript, HTML, Bootstrap',
            'Five day weather forecast app',
            'Searchable by city name'
          ]
          break
        case 'lhlgame':
          this.projectDetails = [
            'LHL Final Project',
            'Phaser, Javascript, HTML, Heroku',
            'A 2D retro-style platform sidescroll game with a Toronto theme',
            'Collaborative project with another student'
          ]
          break
        case 'jungle':
          this.projectDetails = [
            'Ruby on Rails, Rspec',
            'Ecommerce application to learn Ruby on Rails and testing with Rspec'
          ]
          break
        case 'chatty':
          this.projectDetails = [
            'React, Babel, Node, Sass, Webpack',
            'Single page chat application using react to display in real time'
          ]
          break
        default:
          this.projectDetails = []
          break
      }
    },
    closeModal() {
      this.projectModal = false
    }
  }
}
</script>

<style lang="scss" scoped>
.project-button {
  border: 2px solid #212121;
  &:hover {
    background-color: #1db98a !important;
    color: #212121 !important;
  }
}
</style>
