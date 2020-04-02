<template>
  <v-row align="start" justify="start" class="px-12 pb-12">
    <v-col cols="12" class="px-0 py-1">
      <h1 :class="$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2'">
        Tech I've used most
      </h1>
    </v-col>
    <v-col cols="12" class="px-0 py-0 pb-md-8">
      <v-container fluid class="pa-0">
        <v-row align="start" class="px-0">
          <v-col
            v-for="tech in techMostUsed"
            :key="tech.value"
            class="d-flex py-1"
            cols="auto"
          >
            <v-img
              :src="tech.img"
              :width="imageSize"
              :height="imageSize"
              :alt="tech.alt"
              aspect-ratio="1"
              class="mx-auto grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
              <v-row align="end" class="fill-height">
                <v-col
                  cols="12"
                  class="pa-0 text-center"
                  style="background: rgba(0, 0, 0, 0.6);"
                >
                  <h3 class="title">
                    {{ tech.title }}
                  </h3>
                </v-col>
              </v-row>
            </v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
    <v-col cols="12" class="px-0 py-1">
      <h1 :class="$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2'">
        Tech I've used
      </h1>
    </v-col>
    <v-col cols="12" class="px-0 pt-0 pb-12 pb-md-8">
      <v-container fluid class="pa-0">
        <v-row align="start" class="px-0">
          <v-col
            v-for="tech in techUsed"
            :key="tech.value"
            class="d-flex px-3 py-1"
            cols="auto"
          >
            <v-img
              :src="tech.img"
              :width="imageSize"
              :height="imageSize"
              :alt="tech.alt"
              aspect-ratio="1"
              class="mx-auto grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
              <v-row align="end" class="fill-height">
                <v-col
                  cols="12"
                  class="pa-0 text-center"
                  style="background: rgba(0, 0, 0, 0.6);"
                >
                  <h3 class="title">
                    {{ tech.title }}
                  </h3>
                </v-col>
              </v-row>
            </v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      techMostUsed: [
        {
          id: 'vue',
          title: 'VueJS',
          img: require('~/assets/images/vue.png'),
          alt: 'VueJS logo'
        },
        {
          id: 'nuxt',
          title: 'NuxtJS',
          img: require('~/assets/images/nuxt.png'),
          alt: 'NuxtJS logo'
        },
        {
          id: 'javascript',
          title: 'Javascript',
          img: require('~/assets/images/js.png'),
          alt: 'Javascript logo'
        },
        {
          id: 'html',
          title: 'HTML',
          img: require('~/assets/images/html.png'),
          alt: 'HTML logo'
        },
        {
          id: 'vuetify',
          title: 'Vuetify',
          img: require('~/assets/images/vuetify.png'),
          alt: 'Vuetify logo'
        },
        {
          id: 'sass',
          title: 'Sass',
          img: require('~/assets/images/sass.png'),
          alt: 'Sass logo'
        }
      ],
      techUsed: [
        {
          id: 'node',
          title: 'NodeJS',
          img: require('~/assets/images/node.png'),
          alt: 'NodeJS logo'
        },
        {
          id: 'express',
          title: 'ExpressJS',
          img: require('~/assets/images/express.jpg'),
          alt: 'ExpressJS logo'
        },
        {
          id: 'react',
          title: 'ReactJS',
          img: require('~/assets/images/react.png'),
          alt: 'ReactJS logo'
        },
        {
          id: 'ruby',
          title: 'Ruby',
          img: require('~/assets/images/ruby.png'),
          alt: 'Ruby logo'
        },
        {
          id: 'rails',
          title: 'Rails',
          img: require('~/assets/images/rails.png'),
          alt: 'Rails logo'
        },
        {
          id: 'jquery',
          title: 'jQuery',
          img: require('~/assets/images/jquery.png'),
          alt: 'jQuery logo'
        },
        {
          id: 'bootstrap',
          title: 'Bootstrap',
          img: require('~/assets/images/bootstrap.png'),
          alt: 'Bootstrap logo'
        },
        {
          id: 'bulma',
          title: 'Bulma',
          img: require('~/assets/images/bulma.png'),
          alt: 'Bulma logo'
        },
        {
          id: 'phaser',
          title: 'Phaser',
          img: require('~/assets/images/phaser.png'),
          alt: 'Phaser logo'
        },
        {
          id: 'postgres',
          title: 'PostgreSQL',
          img: require('~/assets/images/postgres.png'),
          alt: 'PostgreSQL logo'
        },
        {
          id: 'mongo',
          title: 'MongoDB',
          img: require('~/assets/images/mongo.png'),
          alt: 'MongoDB logo'
        },
        {
          id: 'git',
          title: 'Git',
          img: require('~/assets/images/git.png'),
          alt: 'Git logo'
        },
        {
          id: 'github',
          title: 'Github',
          img: require('~/assets/images/github.png'),
          alt: 'Github logo'
        },
        {
          id: 'gitlab',
          title: 'Gitlab',
          img: require('~/assets/images/gitlab.png'),
          alt: 'Gitlab logo'
        },
        {
          id: 'figma',
          title: 'Figma',
          img: require('~/assets/images/figma.png'),
          alt: 'Figma logo'
        },
        {
          id: 'invision',
          title: 'Invision',
          img: require('~/assets/images/invision.png'),
          alt: 'Invision logo'
        },
        {
          id: 'photoshop',
          title: 'Adobe Photoshop',
          img: require('~/assets/images/photoshop.jpg'),
          alt: 'Photoshop logo'
        }
      ]
    }
  },
  computed: {
    imageSize() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return '100px'
      } else if (this.$vuetify.breakpoint.md) {
        return '120px'
      } else {
        return '150px'
      }
    }
  }
}
</script>
