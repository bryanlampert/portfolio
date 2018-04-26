<template>
  <div class="container">
    <nav class="navbar is-fixed-top is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item is-size-3 is-size-5-touch" href="/">&lt;<strong>Bryan Lampert</strong>&nbsp;/&gt;</a>
        <div 
          @click="navBurger" 
          class="button navbar-burger" 
          data-target="navMenu" 
          :class="{ 'is-active': showBurger }"
          role="button" 
          aria-label="menu" 
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>
      <div class="navbar-menu" id="navMenu" @click="navBurger" :class="{ 'is-active': showBurger }">
        <div class="navbar-end">
          <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <nuxt-link class="navbar-link" to="/about">About</nuxt-link>
            <div class="navbar-dropdown is-boxed">
              <nuxt-link class="navbar-item" to="/about">About Me</nuxt-link>
              <nuxt-link class="navbar-item" to="/resume">My Resume</nuxt-link>            
            </div>
          </div>
          <nuxt-link class="navbar-item" to="/tech">Tech</nuxt-link>
          <nuxt-link class="navbar-item" to="/projects">Projects</nuxt-link>
          <nuxt-link class="navbar-item" to="/contact">Contact</nuxt-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      msg: '',
      showBurger: false
    }
  },
  methods: {
    navBurger () {
      this.showBurger = !this.showBurger
      return this.showBurger
    }
  }
}
</script>

<style lang="scss" scoped>
div.navbar-burger {
  margin: 5px 15px 5px auto;
}
nav.navbar {
  padding-left: 15px;
  padding-right: 15px;
  border-bottom: 1px solid white;
}
div.button.navbar-burger {
  color: #1db98a;
}
div.button.navbar-burger:hover {
  background-color: #1db98a;
  border: 2px solid #fff;
  color: #fff;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
div.navbar-dropdown.is-boxed {
  background-color:  #1db98a;
  color: #fff;
  .navbar-item {
    color: #fff;
  }
  :hover {
    color: #1db98a;
    box-shadow: 0 5px 5px rgba(0,0,0,0.22);
  }
}
div.navbar-menu.is-active {
  background-color: #1db98a;
  box-shadow: none;
  .navbar-item, .navbar-link {
    color: #fff;
  }
  :hover {
    color: #1db98a;
    box-shadow: 0 5px 5px rgba(0,0,0,0.22);
  }
}
</style>