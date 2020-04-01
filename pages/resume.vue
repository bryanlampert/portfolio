<template>
  <section class="section is-medium">
    <div class="container has-text-centered has-text-light">
      <h1 class="title">My Resume</h1>
      <div class="frame-container">
        <iframe src="https://resume.creddle.io/embed/136s0h6auyh" seamless></iframe>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: 'My Resume - Bryan Lampert',
      meta: [
        { hid: 'description', name: 'description', content: 'Bryan Lampert - My Resume' }
      ]
    }
  }
}
</script>

<style scoped>
  .frame-container {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
    max-width: 860px;
    height: 1110px;
    margin: 0 auto;
  }
  iframe {
    border: 5px solid #42b983;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 1000px){
    .frame-container {
      height: 75%;
    }
  }
</style>
