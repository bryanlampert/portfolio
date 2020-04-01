<template>
  <section class="section is-medium">
    <div class="container has-text-centered has-text-light">
      <h1 class="title">About Me</h1>
      <p v-for="(point, index) in about" :key="index" class="abt">
         {{ point }}
      </p>
      <p class="abt">
        Check out and play our game Toronto Adventure at <a :href="website" target="_blank">torontoadventure.ca</a> and you can find the project details on my <a href="/projects">projects page</a>.
      </p>
      <h2 class="subtitle is-size-3">Hobbies</h2>
      <div class="columns is-multiline is-centered is-mobile">
        <div class="column is-half-tablet is-one-third-desktop">
          <span class="subtitle t-6 has-text-primary">Board Games</span>
          <p>
            I love to play board games of all styles, though I lean heavily towards strategy games. <br /> <br />
            Some of my favourite games in no particular order include:
          </p> 
          <ul>
            <li>Terra Mystica</li>
            <li>Agricola</li>
            <li>The Castles of Burgundy</li>
            <li>Suburbia</li>
            <li>7 Wonders</li>
            <li>Viticulture</li>
            and many more!
          </ul>
        </div>
        <div class="column is-half-tablet is-one-third-desktop">
          <span class="subtitle t-6 has-text-primary">Sports</span>
          <p>
            I play and watch any sport though soccer and hockey will always be my first choice. <br /> <br />
            I also like to keep active and play various sports throughout the year. 
            In the summers I play outdoor competitive soccer and softball. 
            During the cold weather months I play indoor co-ed 6's soccer as well as beach volleyball.
          </p>
        </div>
        <div class="column is-half-tablet is-one-third-desktop">
          <span class="subtitle t-6 has-text-primary">Toronto FC</span>
          <p>
            I am extremely passionate about Toronto FC. <br /> <br />
            You can find me in the stands at BMO Field singing, chanting and cursing all game long. <br /> <br />
            I am a season ticket holder as well as a member of the Red Patch Boys.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: 'About Me - Bryan Lampert',
      meta: [
        { hid: 'description', name: 'description', content: 'Bryan Lampert - About me' }
      ]
    }
  },
  data () {
    return {
      about: [
        "Hey I am Bryan Lampert and I’m a Toronto based web developer.",
        "I'm a recent bootcamp graduate from Lighthouse Labs full time web development course.",
        "Previous to the bootcamp I worked in marketing and I have a Bachelor of Commerce degree in Marketing Management from the Univesity of Guelph.",
        "Always keeping up with new technology and the tech industry, it was in high school where I got my first taste of programming learning the programming languages Turing and Visual Basic",
        "After many years in marketing, it is coding and development where I feel most comfortable.",
        "I consider myself to have strong logical and problem solving skills, which is why I was very attracted to taking my career in a new direction as a programmer.",
        "I now create modern web applications with strong interests in Javascript frameworks such as Vue and React.",
        "As a gamer since I was very young and living in the Greater Toronto Area throughout my life, my partner and I decided to make a 2D sidescrolling game for our Lighthouse final project.",
      ],
      website: "http://torontoadventuregame.ca"
    }
  }
}
</script>

<style lang="scss" scoped>
  h2 {
    margin-top: 5rem;
  }
  ul {
    list-style-type: disc;
  }
  .abt {
    margin-bottom: 10px;
  }
</style>
