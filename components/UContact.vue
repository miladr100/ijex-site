<template>
  <v-row align="center" class="d-flex justify-center">
    <v-col cols="md-6" class="d-flex justify-end">
      <v-col cols="md-8" class="lighten-5 mb-6">
        <div class="staticHero">
          <v-row align="end" class="black--text fill-height">
            <v-col>
              <v-container>
                <div
                  class="text-h5 font-weight-bold mb-2 headline"
                  style="color: #194f34"
                >
                  {{ $t('CONTACT.title') }}
                </div>
                <div class="text" style="font-size: 14px; font-weight: 300">
                  {{ $t('CONTACT.subtitle') }}
                </div>
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
                :label="$t('CONTACT.component.labels.name')"
                required
              ></v-text-field>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                :label="$t('CONTACT.component.labels.email')"
                required
              ></v-text-field>
              <v-text-field
                v-model="email"
                :rules="subjectRules"
                :label="$t('CONTACT.component.labels.subject')"
                required
              ></v-text-field>
              <v-textarea
                v-model="message"
                :rules="messageRules"
                :label="$t('CONTACT.component.labels.message')"
                required
              ></v-textarea>
              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
                >{{ $t('CONTACT.component.buttons.submit') }}</v-btn
              >
              <v-btn color="error" class="mr-4" @click="reset">{{
                $t('CONTACT.component.buttons.reset')
              }}</v-btn>
            </v-form>
          </v-container>
        </div>
      </v-col>
    </v-col>
    <v-col cols="md-6">
      <v-row>
        <v-col cols="md-8 sm-4">
          <v-card-title class="text-h5" style="color: #194f34">
            {{ $t('CONTACT.component.our_address.title') }}
          </v-card-title>
          <v-row>
            <v-col cols="12" class="pb-0">
              <v-icon class="mr-1 pl-4" style="color: #194f34"
                >mdi-map-marker</v-icon
              >
              <span class="subheading">
                <strong style="color: #194f34"
                  >{{ $t('CONTACT.component.our_address.address') }}:</strong
                >
                SRTVS QD 701 CJ L BL 01, N 38 Sala 533</span
              >
            </v-col>
            <v-col cols="12" class="pb-0">
              <v-icon class="mr-1 pl-4" style="color: #194f34">
                mdi-phone
              </v-icon>
              <span class="subheading"
                ><strong style="color: #194f34"
                  >{{ $t('CONTACT.component.our_address.phone') }}:</strong
                >
                (61) 4042-6004</span
              >
            </v-col>
            <v-col cols="12" class="pb-0">
              <v-icon class="mr-1 pl-4" style="color: #194f34"> mdi-at </v-icon>
              <span class="subheading"
                ><strong style="color: #194f34">E-mail:</strong>
                <a href="mailto:contato@jovemexportador.com.br">contato@jovemexportador.com.br</a></span
              >
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="md-8 sm-4">
          <v-card-title class="text-h5" style="color: #194f34">{{
            $t('CONTACT.component.business_hours.title')
          }}</v-card-title>

          <v-icon class="mr-1 pl-4" style="color: #194f34">
            mdi-calendar-clock
          </v-icon>
          <span class="subheading">{{
            $t('CONTACT.component.business_hours.days_hours')
          }}</span>
        </v-col>
        <v-col cols="md-8 sm-4">
          <v-card-title class="text-h5" style="color: #194f34">{{
            $t('CONTACT.component.get_in_touch.title')
          }}</v-card-title>
          <v-row>
            <v-col cols="1">
              <v-icon class="mr-1 pl-4" style="color: #194f34">
                mdi-account-group
              </v-icon>
            </v-col>
            <v-col cols="11" class="pl-5">
              <span class="subheading">{{
                $t('CONTACT.component.get_in_touch.text')
              }}</span></v-col
            >
          </v-row>
        </v-col>
      </v-row>
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
    },
    subjectRuleRequired: {
      type: String,
      default: '',
      require: true,
    },
  },
  data: (instance) => ({
    valid: true,
    name: '',
    nameRules: [(v) => !!v || (instance.nameRuleRequired ?? '')],
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
    subjectRules: [(v) => !!v || (instance.subjectRuleRequired ?? '')],
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
