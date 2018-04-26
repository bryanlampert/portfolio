<template>
  <section class="section is-medium">
    <div class="container has-text-centered has-text-light">
      <h1 class="title">My Projects</h1>
      <p>
        You can find the repos to my projects on my <a href="https://github.com/bryanlampert" target="_blank">GitHub</a>.
      </p>
      <h2 class="subtitle is-3 is-spaced">
        Lighthouse Labs
      </h2>
      <div v-show="showModal" @close="showModal = false" >
        <div class="modal" :class="active">
          <div class="modal-background" @click="showModal = false"></div>
          <div class="modal-card is-mobile">
            <header class="modal-card-head has-background-dark">
              <div class="modal-card-title">
                <p class="title has-text-primary">{{ name }}</p>
                <p class="subtitle has-text-primary is-5">{{ subtitle }}</p>
              </div>
              <button class="delete is-small" @click="showModal = false" aria-label="close"></button>
            </header>
            <section class="modal-card-body has-background-grey-dark">
              <div v-if="group" class="subtitle is-6">Group Project</div>
              <figure class="image is-3by2">
                <img :src="image" class=" is-centered ">
              </figure>
              <p class="has-text-primary"> {{ description1 }} </p>
              <p class="has-text-primary"> {{ description2 }} </p>
              <div class="codeContainer">
                <code>Stack: {{ stack }}</code>
                <code v-if="testing">Testing: {{ testing }}</code>
              </div>
            </section>
            <footer class="modal-card-foot has-background-dark">
              <a class="button is-primary site" :href="repo" target="_blank">
                View the repo!
              </a>
              <a v-if="website" class="button is-primary site" :href="website" target="_blank">
                Play the game!
              </a>
            </footer>
          </div>
        </div>
      </div>
      <div class="columns is-multiline is-centered is-mobile">
        <span v-for="(project, index) in projects" :key="index" :item="project">
          <div v-if="index < 6" class="column">
            <button 
              type="button" 
              class="button is-primary is-outlined is-large" 
              @click="projectClicked(project)"
            > 
              {{ project.name }} 
            </button>
          </div>
        </span>
      </div>
      <h2 class="subtitle is-3 is-spaced">
        Other projects
      </h2>
      <div class="columns is-multiline is-centered is-mobile">
        <span v-for="(project, index) in projects" :key="index" :item="project">
          <div v-if="index >= 6" class="column">
            <button 
              type="button" 
              class="button is-primary is-outlined is-large" 
              @click="projectClicked(project)"
            > 
              {{ project.name }} 
            </button>
          </div>
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    active: function() {
      return this.showModal ? "is-active" : "";
    }
  },
  methods: {
    projectClicked: function(project) {
      this.name = project.name;
      this.subtitle = project.subtitle;
      this.group = project.group;
      this.image = project.image;
      this.description1 = project.description1;
      this.description2 = project.description2;
      this.stack = project.stack;
      this.repo = project.repo;
      this.website = project.website;
      this.testing = project.testing;
      this.showModal = true;
    }
  },
  head () {
    return {
      title: 'Projects - Bryan Lampert',
      meta: [
        { hid: 'description', name: 'description', content: 'Bryan Lampert - My Projects' }
      ]
    }
  },
  data () {
    return {
      showModal: false,
      name: "",
      subtitle: "",
      group: "",
      image: "",
      description1: "",
      description2: "",
      stack: "",
      repo: "",
      website: "",
      testing: "",
      projects: [
        { 
          name: "Toronto Adventure",
          subtitle: "Final Project",
          group: true, 
          image: require("~/assets/images/projects/final.png"),
          description1: "2D retro style sidescrolling game with a Toronto twist!",
          description2: "Deployed using Heroku and live via our own domain.",
          stack: ["Phaser", "Javascript", "Heroku"],
          repo: "https://github.com/bryanlampert/toronto-adventure",
          website: "http://torontoadventuregame.ca"
        },
        { 
          name: "Jungle E-commerce",
          subtitle: "Ruby Project",
          group: false, 
          image: require("~/assets/images/projects/jungle.png"),
          description1: "E-commerce shopping site.",
          description2: "Shopping cart, email receipts.",
          stack: ["Ruby on Rails"],
          testing: ["Rspec"],
          repo: "https://github.com/bryanlampert/jungle-rails"
        },
        { 
          name: "Chatty App",
          subtitle: "React.js Project",
          group: false, 
          image: require("~/assets/images/projects/chatty.png"),
          description1: "Single page chat application.",
          description2: "Multiple online users via websockets.",
          stack: ["React.js", "Node.js", "Babel", "Webpack", "Websockets", "SASS"],
          repo: "https://github.com/bryanlampert/chatty-app"
        },
        {  
          name: "My Personal Syllabus",
          subtitle: "Midterm Project",
          group: true, 
          image: require("~/assets/images/projects/midterm.png"),
          description1: "Pinterest-like website for 'pinning' learning resources.",
          description2: "I workd on routing, features and linking the front and back end.",
          stack: ["Node.js", "Express", "Knex", "PostgreSQL", "SASS"],
          repo: "https://github.com/mandysGit/LHL-midterm"
        },
        { 
          name: "Tweeter",
          subtitle: "AJAX && jQuery",
          group: false, 
          image: require("~/assets/images/projects/tweeter.png"),
          description1: "Single page application.",
          description2: "Twitter clone with 140 char count and live updating tweets.",
          stack: ["Node.js", "Express", "MongoDB", "SASS"],
          repo: "https://github.com/bryanlampert/tweeter"
        },
        { 
          name: "TinyApp",
          subtitle: "REST",
          group: false, 
          image: require("~/assets/images/projects/tinyapp.png"),
          description1: "RESTful URL shortener.",
          description2: "User accounts && auth.",
          stack: ["Node.js", "Express", "Bootstrap"],
          repo: "https://github.com/bryanlampert/tinyApp"
        },
        { 
          name: "Five Day Forecast",
          subtitle: "Vue.js",
          group: false, 
          image: require("~/assets/images/projects/fiveday.png"),
          description1: "Five day weather forecast with input for city search.",
          description2: "Using Vue.js and openweathermap api.",
          stack: ["Vue.js", "Axios", "Bootstrap"],
          repo: "https://github.com/bryanlampert/fivedayforecast"
        },
      ],
    }
  }
}
</script>

<style scoped>
  h2 {
    margin-top: 2rem;
  }
  .card {
    margin: 0 10px;
    border: 2px solid #1db98a;
    background-color: #1db98a;
  }
  figure {
    margin-bottom: 10px;
  }
  img {
    border-radius: 5px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  .site {
    margin: 0 auto;
  }
  .site:hover {
    background-color: #212121;
    border: 2px solid #1db98a;
    color: #1db98a;
  }
  code {
    background-color: #121212;
    color:#1db98a;
    padding-right: 10px;
    padding-left: 10px;
  }
  .button {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  .modal-background {
    opacity: 0.75;
  }
</style>
