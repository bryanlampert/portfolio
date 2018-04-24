<template>
  <section class="section is-medium">
    <div class="container has-text-centered has-text-light">
      <h1 class="title">
        Contact
      </h1>
      <h2 class="subtitle">
        Send a message
      </h2>
      <div class="content">
        <form name="contact" action="/thanks" method="post" netlify-honeypot="bot-field" netlify>
          <p class="hidden">     
            <label>Don’t fill this out: <input name="bot-field"></label>   
          </p>
          <div class="field">
            <div class="control is-horizontal">
              <label class="label has-text-primary" for="name">Name:</label>
              <div class="control">
                <input class="input is-primary" name="name" id="name" type="text" />
              </div>
            </div>
          </div>
          <div class="field">
            <div class="control is-horizontal">
              <label class="label has-text-primary" for="email">Email:</label>
              <div class="control">
                <input class="input is-primary" type="email" name="email" id="email" />
              </div>
            </div>
          </div>
          <div class="field">
            <div class="control is-horizontal">
              <label class="label has-text-primary" for="message">Message:</label>
              <div class="control">
                <textarea class="textarea is-primary" name="message" id="message"></textarea>
              </div>
            </div>
          </div>
          <input class="button is-primary" type="submit" value="Send message" />
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.content {
  max-width: 750px;
  margin: 0 auto;
}
.hidden {
  display: none;
}
</style>
