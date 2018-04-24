<template>
  <section class="section is-large">
    <div class="container has-text-centered">
      <div v-if="error.statusCode === 404">
        <h1  class="fourohfour title has-text-primary">
        404
        </h1>
        <h1 class="title has-text-primary">
          PAGE NOT FOUND!
        </h1>
      </div>
      <h1 v-else class="title has-text-primary">An error occurred</h1>
      <p class="has-text-light">Head back to the last page or home page!</p>
      <a @click="$router.go(-1)" class="button is-primary is-inverted"> Go back</a>
      <nuxt-link to="/" class="button is-primary is-inverted">Home page</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  props: ['error'],
}
</script>

<style scoped>
section {
  margin-top: -15%;
}
.fourohfour {
  font-size: 200px;
}
p {
  margin-top: 50px;
}
.button {
  margin: 30px;
}
.button.is-primary.is-inverted:hover {
  background-color: #212121;
  border: 2px solid #1db98a;
}
</style>
