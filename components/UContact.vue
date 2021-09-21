<template>
  <v-row align="center" class="d-flex justify-center mb-6">
    <v-col cols="md-6 sm-4" class="grey lighten-5 mb-6">
      <div class="staticHero">
        <v-row align="end" class="black--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="text-h5 font-weight-bold mb-2 headline" style="color: #194f34;">{{ $t('CONTACT.title') }}</div>
            </v-container>
          </v-col>
        </v-row>
      </div>
      <div class="block">
        <v-container>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name"
              :rules="nameRules"
              label="Nome"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
            <v-textarea
              v-model="message"
              :rules="messageRules"
              label="Mensagem"
              required
            ></v-textarea>
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
              >{{ $t('CONTACT.component.buttons.submit') }}</v-btn
            >
            <v-btn color="error" class="mr-4" @click="reset">{{ $t('CONTACT.component.buttons.reset') }}</v-btn>
          </v-form>
        </v-container>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
    name: 'Contact',
    props: {
        nameRuleRequired: {
            type: String,
            default: '',
            require: true,
        },
        emailRuleRequired: {
            type: String,
            default: '',
            require: true,
        },
        emailRuleNotValid: {
            type: String,
            default: '',
            require: true,
        },
        messageRuleRequired: {
            type: String,
            default: '',
            require: true,
        },
        messageRuleSmall: {
            type: String,
            default: '',
            require: true,
        }
    },  
  data: (instance) => ({
    valid: true,
    name: '',
    nameRules: [
      (v) => !!v || (instance.nameRuleRequired ?? '') ,
    ],
    email: '',
    emailRules: [
      (v) => !!v || (instance.emailRuleRequired ?? ''),
      (v) => /.+@.+\..+/.test(v) || (instance.emailRuleNotValid ?? ''),
    ],
    message: '',
    messageRules: [
      (v) => !!v || (instance.messageRuleRequired ?? ''),
      (v) => (v && v.length >= 10) || (instance.messageRuleSmall ?? ''),
    ],
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    reset() {
      this.$refs.form.reset()
    },
  },
}
</script>