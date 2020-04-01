<template>
  <section class="section is-medium">
    <div class="container has-text-centered has-text-light">
      <h1 class="title">Tech</h1>
      <p>Some of the technologies I've used</p><br>
      <h2 class="subtitle is-4">{ Languages }</h2>
      <div class="columns is-multiline is-centered is-mobile">
        <span v-for="(language, index) in languages" :key="index">
          <div class="column is-narrow">
            <div class="card">
              <div class="card-content">
                <figure class="image">
                  <img :src="language.image" >
                </figure>
              </div>
              <div class="card-footer">
                <h3 class="subtitle is-3">{{language.name}}</h3>
              </div>
            </div>
          </div>
        </span>
      </div>
      <h2 class="subtitle is-4">{ Frameworks && Libraries && Environments }</h2>
      <div class="columns is-multiline is-centered is-mobile">
        <span v-for="(framework, index) in frameworks" :key="index">
          <div class="column is-narrow">
            <div class="card">
              <div class="card-content">
                <figure class="image">
                  <img :src="framework.image" >
                </figure>
              </div>
              <div class="card-footer">
                <h3 class="subtitle is-3">{{framework.name}}</h3>
              </div>
            </div>
          </div>
        </span>
      </div>
      <h2 class="subtitle is-4">{ Databases && Version Control }</h2>
      <div class="columns is-multiline is-centered is-mobile">
        <span v-for="(database, index) in databases" :key="index">
          <div class="column is-narrow">
            <div class="card">
              <div class="card-content">
                <figure class="image">
                  <img :src="database.image" >
                </figure>
              </div>
              <div class="card-footer">
                <h3 class="subtitle is-3">{{database.name}}</h3>
              </div>
            </div>
          </div>
        </span>
      </div>
      <h2 class="subtitle is-4">{ Adobe }</h2>
      <div class="columns is-multiline is-centered is-mobile">
        <span v-for="(dobe, index) in adobe" :key="index">
          <div class="column is-narrow">
            <div class="card">
              <div class="card-content">
                <figure class="image">
                  <img :src="dobe.image" >
                </figure>
              </div>
              <div class="card-footer">
                <h3 class="subtitle is-3">{{dobe.name}}</h3>
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      languages: [
        { name: "Javascript", image: require("~/assets/images/tech/javascript.png") },
        { name: "Ruby", image: require("~/assets/images/tech/ruby.png") },
        { name: "HTML", image: require("~/assets/images/tech/html.png") },
        { name: "CSS", image: require("~/assets/images/tech/css.png") }
      ],
      frameworks: [
        { name: "Vue.js", image: require("~/assets/images/tech/vue.png") },
        { name: "React.js", image: require("~/assets/images/tech/react.png") },
        { name: "Node.js", image: require("~/assets/images/tech/nodejs.jpg") },
        { name: "Nuxt", image: require("~/assets/images/tech/nuxt.png") },
        { name: "Rails", image: require("~/assets/images/tech/rails.png") },
        { name: "Phaser", image: require("~/assets/images/tech/phaser.png") },
        { name: "AJAX", image: require("~/assets/images/tech/ajax.png") },
        { name: "jQuery", image: require("~/assets/images/tech/jquery.gif") },
        { name: "Express.js", image: require("~/assets/images/tech/expressjs.jpg") },
        { name: "Knex.js", image: require("~/assets/images/tech/knex.png") },
        { name: "SASS", image: require("~/assets/images/tech/sass.png") },
        { name: "Bootstrap", image: require("~/assets/images/tech/bootstrap.png") },      
        { name: "Bulma", image: require("~/assets/images/tech/bulma.png") }      
      ],
      databases: [
        { name: "PostgreSQL", image: require("~/assets/images/tech/postgresql.png") },
        { name: "MongoDB", image: require("~/assets/images/tech/mongodb.png") },
        { name: "Git", image: require("~/assets/images/tech/git.png") },
        { name: "Github", image: require("~/assets/images/tech/github.png") }     
      ],
      adobe: [
        { name: "Photoshop", image: require("~/assets/images/tech/photoshop.jpg") },
        { name: "Illustrator", image: require("~/assets/images/tech/illustrator.png") }    
      ]
    }
  },
  head () {
    return {
      title: 'Tech Stack - Bryan Lampert',
      meta: [
        { hid: 'description', name: 'description', content: 'Bryan Lampert - Tech Stack' }
      ]
    }
  }
}
</script>

<style scoped>
  .card {
    width: 200px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);    
  }
  img {
    max-height: 200px;
  }
  .card-footer {
    background-color: #1db98a;
    text-align: center;
  }
  h3 {
    margin: 0 auto;
  }
</style>
