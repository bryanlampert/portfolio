<template>
  <v-row align="start" justify="start" class="px-12 pb-12">
    <v-col cols="12" md="6" class="mx-auto">
      <div
        v-show="showThankYou === false"
        :class="submitted === true ? 'slide-out-elliptic-right-bck' : ''"
      >
        <ValidationObserver ref="contactForm">
          <form
            name="contactMeForm"
            data-netlify-honeypot="bot-field"
            data-netlify="true"
            class="bryan-form"
            @submit.prevent="submitContactForm"
          >
            <v-row
              :justify="$vuetify.breakpoint.smAndDown ? 'center' : 'start'"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p class="hidden">
                <label>
                  Don’t fill this out:
                  <input name="bot-field" />
                </label>
              </p>
              <v-col cols="12">
                <h2 class="display-1">
                  Send me a message
                </h2>
              </v-col>
              <v-col cols="12">
                <ValidationProvider name="Name" rules="required" mode="eager">
                  <v-text-field
                    v-model.trim="form.name"
                    slot-scope="{ errors, valid }"
                    :error-messages="errors"
                    :success="valid"
                    name="name"
                    solo
                    style="max-width: 450px;"
                    placeholder="Name"
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col cols="12">
                <ValidationProvider
                  name="Email"
                  rules="required|email"
                  mode="eager"
                >
                  <v-text-field
                    v-model.trim="form.email"
                    slot-scope="{ errors, valid }"
                    :error-messages="errors"
                    :success="valid"
                    name="email"
                    solo
                    placeholder="Email"
                    style="max-width: 450px;"
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col cols="12">
                <ValidationProvider
                  name="Message"
                  rules="required"
                  mode="eager"
                >
                  <v-textarea
                    v-model.trim="form.message"
                    slot-scope="{ errors, valid }"
                    :error-messages="errors"
                    :success="valid"
                    name="message"
                    solo
                    row="10"
                    no-resize
                    placeholder="Message"
                    style="max-width: 450px;"
                  ></v-textarea>
                </ValidationProvider>
              </v-col>
              <v-col cols="12" class="pt-0">
                <v-btn
                  color="#212121"
                  large
                  class="submit-button"
                  type="submit"
                >
                  Submit
                </v-btn>
              </v-col>
            </v-row>
          </form>
        </ValidationObserver>
      </div>
      <div v-if="submitted === true && showThankYou === true">
        <v-row align="center" justify="center" class="fill-height">
          <v-col cols="12">
            <h3 class="headline">
              Thank you! I will get back to you asap.
            </h3>
          </v-col>
        </v-row>
      </div>
    </v-col>
    <v-col cols="12" md="6" class="pb-12 pb-md-0">
      <v-row align="center" justify="start">
        <v-col cols="12">
          <h2 class="display-1">
            Connect with me
          </h2>
        </v-col>
        <v-col v-for="link in links" :key="link.value" cols="12">
          <a
            :href="link.href"
            style="text-decoration: none;"
            rel="nofollow noopener"
          >
            <v-row
              align="center"
              justify="start"
              class="text-left mx-auto flex-nowrap"
            >
              <v-col cols="12" class="d-flex align-center">
                <v-icon x-large color="blue darken-4">
                  {{ link.icon }}
                </v-icon>
                <h3 class="pl-4 headline blue--text text--darken-4">
                  {{ link.title }}
                </h3>
              </v-col>
            </v-row>
          </a>
        </v-col>
      </v-row>
    </v-col>
    <v-snackbar v-model="errorSnackbar" :multi-line="true" color="red" top>
      {{ errorMessage }}
      <v-btn text @click="errorSnackbar = false">
        Close
      </v-btn>
    </v-snackbar>
  </v-row>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      links: [
        {
          value: 'github',
          title: 'via Github',
          icon: 'mdi-github',
          href: 'https://github.com/bryanlampert/'
        },
        {
          value: 'linkedin',
          title: 'via LinkedIn',
          icon: 'mdi-linkedin',
          href: 'https://www.linkedin.com/in/bryan-lampert/'
        },
        {
          value: 'email',
          title: 'via bryan@bryanlampert.ca',
          icon: 'mdi-email',
          href: 'mailto:bryan@bryanlampert.ca'
        }
      ],
      form: {
        name: '',
        email: '',
        message: ''
      },
      submitted: false,
      showThankYou: false,
      errorSnackbar: false,
      errorMessage: ''
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    async submitContactForm() {
      const result = await this.$refs.contactForm.validate()

      if (result) {
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: this.encode({ 'form-name': 'contactMeForm', ...this.form })
        })
          .then(() => {
            this.submitted = true
            setTimeout(() => {
              this.showThankYou = true
            }, 700)
          })
          .catch((error) => {
            this.errorSnackbar = true
            this.errorMessage = error
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hidden {
  display: none;
}

::v-deep .v-messages__message {
  background-color: #ef5350;
  color: #fff;
}

.submit-button {
  border: 2px solid #212121;
  &:hover {
    background-color: #04a071 !important;
    color: #212121 !important;
  }
}
</style>
