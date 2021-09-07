<template>
  <v-row>
    <v-row v-if="loadingScreen" justify="center" align="center">
			<v-progress-circular indeterminate :size="80" color="teal"></v-progress-circular>
		</v-row>
    <v-row v-else justify="center" class="mt-8">
      <v-col v-if="smAndDown" cols="10">
         <v-card v-for="card in cards" :key="card" class="elevation-2 mt-4">
            <v-card-title class="text-h8">
              {{$t(`SERVICES.${card}.title`)}}
            </v-card-title>
            <v-card-text class="text-justify">
              {{$t(`SERVICES.${card}.text`)}}
            </v-card-text>
          </v-card>
       </v-col>

       <v-col v-else cols="10">
         <v-timeline dense>
          <v-timeline-item
            v-for="card in cards"
            :key="card"
          >
            <v-card class="elevation-2">
              <v-card-title class="text-h5">
                {{$t(`SERVICES.${card}.title`)}}
              </v-card-title>
              <v-card-text class="text-justify">
                {{$t(`SERVICES.${card}.text`)}}
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
       </v-col>
    </v-row>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      cards: [
        "content",
        "facilities",
        "sectors",
        "connections",
        "education",
        "missions",
      ]
    }
  },
  computed: {
    loadingScreen() {
      return this.$store.getters.getStateLoadingScreen
    },
    smAndDown() {
      return this.$vuetify.breakpoint.smAndDown
    },
  },
  mounted() {
    this.$store.dispatch('setLoadingScreen', 400)
  },
}
</script>