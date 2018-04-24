<template>
  <div class="wrapper">
    <vue-particles
      color="#42b983"
      :particleOpacity="0.7"
      :particlesNumber="120"
      shapeType="circle"
      :particleSize="4"
      linesColor="#6345ed"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      hoverMode="grab"
      :hoverEffect="true"
      :clickEffect="true"
      clickMode="repulse"
    >
    </vue-particles>
    <section class="section is-large">
      <div class="container has-text-centered">
        <h1 class="title">Hi, I'm Bryan Lampert</h1>
        <h2 class="subtitle">a Web Developer based in Toronto, Canada.</h2>
      </div>
    </section>
  </div>
</template>

<style scoped>
  h1, h2 {
    color: #1db98a;
  }
  .wrapper {
    height: 100%;
  }
  canvas {
    display: block;
  } 
  #particles-js {
    margin-top: -50px;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #212121;
    background-image: url("");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }
</style>
